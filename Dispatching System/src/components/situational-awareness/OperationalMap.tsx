import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, useMap, Polyline, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import { renderToStaticMarkup } from 'react-dom/server';
import { Building2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useCAD } from '../../context/CADContext';
import { HOSPITALS, STATIONS } from '../../data/mockData';

// Fix Leaflet Default Icon
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: null,
    iconUrl: null,
    shadowUrl: null,
});

interface RouteMetrics {
    duration: number;
    baseTime: number;
    distance: string;
    delay: number;
    trafficLevel: string;
    distribution: { free: number; moderate: number; heavy: number };
    trafficSegments: { color: string; percent: number }[];
}

const GetIcon = (type: string, category?: string, label?: string, extra?: { emergencyAvailable?: boolean; bedsAvailable?: number; bedsTotal?: number; availableCount?: number; isHighlighted?: boolean; predictedEta?: string }) => {
    let content;
    let bgColor = '#334155';
    let pulse = false;
    let textColor = 'white';
    let size = 40;
    let borderColor = 'white';
    let borderRadius = '50%';
    let borderWidth = '3px';

    if (type === 'Hospital') {
        const isClosed = extra?.emergencyAvailable === false;
        const occupancy = extra ? (1 - (extra.bedsAvailable || 0) / (extra.bedsTotal || 1)) : 0;

        bgColor = '#475569';
        textColor = 'white';

        if (isClosed || occupancy >= 0.95) {
            borderColor = '#ef4444';
        } else if (occupancy >= 0.70) {
            borderColor = '#ff9500';
        } else {
            borderColor = '#22c55e';
        }

        borderRadius = '6px';
        size = 40;
        borderWidth = '2px';

        content = (
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    position: 'relative',
                    width: '16px',
                    height: '16px',
                    opacity: isClosed ? 0.6 : 1
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '100%',
                        backgroundColor: textColor,
                        borderRadius: '2px'
                    }} />
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        transform: 'translateY(-50%)',
                        width: '100%',
                        height: '4px',
                        backgroundColor: textColor,
                        borderRadius: '2px'
                    }} />
                </div>
            </div>
        );
    } else if (type === 'Station') {
        // Aggressive Visual Change: Dynamic Background based on availability
        const hasResources = extra?.availableCount !== undefined && extra.availableCount > 0;

        bgColor = hasResources ? '#059669' : '#1e293b'; // Emerald-600 vs Slate-800
        borderColor = hasResources ? '#34d399' : '#475569'; // Emerald-400 vs Slate-600
        textColor = hasResources ? '#ffffff' : '#94a3b8'; // White vs Slate-400
        borderRadius = '8px'; // Slightly more squared
        size = 44; // Larger
        borderWidth = '3px';

        if (extra?.isHighlighted) {
            borderColor = '#ffff00';
            pulse = true;
        }

        content = (
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building2 size={22} strokeWidth={2} style={{ color: textColor }} />
                {extra?.availableCount !== undefined && (
                    <div className={cn(
                        "absolute -top-3 -right-3 flex items-center justify-center rounded-full text-xs font-black border-2 border-slate-900 shadow-md z-50",
                        hasResources ? "bg-white text-emerald-700" : "bg-slate-700 text-slate-400"
                    )} style={{ width: '24px', height: '24px' }}>
                        {extra.availableCount}
                    </div>
                )}
            </div>
        );
    } else if (type === 'Vehicle') {
        const text = label ? label.split(' ').pop() || '?' : '?'; // Simplified label
        borderRadius = '50%';
        size = 40;
        borderWidth = '0px';

        content = <div style={{
            fontWeight: '800',
            fontSize: text.length > 3 ? '9px' : '11px',
            lineHeight: '1.1',
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            letterSpacing: '-0.02em'
        }}>
            {text}
        </div>;

        if (category === 'Fire') {
            bgColor = '#dc2626';
            textColor = 'white';
        } else {
            bgColor = '#ff9500';
            textColor = 'white';
        }

        if (extra?.isHighlighted) {
            borderColor = '#22c55e'; // Green ring for dispatch selection
            borderWidth = '4px';
            pulse = false;
        }
    } else if (type === 'Incident') {
        content = null;
        bgColor = '#ef4444';
        pulse = true;
        size = 24;
    }

    const html = renderToStaticMarkup(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: bgColor,
            borderRadius: borderRadius,
            border: `${borderWidth} solid ${borderColor}`,
            boxShadow: extra?.isHighlighted ? '0 0 15px 5px rgba(34, 197, 94, 0.5)' : '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
            color: textColor,
        }} className={pulse ? 'pulse-animation' : ''}>
            {content}
        </div>
    );

    return L.divIcon({
        className: 'custom-leaftlet-icon',
        html: html,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -(size / 2)]
    });
};

