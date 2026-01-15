import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import Sidebar from './components/Sidebar';
import { HOSPITALS as INITIAL_HOSPITALS, VEHICLES as INITIAL_VEHICLES, INCIDENTS, STATIONS } from './data/mockData';

const App = () => {
    const [vehicles, setVehicles] = useState(INITIAL_VEHICLES);
    const [hospitals, setHospitals] = useState(INITIAL_HOSPITALS);
    const [selectedItem, setSelectedItem] = useState(null);
    const [routeMetrics, setRouteMetrics] = useState(null);

    // Simulation Effect: Real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            // 1. Vehicle Simulation
            setVehicles(currentVehicles =>
                currentVehicles.map(v => {
                    // Simulate random movement (jitter) if status is 'In Transit'
                    let newPos = v.position;
                    if (v.status === 'In Transit') {
                        newPos = [
                            v.position[0] + (Math.random() - 0.5) * 0.0005,
                            v.position[1] + (Math.random() - 0.5) * 0.0005
                        ];
                    }

                    // Simulate fuel consumption
                    let newFuel = v.fuel;
                    if (v.status !== 'Available' && Math.random() > 0.7) {
                        newFuel = Math.max(0, v.fuel - 1);
                    }

                    return { ...v, position: newPos, fuel: newFuel };
                })
            );

            // 2. Hospital Simulation - Update less frequently for stability
            setHospitals(currentHospitals =>
                currentHospitals.map(h => {
                    // Only update 20% of the time (1 in 5 cycles) to prevent rapid fluctuation
                    if (Math.random() > 0.2) {
                        return h; // No change this cycle
                    }

                    // 1. Calculate dynamic admissions (Walk the value to be smooth)
                    // Scale max admissions based on hospital size (approx 1 per 50 beds capacity)
                    const maxAdmissions = Math.max(5, Math.ceil(h.bedsTotal / 50));
                    const currentAdmissions = h.admissions !== undefined ? h.admissions : Math.round(maxAdmissions * 0.5);

                    // Random walk -1, 0, +1 to simulate trend
                    const change = Math.floor(Math.random() * 3) - 1;
                    let newAdmissions = Math.max(0, Math.min(maxAdmissions, currentAdmissions + change));

                    // 2. Correlate Occupancy with Admissions ("low admission then low occupancy")
                    // Intensity = 0.0 (Empty) to 1.0 (Full Load)
                    const intensity = newAdmissions / maxAdmissions;

                    // Base occupancy 50%, add up to 45% based on intensity
                    // This ensures: Low Admissions (~0) -> ~50% Occupancy (Green/Good)
                    //              High Admissions (max) -> ~95% Occupancy (Red/Critical)
                    const targetOccupancyRate = 0.50 + (intensity * 0.45);

                    // Add slight noise to occupancy so it's not perfectly linear
                    const noise = (Math.random() - 0.5) * 0.02; // +/- 1%
                    const finalOccupancyRate = Math.min(0.99, Math.max(0.4, targetOccupancyRate + noise));

                    const targetOccupied = Math.round(h.bedsTotal * finalOccupancyRate);
                    const newAvailable = Math.max(0, h.bedsTotal - targetOccupied);

                    // Determine ER Status based on capacity
                    const isCritical = newAvailable < 3 || (newAvailable / h.bedsTotal) < 0.02;

                    return {
                        ...h,
                        bedsAvailable: newAvailable,
                        admissions: newAdmissions,
                        emergencyAvailable: !isCritical
                    };
                })
            );

        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Sync selected item with live data
    useEffect(() => {
        if (selectedItem) {
            if (selectedItem.type === 'Vehicle') {
                const updated = vehicles.find(v => v.id === selectedItem.id);
                if (updated) setSelectedItem(updated);
            } else if (selectedItem.type === 'Hospital') {
                const updated = hospitals.find(h => h.id === selectedItem.id);
                if (updated) setSelectedItem(updated);
            }
        }
    }, [vehicles, hospitals, selectedItem]);

    const handleSelect = (item) => {
        setSelectedItem(item);
    };

    const handleClose = () => {
        setSelectedItem(null);
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', overflow: 'hidden' }}>
            <MapComponent
                hospitals={hospitals}
                vehicles={vehicles}
                incidents={INCIDENTS}
                stations={STATIONS}
                selectedItem={selectedItem}
                onSelect={handleSelect}
                setRouteMetrics={setRouteMetrics}
            />

            <Sidebar
                item={selectedItem}
                onClose={handleClose}
                incidents={INCIDENTS}
                stations={STATIONS}
                vehicles={vehicles}
                onSelectVehicle={handleSelect}
                routeMetrics={routeMetrics}
            />
        </div>
    );
};

export default App;
