// Import manifest data
import fleetManifest from '../../fleet_manifest.json';
import stationsManifest from '../../stations_manifest.json';
import hospitalsManifest from '../../hospitals_manifest.json';

export interface Location {
    lat: number;
    lng: number;
}

export type LatLngTuple = [number, number];

export interface MockRouting {
    duration: number;
    baseTime: number;
    trafficDelay: number;
    confidence: number;
}

export interface Station {
    id: string;
    name: string;
    type: 'Station';
    category: 'Fire' | 'EMS';
    position: LatLngTuple;
    address: string;
    mockRouting: MockRouting;
}

export interface Hospital {
    id: string;
    name: string;
    type: 'Hospital';
    position: LatLngTuple;
    bedsTotal: number;
    bedsAvailable: number;
    emergencyAvailable: boolean;
    traumaCenter: boolean;
    address: string;
    admissions?: number;
}

export interface TimelineEvent {
    time: string;
    event: string;
}

export interface Mission {
    keyword: string;
    description: string;
    timeline: TimelineEvent[];
}

export interface Vehicle {
    id: string;
    name: string;
    type: 'Vehicle';
    category: 'Fire' | 'EMS';
    subtype: string;
    stationId: string;
    position: LatLngTuple;
    status: 'Available' | 'Dispatched' | 'Returning' | 'In Transit';
    fuel: number;
    mission?: Mission;
}

export interface Incident {
    id: string;
    name: string;
    type: 'Incident';
    description: string;
    position: LatLngTuple;
    severity: 'High' | 'Medium' | 'Low';
    address: string;
    timeline: TimelineEvent[];
}

// San Francisco center coordinates
export const CENTER: LatLngTuple = [37.7749, -122.4194];

// Helper function to calculate mock routing data based on distance from center
const calculateMockRouting = (lat: number, lng: number): MockRouting => {
    const centerLat = CENTER[0];
    const centerLng = CENTER[1];

    // Simple distance calculation (not accurate but good enough for mock data)
    const distance = Math.sqrt(
        Math.pow((lat - centerLat) * 69, 2) +
        Math.pow((lng - centerLng) * 54.6, 2)
    );

    // Base time in minutes (assuming ~30 mph average speed in city)
    const baseTime = Math.max(2, Math.round(distance * 2));
    const trafficDelay = Math.max(1, Math.round(baseTime * 0.2));
    const duration = baseTime + trafficDelay;

    // Confidence decreases with distance
    const confidence = Math.max(60, Math.round(95 - (distance * 5)));

    return {
        duration,
        baseTime,
        trafficDelay,
        confidence
    };
};

// Helper function to determine vehicle category from type
const getVehicleCategory = (type: string): 'Fire' | 'EMS' => {
    const emsTypes = ['PRIVATE', 'BLS', 'ALS', 'SUPPORT'];
    return emsTypes.includes(type) ? 'EMS' : 'Fire';
};

// Helper function to determine station category from name
const getStationCategory = (name: string): 'Fire' | 'EMS' => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('ems') || lowerName.includes('ambulance')) {
        return 'EMS';
    }
    return 'Fire'; // Default to Fire for SFFD stations
};

// Transform stations from manifest
export const STATIONS: Station[] = stationsManifest.map((station: any) => ({
    id: station.id,
    name: station.name,
    type: 'Station' as const,
    category: getStationCategory(station.name),
    position: [station.coords.lat, station.coords.lng] as LatLngTuple,
    address: station.name, // Using name as address since detailed addresses aren't in manifest
    mockRouting: calculateMockRouting(station.coords.lat, station.coords.lng)
}));

// Transform hospitals from manifest
export const HOSPITALS: Hospital[] = hospitalsManifest.map((hospital: any) => ({
    id: hospital.id,
    name: hospital.name,
    type: 'Hospital' as const,
    position: [hospital.coords.lat, hospital.coords.lng] as LatLngTuple,
    bedsTotal: hospital.bedsTotal,
    bedsAvailable: hospital.bedsAvailable,
    emergencyAvailable: hospital.emergencyAvailable,
    traumaCenter: hospital.traumaCenter || false,
    address: hospital.address,
    admissions: Math.floor(Math.random() * 6) // Random admissions for demo purposes
}));

// Transform vehicles/fleet from manifest
export const VEHICLES: Vehicle[] = fleetManifest.map((unit: any) => {
    const category = getVehicleCategory(unit.type);
    const isAvailable = unit.status?.is_available ?? true;

    return {
        id: unit.unit_id,
        name: unit.unit_id,
        type: 'Vehicle' as const,
        category,
        subtype: unit.type,
        stationId: unit.home_station,
        position: [unit.current_pos.lat, unit.current_pos.lng] as LatLngTuple,
        status: isAvailable ? 'Available' : 'Dispatched',
        fuel: unit.status?.battery ?? 100,
        // Add mission for dispatched vehicles
        ...((!isAvailable) && {
            mission: {
                keyword: 'Emergency Response',
                description: 'Active emergency call',
                timeline: [
                    { time: new Date().toLocaleTimeString(), event: 'Dispatched' }
                ]
            }
        })
    };
});

// Sample incident for San Francisco (Mission District)
export const INCIDENTS: Incident[] = [
    {
        id: 'i1',
        name: 'Medical Emergency',
        type: 'Incident',
        description: 'Medical emergency requiring immediate response',
        position: [37.7599, -122.4148],
        severity: 'High',
        address: 'Mission District, San Francisco',
        timeline: [
            { time: new Date().toLocaleTimeString(), event: 'Call Received' },
            { time: new Date(Date.now() + 60000).toLocaleTimeString(), event: 'Units Dispatched' }
        ]
    }
];

// === Backward Compatibility Exports for CAD Screens ===
export const MOCK_UNITS = VEHICLES;
export const MOCK_INCIDENTS = INCIDENTS;
export const MOCK_HOSPITALS = HOSPITALS;