const RoutingMachine = ({ from, to, setRouteMetrics }: { from: [number, number], to: [number, number], setRouteMetrics: (m: RouteMetrics | null) => void }) => {
    const map = useMap();
    const routingControlRef = useRef<any>(null);
    const [trafficSegments, setTrafficSegments] = useState<any[]>([]);

    useEffect(() => {
        if (!from || !to) return;
        setTrafficSegments([]);
        if (setRouteMetrics) setRouteMetrics(null);

        // @ts-ignore
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(from[0], from[1]),
                L.latLng(to[0], to[1])
            ],
            routeWhileDragging: false,
            addWaypoints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: false,
            showAlternatives: false,
            lineOptions: { styles: [] },
            show: false,
            createMarker: () => null
        });

        routingControl.on('routesfound', function (e: any) {
            const routes = e.routes;
            const route = routes[0];
            const summary = route.summary;
            const coords = route.coordinates;

            if (!coords || coords.length === 0) return;

            const segments: any[] = [];
            let currentSegment = { positions: [coords[0]], distance: 0 };
            const targetSegmentLength = 250;

            for (let i = 1; i < coords.length; i++) {
                const prev = L.latLng(coords[i - 1]);
                const curr = L.latLng(coords[i]);
                const dist = prev.distanceTo(curr);

                currentSegment.positions.push(coords[i]);
                // @ts-ignore
                currentSegment.distance += dist;

                // @ts-ignore
                if (currentSegment.distance >= targetSegmentLength || i === coords.length - 1) {
                    segments.push(currentSegment);
                    currentSegment = { positions: [coords[i]], distance: 0 };
                }
            }

            const avgBaseSpeed = summary.totalDistance / summary.totalTime;

            let totalDelaySeconds = 0;
            let distFree = 0;
            let distModerate = 0;
            let distHeavy = 0;

            const finalSegments = segments.map((seg, index) => {
                const progress = (index / segments.length);
                const rand = Math.random();

                const heavyProb = 0.05 + (progress > 0.7 ? 0.25 : 0);
                const moderateProb = 0.15 + (progress > 0.6 ? 0.25 : 0);

                let color = '#38bdf8';
                let level = 'free';
                let speedFactor = 1.0;

                if (rand < heavyProb) {
                    color = '#ef4444';
                    level = 'heavy';
                    speedFactor = 0.25;
                } else if (rand < heavyProb + moderateProb) {
                    color = '#f97316';
                    level = 'moderate';
                    speedFactor = 0.6;
                }

                if (level === 'free') distFree += seg.distance;
                else if (level === 'moderate') distModerate += seg.distance;
                else distHeavy += seg.distance;

                const segBaseTime = seg.distance / avgBaseSpeed;
                const segDelay = segBaseTime * ((1 / speedFactor) - 1);
                totalDelaySeconds += segDelay;

                return {
                    positions: seg.positions,
                    color: color,
                    distance: seg.distance
                };
            });

            setTrafficSegments(finalSegments);

            const totalDistForBar = finalSegments.reduce((acc, seg) => acc + seg.distance, 0) || 1;
            const barSegments = finalSegments.map(seg => ({
                color: seg.color,
                percent: (seg.distance / totalDistForBar) * 100
            }));

            const safeTotalDist = distFree + distModerate + distHeavy || 1;
            const dist = {
                free: Math.round((distFree / safeTotalDist) * 100),
                moderate: Math.round((distModerate / safeTotalDist) * 100),
                heavy: Math.round((distHeavy / safeTotalDist) * 100)
            };

            const computedDelayMin = Math.round(totalDelaySeconds / 60);
            const visualDelay = (computedDelayMin === 0 && (dist.moderate > 0 || dist.heavy > 0))
                ? 1
                : computedDelayMin;

            if (setRouteMetrics) {
                setRouteMetrics({
                    duration: Math.round((summary.totalTime / 60) + visualDelay),
                    baseTime: Math.round(summary.totalTime / 60),
                    distance: (summary.totalDistance / 1000).toFixed(1),
                    delay: visualDelay,
                    trafficLevel: visualDelay > 5 ? 'High' : (visualDelay > 1 ? 'Moderate' : 'Low'),
                    distribution: dist,
                    trafficSegments: barSegments
                });
            }
        });

        routingControl.addTo(map);
        routingControlRef.current = routingControl;

        return () => {
            if (routingControlRef.current) {
                map.removeControl(routingControlRef.current);
            }
        };
    }, [from[0], from[1], to[0], to[1], map]);

    return (
        <>
            {trafficSegments.map((seg, idx) => (
                <Polyline
                    key={idx}
                    positions={seg.positions}
                    pathOptions={{ color: seg.color, weight: 6, opacity: 0.9 }}
                />
            ))}
        </>
    );
};

