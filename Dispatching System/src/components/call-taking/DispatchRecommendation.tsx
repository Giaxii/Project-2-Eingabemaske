import React, { useState, useEffect } from 'react';
import { ResourceCard } from '../dispatching/ResourceCard';
import { ResourceDetailModal } from '../dispatching/ResourceDetailModal'; // Using this as the view component
import { Flame, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useCAD } from '../../context/CADContext';

// Mock Data for the Recommendation logic
const MOCK_RECOMMENDATIONS = [
    {
        id: '1', type: 'RTW', callsign: 'IN-RK 74/1', eta: '5 min', matchScore: 94,
        distance: '3.2 km', trafficInfo: 'Clear',
        equipmentStatus: 'ready', crewStatus: 'ready', routeStatus: 'optimal'
    },
    {
        id: '2', type: 'NEF', callsign: 'IN-RK 76/1', eta: '7 min', matchScore: 89,
        distance: '5.1 km', trafficInfo: 'Heavy Traffic',
        equipmentStatus: 'ready', crewStatus: 'ready', routeStatus: 'diverted'
    },
    {
        id: '3', type: 'HLF', callsign: 'IN-FW 10/1', eta: '4 min', matchScore: 91,
        distance: '2.8 km', trafficInfo: 'Clear',
        equipmentStatus: 'missing', crewStatus: 'ready', routeStatus: 'optimal'
    },
    {
        id: '4', type: 'DLK', callsign: 'IN-FW 30/1', eta: '6 min', matchScore: 88,
        distance: '4.5 km', trafficInfo: 'Clear',
        equipmentStatus: 'ready', crewStatus: 'warning', routeStatus: 'optimal'
    },
] as const;

export const DispatchRecommendation: React.FC<{ onSelectionChange?: (isSelected: boolean) => void }> = ({ onSelectionChange }) => {
    const { activeCall } = useCAD();
    const [selectedResource, setSelectedResource] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Initial State: Only show if data is sufficient (Validation Check)
    useEffect(() => {
        // Strict Validation: Need Location and Code to show proposal
        if (activeCall.location && activeCall.location.length > 3 && activeCall.code) {
            // Simulate "Proposing..." delay
            setTimeout(() => setIsVisible(true), 1000);
        } else {
            setIsVisible(false);
        }
    }, [activeCall.location, activeCall.code]);

    // Notify parent of selection change
    useEffect(() => {
        onSelectionChange?.(!!selectedResource);
    }, [selectedResource, onSelectionChange]);

    if (!isVisible) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-6 text-center opacity-40 border border-white/5 bg-white/5 rounded-xl border-dashed">
                <AlertTriangle className="w-10 h-10 mb-4 text-textMuted" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Awaiting Data</h3>
                <p className="text-xs text-textMuted mt-2">Please enter location and classification to generate dispatch proposals.</p>
            </div>
        );
    }

    // View Switching: Detailed View (In-Place)
    if (selectedResource) {
        return (
            <div className="h-full w-full bg-transparent flex flex-col gap-4 relative animate-in slide-in-from-right duration-300">
                <div className="flex items-center gap-2 mb-2">
                    <button
                        onClick={() => setSelectedResource(null)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center gap-2 text-sm font-bold text-textMuted hover:text-white uppercase tracking-wider"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Proposals
                    </button>
                </div>

                {/* Reuse Detail Component but embedded */}
                <div className="flex-1 relative">
                    <ResourceDetailModal
                        resource={selectedResource}
                        isOpen={true}
                        onClose={() => setSelectedResource(null)}
                        // We might need to adjust styles since it was a modal before, 
                        // but user asked for "replace the Disposition Proposal view".
                        // Use inline style override to make it fit container if needed.
                        isInline={true}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="h-full w-full bg-transparent flex flex-col gap-4 relative overflow-hidden animate-in fade-in">

            {/* Header: Simplified as requested */}
            <div className="shrink-0 flex items-center justify-between py-2 border-b border-white/5">
                <div>
                    <h2 className="text-xl font-black text-white tracking-tight uppercase flex items-center gap-3">
                        <span className="text-red-500">{activeCall.code || "F2"}</span>
                        <span>{activeCall.keyword ? activeCall.keyword.split(',')[0] : "Housing Fire"}</span>
                    </h2>
                    <div className="text-xs text-textMuted uppercase tracking-widest mt-1">
                        {activeCall.keyword || "Smoke • Person in Danger • 3rd Floor"}
                    </div>
                </div>
                <div className="px-3 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wide flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" />
                    Auto-Dispatch Ready
                </div>
            </div>

            {/* Main Content: Larger Cards List */}
            <div className="flex-1 overflow-y-auto -mx-2 px-2 space-y-4 pt-2 pb-20"> {/* pb-20 for footer space */}
                {MOCK_RECOMMENDATIONS.map(res => (
                    <ResourceCard
                        key={res.id}
                        {...res}
                        isSelected={selectedResource?.id === res.id}
                        onClick={() => setSelectedResource(res)}
                    />
                ))}
            </div>

            {/* Sticky Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-surface border-t border-white/10 backdrop-blur-md flex gap-4 z-20">
                <button className="flex-1 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs transition-all">
                    Add Unit
                </button>
                <button className="flex-[2] py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-red-900/20 transition-all flex items-center justify-center gap-2">
                    <Flame className="w-4 h-4" /> Dispatch
                </button>
            </div>
        </div>
    );
};