const MapUpdater = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
};

const MapClickHandler = () => {
    const { setSelectedUnitId } = useCAD();
    useMapEvents({
        click: () => setSelectedUnitId(null),
    });
    return null;
};

export const OperationalMap: React.FC = () => {
    const {
        incidents: contextIncidents,
        units: contextUnits,
        selectedUnitId,
        setSelectedUnitId,
        dispatchResources,
        dispatchProposalUnits,
        deselectedManualIds
    } = useCAD();

    // Transform Context Data
    const vehicles = contextUnits.map(u => ({
        ...u,
        id: u.id,
        name: u.callSign,
        type: 'Vehicle' as const,
        category: u.category || 'EMS',
        status: u.status,
        position: [u.location.lat, u.location.lng] as [number, number],
        // Mock predicted ETA for visual flair
        predictedEta: undefined
    }));

    const incidents = contextIncidents.filter(i => i.status !== 'Closed').map(i => ({
        ...i,
        id: i.id,
        name: i.type,
        type: 'Incident' as const,
        position: [i.location.lat, i.location.lng] as [number, number],
    }));

    // Calculate highlighted IDs (Dispatch Selection)
    const highlightedUnitIds = React.useMemo(() => {
        const ids: string[] = [];
        dispatchResources.forEach(r => {
            if (r.isSelectedForDispatch) ids.push(r.id);
        });
        dispatchProposalUnits.forEach(u => {
            if (!deselectedManualIds.has(u.id)) ids.push(u.id);
        });
        return ids;
    }, [dispatchResources, dispatchProposalUnits, deselectedManualIds]);

    // Active Incident & Center
    const activeIncident = incidents.find(i => i.status === 'Open' || i.status === 'Dispatching') || incidents[0];
    const mapCenter: [number, number] = activeIncident ? activeIncident.position : [37.7749, -122.4194];

    // Route Metrics State (Visual only for now)
    const [routeMetrics, setRouteMetrics] = useState<RouteMetrics | null>(null);

    return (
        <div className="h-full w-full rounded-xl overflow-hidden border border-border bg-surface relative z-0">
            <MapContainer
                center={mapCenter}
                zoom={13}
                style={{ width: '100%', height: '100%', backgroundColor: '#0e0e0e' }}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a> | Routing by OSRM'
                />

                <MapUpdater center={mapCenter} />
                <MapClickHandler />

                {STATIONS.map(s => {
                    // Check for Status 1 (Free on Radio), Status 2 (Free/Station), or 'Available' (Mock Data String)
                    const availableCount = vehicles.filter(v =>
                        v.stationId === s.id &&
                        (v.status === 'S1' || v.status === 'S2')
                    ).length;

                    const totalRef = 10; // Mock total capacity for visual bar
                    const pct = Math.min((availableCount / totalRef) * 100, 100);

                    return (
                        <Marker
                            key={`${s.id}-${availableCount}`} // CTA: Force re-render when count changes
                            position={s.position}
                            icon={GetIcon('Station', s.category, undefined, { availableCount })}
                            zIndexOffset={500}
                        >
                            <Tooltip direction="top" offset={[0, -20]} opacity={1} className="custom-tooltip-glass">
                                <div className="min-w-[180px] bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 shadow-2xl text-white overflow-hidden">
                                    {/* Header */}
                                    <div className="font-bold text-sm tracking-wide uppercase mb-3 border-b border-slate-700/50 pb-2 flex justify-between items-center">
                                        <span className="text-slate-100">{s.name}</span>
                                        <Building2 size={14} className="text-slate-400" />
                                    </div>

                                    {/* Metrics Container */}
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between items-center text-xs mb-1.5">
                                                <span className="text-slate-400 font-medium">Available Units</span>
                                                <span className={cn("font-mono font-bold text-lg", availableCount > 0 ? "text-emerald-400" : "text-slate-500")}>
                                                    {availableCount}
                                                </span>
                                            </div>
                                            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                                <div
                                                    className={cn("h-full rounded-full transition-all duration-500 shadow-sm", availableCount > 0 ? "bg-emerald-500" : "bg-slate-700")}
                                                    style={{ width: `${pct}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tooltip>
                        </Marker>
                    );
                })}

                {HOSPITALS.map(h => {
                    const occupancy = 1 - (h.bedsAvailable / h.bedsTotal);
                    const occupancyPct = Math.round(occupancy * 100);
                    const isCritical = occupancy >= 0.95 || !h.emergencyAvailable;
                    const statusColor = h.emergencyAvailable ? (occupancy >= 0.95 ? 'text-red-500' : 'text-emerald-400') : 'text-red-500';
                    const statusText = h.emergencyAvailable ? 'OPEN' : 'CLOSED';

                    // Simple trend visual mocking
                    const trendUp = (h.admissions || 0) > 3;

                    return (
                        <Marker
                            key={h.id}
                            position={h.position}
                            icon={GetIcon('Hospital', undefined, undefined, {
                                emergencyAvailable: h.emergencyAvailable,
                                bedsAvailable: h.bedsAvailable,
                                bedsTotal: h.bedsTotal
                            })}
                            zIndexOffset={500}
                        >
                            <Tooltip direction="top" offset={[0, -20]} opacity={1} className="custom-tooltip-glass">
                                <div className="min-w-[200px] bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 shadow-2xl text-white overflow-hidden">
                                    {/* Header */}
                                    <div className="font-bold text-sm tracking-wide uppercase mb-3 border-b border-slate-700/50 pb-2 flex justify-between items-center">
                                        <span className="text-slate-100">{h.name}</span>
                                        <span className={cn("text-[10px] font-black px-2 py-0.5 rounded-full bg-slate-950/50 border border-current", statusColor)}>
                                            {statusText}
                                        </span>
                                    </div>

                                    {/* Metrics Container */}
                                    <div className="space-y-3">
                                        {/* Capacity Row */}
                                        <div>
                                            <div className="flex justify-between items-center text-xs mb-1.5">
                                                <span className="text-slate-400 font-medium">ER Capacity</span>
                                                <span className={cn("font-mono font-bold", isCritical ? "text-red-400" : "text-blue-400")}>{occupancyPct}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden shadow-inner">
                                                <div
                                                    className={cn("h-full rounded-full transition-all duration-500 shadow-sm", isCritical ? "bg-red-500" : (occupancy > 0.7 ? "bg-orange-500" : "bg-blue-500"))}
                                                    style={{ width: `${occupancyPct}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Trend Row */}
                                        <div className="flex justify-between items-center bg-slate-800/50 p-2 rounded-lg">
                                            <span className="text-slate-400 text-xs font-medium">Trend (60m)</span>
                                            <div className="flex items-center gap-2">
                                                <span className={cn("text-xs font-bold", trendUp ? "text-orange-400" : "text-slate-300")}>
                                                    {h.admissions || 0}
                                                </span>
                                                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Admissions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tooltip>
                        </Marker>
                    )
                })}

                {vehicles.map(v => {
                    const isHighlighted = highlightedUnitIds.includes(v.id);
                    return (
                        <Marker
                            key={v.id}
                            position={v.position}
                            icon={GetIcon('Vehicle', v.category, v.name, { isHighlighted })}
                            eventHandlers={{
                                click: (e) => {
                                    L.DomEvent.stopPropagation(e);
                                    setSelectedUnitId(v.id);
                                }
                            }}
                            zIndexOffset={isHighlighted ? 600 : 100}
                        >
                            <Tooltip direction="top" opacity={1}>{v.name}</Tooltip>
                        </Marker>
                    );
                })}

                {incidents.map(i => (
                    <Marker
                        key={i.id}
                        position={i.position}
                        icon={GetIcon('Incident')}
                        // eventHandlers={{ click: () => onSelect(i) }}
                        zIndexOffset={1000}
                    >
                        <Tooltip direction="top" opacity={1}>{i.name}</Tooltip>
                    </Marker>
                ))}

                {/* Routing Logic for Highlighted Units */}
                {highlightedUnitIds.map(unitId => {
                    const unit = vehicles.find(v => v.id === unitId);
                    if (!unit || !activeIncident) return null;

                    return (
                        <RoutingMachine
                            key={unitId}
                            from={unit.position}
                            to={activeIncident.position}
                            setRouteMetrics={setRouteMetrics}
                        />
                    );
                })}

            </MapContainer>

            {/* Metrics Overlay (Optional - showing just for demo if routes exist) */}
            {routeMetrics && highlightedUnitIds.length > 0 && (
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur border border-border p-3 rounded-lg text-xs z-[1000] shadow-xl max-w-[200px]">
                    <div className="font-bold text-white mb-1">Traffic Analysis</div>
                    <div className="flex justify-between text-textMuted mb-1">
                        <span>Distance:</span>
                        <span className="text-white">{routeMetrics.distance} km</span>
                    </div>
                    <div className="flex justify-between text-textMuted mb-1">
                        <span>Est. Time:</span>
                        <span className={cn(
                            "font-bold",
                            routeMetrics.trafficLevel === 'High' ? "text-red-400" : "text-green-400"
                        )}>{routeMetrics.duration} min</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700 rounded-full mt-2 flex overflow-hidden">
                        {routeMetrics.trafficSegments.map((seg, i) => (
                            <div key={i} style={{ width: `${seg.percent}%`, backgroundColor: seg.color }} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
