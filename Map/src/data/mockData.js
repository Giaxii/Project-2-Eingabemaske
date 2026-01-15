export const CENTER = [48.7667, 11.4226];

export const STATIONS = [
    // --- Berufsfeuerwehr ---
    {
        id: 's1',
        name: 'Feuerwehr Ingolstadt (Hauptwache)',
        type: 'Station',
        category: 'Fire',
        position: [48.758, 11.433],
        address: 'Dreizehnerstraße 1, 85049 Ingolstadt',
        mockRouting: { duration: 4, baseTime: 3, trafficDelay: 1, confidence: 87 }
    },
    {
        id: 's2',
        name: 'Werkfeuerwehr AUDI AG',
        type: 'Station',
        category: 'Fire',
        position: [48.783, 11.414],
        address: '85057 Ingolstadt, Audi-Werksgelände',
        mockRouting: { duration: 6, baseTime: 5, trafficDelay: 1, confidence: 82 }
    },

    // --- Rettungswachen (BRK / Partner) ---
    {
        id: 's3',
        name: 'BRK Kreisverband Ingolstadt (RW Mitte)',
        type: 'Station',
        category: 'EMS',
        position: [48.766, 11.422],
        address: 'Auf der Schanz 30, 85049 Ingolstadt',
        mockRouting: { duration: 5, baseTime: 4, trafficDelay: 1, confidence: 89 }
    },
    {
        id: 's27',
        name: 'Rettungswache Ingolstadt Süd',
        type: 'Station',
        category: 'EMS',
        position: [48.729, 11.428],
        address: 'Hanslmairstraße 6, 85051 Ingolstadt',
        mockRouting: { duration: 8, baseTime: 7, trafficDelay: 1, confidence: 84 }
    },
    {
        id: 's45',
        name: 'BRK Rettungswache Klinikum',
        type: 'Station',
        category: 'EMS',
        position: [48.775, 11.402], // Levelingstraße/Klinikum
        address: 'Levelingstraße 21, 85049 Ingolstadt',
        mockRouting: { duration: 6, baseTime: 5, trafficDelay: 1, confidence: 85 }
    },
    {
        id: 's46',
        name: 'ADAC Luftrettung (Christoph 32)',
        type: 'Station',
        category: 'EMS',
        position: [48.7753, 11.4047], // Klinikum Helipad
        address: 'Am Klinikum',
        mockRouting: { duration: 3, baseTime: 2, trafficDelay: 1, confidence: 92 }
    },
    {
        id: 's47',
        name: 'BRK Katastrophenschutzzentrum',
        type: 'Station',
        category: 'EMS',
        position: [48.760, 11.450], // Generic centralized location for logistics
        address: 'Marie-Curie-Straße 18',
        mockRouting: { duration: 7, baseTime: 6, trafficDelay: 1, confidence: 83 }
    },
    {
        id: 's48',
        name: 'Kreis-Wasserwacht Ingolstadt',
        type: 'Station',
        category: 'EMS',
        position: [48.763, 11.418], // Baggersee/Donau area approx
        address: 'Am Auwaldsee',
        mockRouting: { duration: 6, baseTime: 5, trafficDelay: 1, confidence: 86 }
    },

    // --- Freiwillige Feuerwehren (Stadt und Stadtteile) ---
    { id: 's13', name: 'FF IN-Stadtmitte', type: 'Station', category: 'Fire', position: [48.765, 11.424], address: 'Innenstadt', mockRouting: { duration: 4, baseTime: 3, trafficDelay: 1, confidence: 88 } },
    { id: 's16', name: 'FF Ingolstadt-Friedrichshofen', type: 'Station', category: 'Fire', position: [48.780, 11.380], address: 'Friedrichshofen', mockRouting: { duration: 9, baseTime: 8, trafficDelay: 1, confidence: 81 } },
    { id: 's15', name: 'FF Ingolstadt-Ringsee / Kothau', type: 'Station', category: 'Fire', position: [48.750, 11.450], address: 'Ringsee', mockRouting: { duration: 7, baseTime: 6, trafficDelay: 1, confidence: 84 } },
    { id: 's14', name: 'FF Ingolstadt-Haunwöhr', type: 'Station', category: 'Fire', position: [48.745, 11.410], address: 'Haunwöhr', mockRouting: { duration: 8, baseTime: 7, trafficDelay: 1, confidence: 82 } },
    { id: 's17', name: 'FF Ingolstadt Mailing-Feldkirchen', type: 'Station', category: 'Fire', position: [48.770, 11.480], address: 'Mailing-Feldkirchen', mockRouting: { duration: 9, baseTime: 8, trafficDelay: 1, confidence: 80 } },
    { id: 's40', name: 'FF Ingolstadt-Hagau', type: 'Station', category: 'Fire', position: [48.720, 11.370], address: 'Hagau', mockRouting: { duration: 12, baseTime: 10, trafficDelay: 2, confidence: 76 } },
    { id: 's20', name: 'FF Ingolstadt-Gerolfing', type: 'Station', category: 'Fire', position: [48.770, 11.350], address: 'Gerolfing', mockRouting: { duration: 11, baseTime: 9, trafficDelay: 2, confidence: 78 } },
    { id: 's44', name: 'FF Haunstadt / Oberhaunstadt', type: 'Station', category: 'Fire', position: [48.790, 11.440], address: 'Oberhaunstadt', mockRouting: { duration: 8, baseTime: 7, trafficDelay: 1, confidence: 83 } },
    { id: 's18', name: 'FF Etting', type: 'Station', category: 'Fire', position: [48.800, 11.400], address: 'Etting', mockRouting: { duration: 10, baseTime: 8, trafficDelay: 2, confidence: 79 } },
    { id: 's19', name: 'FF Ingolstadt-Zuchering e.V.', type: 'Station', category: 'Fire', position: [48.710, 11.400], address: 'Zuchering', mockRouting: { duration: 13, baseTime: 11, trafficDelay: 2, confidence: 74 } },
    { id: 's37', name: 'FF Rothenturm-Niederfeld', type: 'Station', category: 'Fire', position: [48.730, 11.460], address: 'Rothenturm', mockRouting: { duration: 9, baseTime: 8, trafficDelay: 1, confidence: 81 } },
    { id: 's39', name: 'Feuerwehr Brunnenreuth', type: 'Station', category: 'Fire', position: [48.720, 11.410], address: 'Brunnenreuth', mockRouting: { duration: 11, baseTime: 10, trafficDelay: 1, confidence: 77 } },
    { id: 's36', name: 'FF IN-Hundszell', type: 'Station', category: 'Fire', position: [48.730, 11.390], address: 'Hundszell', mockRouting: { duration: 10, baseTime: 9, trafficDelay: 1, confidence: 78 } },
    { id: 's38', name: 'FF IN-Unsernherrn', type: 'Station', category: 'Fire', position: [48.730, 11.430], address: 'Unsernherrn', mockRouting: { duration: 9, baseTime: 8, trafficDelay: 1, confidence: 80 } },
    { id: 's41', name: 'FF IN-Dünzlau', type: 'Station', category: 'Fire', position: [48.780, 11.320], address: 'Dünzlau', mockRouting: { duration: 14, baseTime: 12, trafficDelay: 2, confidence: 73 } },
    { id: 's42', name: 'FF IN-Mühlhausen', type: 'Station', category: 'Fire', position: [48.790, 11.340], address: 'Mühlhausen', mockRouting: { duration: 13, baseTime: 11, trafficDelay: 2, confidence: 75 } },
    { id: 's43', name: 'FF IN-Pettenhofen', type: 'Station', category: 'Fire', position: [48.795, 11.330], address: 'Pettenhofen', mockRouting: { duration: 14, baseTime: 12, trafficDelay: 2, confidence: 72 } },

    // --- Umland / Nachbarorte ---
    { id: 's4', name: 'FF Gaimersheim', type: 'Station', category: 'Fire', position: [48.813, 11.370], address: 'Gaimersheim', mockRouting: { duration: 12, baseTime: 10, trafficDelay: 2, confidence: 77 } },
    { id: 's5', name: 'FF Manching', type: 'Station', category: 'Fire', position: [48.718, 11.493], address: 'Manching', mockRouting: { duration: 15, baseTime: 13, trafficDelay: 2, confidence: 71 } },
    { id: 's6', name: 'Rettungswache Kösching', type: 'Station', category: 'EMS', position: [48.810, 11.500], address: 'Köpferweg 1', mockRouting: { duration: 14, baseTime: 12, trafficDelay: 2, confidence: 74 } },
    { id: 's7', name: 'FF Eichstätt', type: 'Station', category: 'Fire', position: [48.891, 11.184], address: 'Eichstätt', mockRouting: { duration: 22, baseTime: 19, trafficDelay: 3, confidence: 65 } },
    { id: 's8', name: 'FF Geisenfeld', type: 'Station', category: 'Fire', position: [48.684, 11.611], address: 'Geisenfeld', mockRouting: { duration: 25, baseTime: 21, trafficDelay: 4, confidence: 62 } },
    { id: 's29', name: 'RW Geisenfeld', type: 'Station', category: 'EMS', position: [48.684, 11.611], address: 'Geisenfeld', mockRouting: { duration: 25, baseTime: 21, trafficDelay: 4, confidence: 62 } },
    { id: 's30', name: 'RW Eichstätt', type: 'Station', category: 'EMS', position: [48.891, 11.184], address: 'Eichstätt', mockRouting: { duration: 22, baseTime: 19, trafficDelay: 3, confidence: 65 } },
    { id: 's31', name: 'RW Neuburg', type: 'Station', category: 'EMS', position: [48.730, 11.180], address: 'Neuburg', mockRouting: { duration: 18, baseTime: 15, trafficDelay: 3, confidence: 68 } },
    { id: 's34', name: 'MHD Ingolstadt', type: 'Station', category: 'EMS', position: [48.780, 11.440], address: 'Malteser', mockRouting: { duration: 7, baseTime: 6, trafficDelay: 1, confidence: 84 } },
    { id: 's35', name: 'JUH Ingolstadt', type: 'Station', category: 'EMS', position: [48.750, 11.410], address: 'Johanniter', mockRouting: { duration: 8, baseTime: 7, trafficDelay: 1, confidence: 82 } },
    { id: 's9', name: 'FF Vohburg', type: 'Station', category: 'Fire', position: [48.769, 11.618], address: 'Vohburg', mockRouting: { duration: 24, baseTime: 20, trafficDelay: 4, confidence: 63 } },
    { id: 's10', name: 'FF Lenting', type: 'Station', category: 'Fire', position: [48.799, 11.459], address: 'Lenting', mockRouting: { duration: 9, baseTime: 8, trafficDelay: 1, confidence: 81 } },
    { id: 's12', name: 'FF Reichertshofen', type: 'Station', category: 'Fire', position: [48.658, 11.470], address: 'Reichertshofen', mockRouting: { duration: 20, baseTime: 17, trafficDelay: 3, confidence: 67 } },
    { id: 's21', name: 'FF Großmehring', type: 'Station', category: 'Fire', position: [48.760, 11.530], address: 'Großmehring', mockRouting: { duration: 16, baseTime: 14, trafficDelay: 2, confidence: 70 } },
    { id: 's22', name: 'FF Wettstetten', type: 'Station', category: 'Fire', position: [48.830, 11.410], address: 'Wettstetten', mockRouting: { duration: 11, baseTime: 9, trafficDelay: 2, confidence: 78 } },
    { id: 's23', name: 'FF Hepberg', type: 'Station', category: 'Fire', position: [48.820, 11.460], address: 'Hepberg', mockRouting: { duration: 10, baseTime: 9, trafficDelay: 1, confidence: 79 } }
];

export const HOSPITALS = [
    {
        id: 'h1',
        name: 'Klinikum Ingolstadt GmbH',
        type: 'Hospital',
        position: [48.7753, 11.4047],
        bedsTotal: 1150,
        bedsAvailable: 154, // ~13% available
        emergencyAvailable: true,
        traumaCenter: true,
        address: 'Krumenauerstraße 25, 85049 Ingolstadt'
    },
    {
        id: 'h6',
        name: 'GOIN Bereitschaftspraxis',
        type: 'Hospital',
        position: [48.7753, 11.4047], // Same complex as Klinikum
        bedsTotal: 10,
        bedsAvailable: 8,
        emergencyAvailable: false, // Walk-in clinic
        traumaCenter: false,
        address: 'Krumenauerstraße 25 (am Klinikum)'
    },
    {
        id: 'h3',
        name: 'Klinik Dr. Maul - Notaufnahme',
        type: 'Hospital',
        position: [48.768, 11.423],
        bedsTotal: 80,
        bedsAvailable: 12, // ~15% available
        emergencyAvailable: true,
        traumaCenter: false,
        address: 'Am Nordbahnhof 15, 85049 Ingolstadt'
    },
    {
        id: 'h7',
        name: 'Medical Care Center Klinikum',
        type: 'Hospital',
        position: [48.776, 11.405],
        bedsTotal: 0,
        bedsAvailable: 0,
        emergencyAvailable: false,
        traumaCenter: false,
        address: 'MVZ am Klinikum'
    },
    {
        id: 'h2',
        name: 'Klinik Kösching',
        type: 'Hospital',
        position: [48.8085, 11.4988],
        bedsTotal: 180,
        bedsAvailable: 45, // ~25% available
        emergencyAvailable: true,
        traumaCenter: false,
        address: 'Krankenhausstraße 19, 85092 Kösching'
    },
    {
        id: 'h4',
        name: 'KJF Klinik St. Elisabeth (Neuburg)',
        type: 'Hospital',
        position: [48.7368, 11.1798], // Neuburg
        bedsTotal: 320,
        bedsAvailable: 68, // ~21% available
        emergencyAvailable: true,
        traumaCenter: true,
        address: 'Müller-Gnadenegg-Weg 4, 86633 Neuburg'
    },
    {
        id: 'h5',
        name: 'Danuvius Klinik',
        type: 'Hospital',
        position: [48.7635, 11.4245],
        bedsTotal: 120,
        bedsAvailable: 24, // ~20% available
        emergencyAvailable: false,
        traumaCenter: false,
        address: 'Preysingstraße 1-3, 85049 Ingolstadt'
    }
];

export const VEHICLES = [
    // --- Berufsfeuerwehr Ingolstadt (Hauptwache s1) ---
    // Kurzzug / Löschzug
    { id: 'v1', name: 'Florian Ingolstadt 1/10/1', type: 'Vehicle', category: 'Fire', subtype: 'KdoW', stationId: 's1', position: [48.762, 11.430], status: 'Dispatched', fuel: 95, mission: { keyword: 'Structure Fire with Person in Danger', description: 'Fire Alarm / Person in danger', timeline: [{ time: '22:52', event: 'Dispatched: Structure Fire with Person in Danger' }, { time: '22:57', event: 'Arrived at Scene' }, { time: '23:06', event: 'On Scene' }] } },
    { id: 'v2', name: 'Florian Ingolstadt 1/11/1', type: 'Vehicle', category: 'Fire', subtype: 'ELW 1', stationId: 's1', position: [48.758, 11.433], status: 'Available', fuel: 95 },
    { id: 'v3', name: 'Florian Ingolstadt 1/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's1', position: [48.762, 11.435], status: 'Dispatched', fuel: 85, mission: { keyword: 'Structure Fire with Person in Danger', description: 'Fire Alarm / Person in danger', timeline: [{ time: '22:52', event: 'Dispatched: Structure Fire with Person in Danger' }, { time: '22:57', event: 'Arrived at Scene' }, { time: '23:08', event: 'On Scene' }] } },
    { id: 'v4', name: 'Florian Ingolstadt 1/30/1', type: 'Vehicle', category: 'Fire', subtype: 'DLK 23/12', stationId: 's1', position: [48.758, 11.433], status: 'Available', fuel: 88 },
    { id: 'v5', name: 'Florian Ingolstadt 1/40/2', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's1', position: [48.758, 11.433], status: 'Available', fuel: 100 },
    // Sonderfahrzeuge
    { id: 'v6', name: 'Florian Ingolstadt 1/65/1', type: 'Vehicle', category: 'Fire', subtype: 'KlaF', stationId: 's1', position: [48.758, 11.433], status: 'Available', fuel: 94 },
    { id: 'v7', name: 'Florian Ingolstadt 1/61/1', type: 'Vehicle', category: 'Fire', subtype: 'RW', stationId: 's1', position: [48.758, 11.433], status: 'Available', fuel: 90 },
    { id: 'v8', name: 'Florian Ingolstadt 1/36/1', type: 'Vehicle', category: 'Fire', subtype: 'WLF', stationId: 's1', position: [48.758, 11.433], status: 'Available', fuel: 85 },

    // --- Werkfeuerwehr AUDI (s2) ---
    { id: 'v_audi1', name: 'Florian Audi 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's2', position: [48.785, 11.416], status: 'Dispatched', fuel: 95, mission: { keyword: 'Industrial Fire with Hazmat', description: 'Factory fire', timeline: [{ time: '22:38', event: 'Dispatched: Industrial Fire with Hazmat' }, { time: '22:44', event: 'Arrived at Scene' }, { time: '22:58', event: 'On Scene' }] } },
    { id: 'v_audi2', name: 'Florian Audi 30/1', type: 'Vehicle', category: 'Fire', subtype: 'DLK 23/12', stationId: 's2', position: [48.783, 11.414], status: 'Available', fuel: 95 },
    { id: 'v_audi3', name: 'Florian Audi 29/1', type: 'Vehicle', category: 'Fire', subtype: 'ULF', stationId: 's2', position: [48.783, 11.414], status: 'Available', fuel: 90 },

    // --- BRK Rettungswache Mitte (s3) - The Main Hub ---
    { id: 'e_m1', name: 'RK Ingolstadt 71/1', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's3', position: [48.775, 11.425], status: 'Dispatched', fuel: 100, mission: { keyword: 'Cardiac Arrest', description: 'Cardiac arrest', timeline: [{ time: '23:02', event: 'Dispatched: Cardiac Arrest' }, { time: '23:08', event: 'Arrived at Scene' }, { time: '23:15', event: 'On Scene' }] } },
    { id: 'e_m2', name: 'RK Ingolstadt 71/2', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's3', position: [48.760, 11.420], status: 'Returning', fuel: 95 },
    { id: 'e14', name: 'RK Geisenfeld 71/1', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's29', position: [48.686, 11.613], status: 'Dispatched', fuel: 89, mission: { keyword: 'Respiratory Distress', description: 'Breathing difficulty', timeline: [{ time: '22:55', event: 'Dispatched: Respiratory Distress' }, { time: '23:01', event: 'Arrived at Scene' }] } },
    { id: 'e_m4', name: 'RK Ingolstadt 71/4', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's3', position: [48.769, 11.425], status: 'Dispatched', fuel: 90, mission: { keyword: 'Stroke Alert', description: 'Possible stroke', timeline: [{ time: '23:10', event: 'Dispatched: Stroke Alert' }, { time: '23:15', event: 'Arrived at Scene' }] } },
    { id: 'e15', name: 'RK Neuburg 71/1', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's31', position: [48.732, 11.182], status: 'Dispatched', fuel: 92, mission: { keyword: 'Unconscious Person', description: 'Person unconscious', timeline: [{ time: '23:05', event: 'Dispatched: Unconscious Person' }, { time: '23:12', event: 'Arrived at Scene' }] } },
    { id: 'e_m6', name: 'RK Ingolstadt 76/1', type: 'Vehicle', category: 'EMS', subtype: 'NEF', stationId: 's3', position: [48.766, 11.422], status: 'Available', fuel: 100 },

    // --- Rettungswache Süd (s27) ---
    { id: 'e_s1', name: 'RK Ingolstadt 71/5', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's27', position: [48.725, 11.432], status: 'Dispatched', fuel: 88, mission: { keyword: 'Fall with Injury', description: 'Fall victim', timeline: [{ time: '22:48', event: 'Dispatched: Fall with Injury' }, { time: '22:54', event: 'Arrived at Scene' }, { time: '23:05', event: 'En Route to Hospital' }] } },
    { id: 'e_s2', name: 'RK Ingolstadt 76/2', type: 'Vehicle', category: 'EMS', subtype: 'NEF', stationId: 's27', position: [48.729, 11.428], status: 'Available', fuel: 95 },

    // --- Rettungswache Klinikum (s45) ---
    { id: 'e_k1', name: 'RK Ingolstadt 71/10', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's45', position: [48.775, 11.408], status: 'Returning', fuel: 85 },
    { id: 'e_k2', name: 'RK Ingolstadt 76/3', type: 'Vehicle', category: 'EMS', subtype: 'NEF', stationId: 's45', position: [48.775, 11.402], status: 'Available', fuel: 95 },

    // --- Luftrettung (Christoph 32 at s46) ---
    { id: 'a1', name: 'Christoph 32', type: 'Vehicle', category: 'EMS', subtype: 'RTH', stationId: 's46', position: [48.7700, 11.4100], status: 'Dispatched', fuel: 80, mission: { keyword: 'Mass Casualty Incident', description: 'Multi-vehicle accident', timeline: [{ time: '23:00', event: 'Dispatched: Mass Casualty Incident' }, { time: '23:03', event: 'Airborne' }, { time: '23:12', event: 'Arrived at Scene' }] } },

    // --- Wasserwacht (s48) ---
    { id: 'w1', name: 'Wasserwacht Ingolstadt 91/1', type: 'Vehicle', category: 'EMS', subtype: 'GW-Wasser', stationId: 's48', position: [48.763, 11.418], status: 'Available', fuel: 90 },

    // --- Katastrophenschutz (s47) ---
    { id: 'k1', name: 'Rotkreuz Ingolstadt 54/1', type: 'Vehicle', category: 'EMS', subtype: 'GW-San', stationId: 's47', position: [48.760, 11.450], status: 'Available', fuel: 100 },

    // --- Other EMS Stations ---
    // Station s34 - 3 vehicles
    { id: 'e_mh1', name: 'Johannes Ingolstadt 71/1', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's34', position: [48.780, 11.440], status: 'Available', fuel: 93 },
    { id: 'e_mh2', name: 'Johannes Ingolstadt 71/2', type: 'Vehicle', category: 'EMS', subtype: 'RTW', stationId: 's34', position: [48.780, 11.440], status: 'Available', fuel: 88 },
    { id: 'e_mh3', name: 'Johannes Ingolstadt 76/1', type: 'Vehicle', category: 'EMS', subtype: 'NEF', stationId: 's34', position: [48.780, 11.440], status: 'Available', fuel: 95 },

    // Station s35 - 3 vehicles
    { id: 'e8', name: 'Akkon Ingolstadt 72/1', type: 'Vehicle', category: 'EMS', subtype: 'KTW', stationId: 's35', position: [48.752, 11.412], status: 'Returning', fuel: 85 },
    { id: 'e8b', name: 'Akkon Ingolstadt 72/2', type: 'Vehicle', category: 'EMS', subtype: 'KTW', stationId: 's35', position: [48.752, 11.412], status: 'Available', fuel: 90 },
    { id: 'e8c', name: 'Akkon Ingolstadt 72/3', type: 'Vehicle', category: 'EMS', subtype: 'KTW', stationId: 's35', position: [48.752, 11.412], status: 'Available', fuel: 87 },

    // --- FF Ingolstadt Stadtmitte (s13) ---
    { id: 'v9', name: 'Florian Ingolstadt 2/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's13', position: [48.765, 11.424], status: 'Available', fuel: 96 },
    { id: 'v10', name: 'Florian Ingolstadt 2/30/1', type: 'Vehicle', category: 'Fire', subtype: 'DLK 23/12', stationId: 's13', position: [48.765, 11.424], status: 'Available', fuel: 92 },
    { id: 'v11', name: 'Florian Ingolstadt 2/21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 4000', stationId: 's13', position: [48.765, 11.424], status: 'Available', fuel: 98 },

    // --- FF Haunwöhr (s14) - 3 vehicles
    { id: 'v12', name: 'Florian Ingolstadt 3/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's14', position: [48.745, 11.410], status: 'Available', fuel: 94 },
    { id: 'v13', name: 'Florian Ingolstadt 3/11/1', type: 'Vehicle', category: 'Fire', subtype: 'MZF', stationId: 's14', position: [48.745, 11.410], status: 'Available', fuel: 90 },
    { id: 'v13b', name: 'Florian Ingolstadt 3/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's14', position: [48.745, 11.410], status: 'Available', fuel: 92 },

    // --- FF Ringsee (s15) - 3 vehicles
    { id: 'v14', name: 'Florian Ingolstadt 4/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's15', position: [48.752, 11.452], status: 'Dispatched', fuel: 97, mission: { keyword: 'Vehicle Accident with Entrapment', description: 'Traffic accident with trapped person', timeline: [{ time: '22:45', event: 'Dispatched: Vehicle Accident with Entrapment' }, { time: '22:51', event: 'Arrived at Scene' }, { time: '23:02', event: 'On Scene' }] } },
    { id: 'v15', name: 'Florian Ingolstadt 4/48/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 20 KatS', stationId: 's15', position: [48.750, 11.450], status: 'Available', fuel: 85 },
    { id: 'v15b', name: 'Florian Ingolstadt 4/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's15', position: [48.750, 11.450], status: 'Available', fuel: 90 },

    // --- FF Friedrichshofen (s16) - 3 vehicles
    { id: 'v16', name: 'Florian Ingolstadt 5/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's16', position: [48.782, 11.382], status: 'Dispatched', fuel: 95, mission: { keyword: 'Building Fire', description: 'Apartment fire', timeline: [{ time: '22:50', event: 'Dispatched: Building Fire' }, { time: '22:56', event: 'Arrived at Scene' }] } },
    { id: 'v17', name: 'Florian Ingolstadt 5/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's16', position: [48.780, 11.380], status: 'Available', fuel: 98 },
    { id: 'v17b', name: 'Florian Ingolstadt 5/43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's16', position: [48.780, 11.380], status: 'Available', fuel: 89 },

    // --- FF Mailing (s17) - 3 vehicles
    { id: 'v18', name: 'Florian Ingolstadt 6/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's17', position: [48.770, 11.480], status: 'Available', fuel: 93 },
    { id: 'v19', name: 'Florian Ingolstadt 6/56/1', type: 'Vehicle', category: 'Fire', subtype: 'GW-L2', stationId: 's17', position: [48.770, 11.480], status: 'Available', fuel: 90 },
    { id: 'v19b', name: 'Florian Ingolstadt 6/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's17', position: [48.770, 11.480], status: 'Available', fuel: 87 },

    // --- FF Etting (s18) - 3 vehicles
    { id: 'v20', name: 'Florian Ingolstadt 7/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's18', position: [48.802, 11.402], status: 'Dispatched', fuel: 96, mission: { keyword: 'Brush Fire', description: 'Vegetation fire', timeline: [{ time: '22:42', event: 'Dispatched: Brush Fire' }, { time: '22:49', event: 'Arrived at Scene' }, { time: '22:58', event: 'On Scene' }] } },
    { id: 'v21', name: 'Florian Ingolstadt 7/11/1', type: 'Vehicle', category: 'Fire', subtype: 'MZF', stationId: 's18', position: [48.800, 11.400], status: 'Available', fuel: 92 },
    { id: 'v21b', name: 'Florian Ingolstadt 7/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's18', position: [48.800, 11.400], status: 'Available', fuel: 88 },

    // --- FF Zuchering (s19) - 3 vehicles
    { id: 'v22', name: 'Florian Ingolstadt 8/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's19', position: [48.712, 11.402], status: 'Dispatched', fuel: 95, mission: { keyword: 'Gas Leak', description: 'Natural gas emergency', timeline: [{ time: '23:01', event: 'Dispatched: Gas Leak' }, { time: '23:07', event: 'Arrived at Scene' }] } },
    { id: 'v23', name: 'Florian Ingolstadt 8/11/1', type: 'Vehicle', category: 'Fire', subtype: 'MZF', stationId: 's19', position: [48.710, 11.400], status: 'Available', fuel: 75 },
    { id: 'v23b', name: 'Florian Ingolstadt 8/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's19', position: [48.710, 11.400], status: 'Available', fuel: 85 },

    // --- FF Gerolfing (s20) - 3 vehicles
    { id: 'v24', name: 'Florian Ingolstadt 9/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's20', position: [48.770, 11.350], status: 'Available', fuel: 91 },
    { id: 'v25', name: 'Florian Ingolstadt 9/43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's20', position: [48.770, 11.350], status: 'Available', fuel: 88 },
    { id: 'v25b', name: 'Florian Ingolstadt 9/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's20', position: [48.770, 11.350], status: 'Available', fuel: 90 },

    // --- FF Großmehring (s21) ---
    { id: 'v26', name: 'Florian Großmehring 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's21', position: [48.762, 11.532], status: 'Dispatched', fuel: 94, mission: { keyword: 'Smoke Investigation', description: 'Smoke reported', timeline: [{ time: '22:58', event: 'Dispatched: Smoke Investigation' }, { time: '23:05', event: 'Arrived at Scene' }] } },
    { id: 'v27', name: 'Florian Großmehring 11/1', type: 'Vehicle', category: 'Fire', subtype: 'MZF', stationId: 's21', position: [48.760, 11.530], status: 'Available', fuel: 85 },

    // --- FF Wettstetten (s22) ---
    { id: 'v28', name: 'Florian Wettstetten 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's22', position: [48.828, 11.408], status: 'Returning', fuel: 90 },
    { id: 'v29', name: 'Florian Wettstetten 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's22', position: [48.830, 11.410], status: 'Available', fuel: 90 },

    // --- FF Gaimersheim (s4) ---
    { id: 'v30', name: 'Florian Gaimersheim 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's4', position: [48.810, 11.375], status: 'Dispatched', fuel: 90, mission: { keyword: 'Electrical Fire', description: 'Electrical hazard', timeline: [{ time: '22:53', event: 'Dispatched: Electrical Fire' }, { time: '22:59', event: 'Arrived at Scene' }] } },
    { id: 'v31', name: 'Florian Gaimersheim 30/1', type: 'Vehicle', category: 'Fire', subtype: 'DLK 23/12', stationId: 's4', position: [48.813, 11.370], status: 'Available', fuel: 91 },

    // --- FF Manching (s5) ---
    { id: 'v32', name: 'Florian Manching 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's5', position: [48.720, 11.495], status: 'Dispatched', fuel: 89, mission: { keyword: 'Vehicle Fire', description: 'Car on fire', timeline: [{ time: '22:46', event: 'Dispatched: Vehicle Fire' }, { time: '22:52', event: 'Arrived at Scene' }, { time: '23:00', event: 'On Scene' }] } },
    { id: 'v33', name: 'Florian Manching 61/1', type: 'Vehicle', category: 'Fire', subtype: 'RW', stationId: 's5', position: [48.718, 11.493], status: 'Available', fuel: 94 },

    // --- Village Vehicles ---
    // Eichstätt (s7) - 4 vehicles
    { id: 'v13', name: 'Florian Eichstätt 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's7', position: [48.893, 11.186], status: 'Returning', fuel: 85 },
    { id: 'v13b', name: 'Florian Eichstätt 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's7', position: [48.891, 11.184], status: 'Available', fuel: 92 },
    { id: 'v13c', name: 'Florian Eichstätt 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's7', position: [48.891, 11.184], status: 'Available', fuel: 88 },
    { id: 'v13d', name: 'Florian Eichstätt 43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's7', position: [48.891, 11.184], status: 'Available', fuel: 91 },

    // Geisenfeld (s8) - 5 vehicles
    { id: 'v15', name: 'Florian Geisenfeld 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's8', position: [48.684, 11.611], status: 'Available', fuel: 88 },
    { id: 'v15b', name: 'Florian Geisenfeld 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's8', position: [48.684, 11.611], status: 'Available', fuel: 85 },
    { id: 'v15c', name: 'Florian Geisenfeld 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's8', position: [48.684, 11.611], status: 'Available', fuel: 93 },
    { id: 'v15d', name: 'Florian Geisenfeld 44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's8', position: [48.684, 11.611], status: 'Available', fuel: 87 },
    { id: 'v15e', name: 'Florian Geisenfeld 56/1', type: 'Vehicle', category: 'Fire', subtype: 'GW-L2', stationId: 's8', position: [48.684, 11.611], status: 'Available', fuel: 90 },

    // Vohburg (s9) - 4 vehicles
    { id: 'v16', name: 'Florian Vohburg 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's9', position: [48.769, 11.618], status: 'Available', fuel: 92 },
    { id: 'v16b', name: 'Florian Vohburg 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's9', position: [48.769, 11.618], status: 'Available', fuel: 90 },
    { id: 'v16c', name: 'Florian Vohburg 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's9', position: [48.769, 11.618], status: 'Available', fuel: 86 },
    { id: 'v16d', name: 'Florian Vohburg 43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's9', position: [48.769, 11.618], status: 'Available', fuel: 89 },

    // Lenting (s10) - 5 vehicles
    { id: 'v17', name: 'Florian Lenting 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's10', position: [48.801, 11.461], status: 'Dispatched', fuel: 94, mission: { keyword: 'Automatic Fire Alarm', description: 'Alarm activation', timeline: [{ time: '23:03', event: 'Dispatched' }] } },
    { id: 'v17b', name: 'Florian Lenting 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's10', position: [48.799, 11.459], status: 'Available', fuel: 88 },
    { id: 'v17c', name: 'Florian Lenting 40/2', type: 'Vehicle', category: 'Fire', subtype: 'HLF 10', stationId: 's10', position: [48.799, 11.459], status: 'Available', fuel: 91 },
    { id: 'v17d', name: 'Florian Lenting 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's10', position: [48.799, 11.459], status: 'Available', fuel: 85 },
    { id: 'v17e', name: 'Florian Lenting 14/2', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's10', position: [48.799, 11.459], status: 'Available', fuel: 92 },

    // Pförring (s11) - 4 vehicles
    { id: 'v18', name: 'Florian Pförring 43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 16/12', stationId: 's11', position: [48.808, 11.688], status: 'Available', fuel: 85 },
    { id: 'v18b', name: 'Florian Pförring 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's11', position: [48.808, 11.688], status: 'Available', fuel: 91 },
    { id: 'v18c', name: 'Florian Pförring 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 10', stationId: 's11', position: [48.808, 11.688], status: 'Available', fuel: 88 },
    { id: 'v18d', name: 'Florian Pförring 44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's11', position: [48.808, 11.688], status: 'Available', fuel: 90 },

    // Reichertshofen (s12) - already has 2, add 2 more
    { id: 'v19', name: 'Florian Reichertshofen 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's12', position: [48.660, 11.472], status: 'Returning', fuel: 88 },
    { id: 'v20', name: 'Florian Reichertshofen 11/1', type: 'Vehicle', category: 'Fire', subtype: 'MZF', stationId: 's12', position: [48.660, 11.475], status: 'Available', fuel: 80 },
    { id: 'v20b', name: 'Florian Reichertshofen 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's12', position: [48.660, 11.475], status: 'Available', fuel: 86 },
    { id: 'v20c', name: 'Florian Reichertshofen 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's12', position: [48.660, 11.475], status: 'Available', fuel: 91 },

    // Hepberg (s23) - 4 vehicles
    { id: 'v41', name: 'Florian Hepberg 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's23', position: [48.822, 11.462], status: 'Dispatched', fuel: 90, mission: { keyword: 'Automatic Fire Alarm', description: 'Alarm activation', timeline: [{ time: '23:03', event: 'Dispatched: Automatic Fire Alarm' }, { time: '23:09', event: 'Arrived at Scene' }] } },
    { id: 'v41b', name: 'Florian Hepberg 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's23', position: [48.820, 11.460], status: 'Available', fuel: 95 },
    { id: 'v41c', name: 'Florian Hepberg 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's23', position: [48.820, 11.460], status: 'Available', fuel: 87 },
    { id: 'v41d', name: 'Florian Hepberg 44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's23', position: [48.820, 11.460], status: 'Available', fuel: 89 },

    // Baar-Ebenhausen (s24) - 4 vehicles
    { id: 'v42', name: 'Florian Baar-Ebenhausen 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's24', position: [48.670, 11.460], status: 'Available', fuel: 85 },
    { id: 'v42b', name: 'Florian Baar-Ebenhausen 44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's24', position: [48.670, 11.460], status: 'Available', fuel: 88 },
    { id: 'v42c', name: 'Florian Baar-Ebenhausen 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's24', position: [48.670, 11.460], status: 'Available', fuel: 92 },
    { id: 'v42d', name: 'Florian Baar-Ebenhausen 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's24', position: [48.670, 11.460], status: 'Available', fuel: 84 },

    // Karlskron (s25) - 4 vehicles
    { id: 'v43', name: 'Florian Karlskron 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's25', position: [48.680, 11.420], status: 'Available', fuel: 88 },
    { id: 'v43b', name: 'Florian Karlskron 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's25', position: [48.680, 11.420], status: 'Available', fuel: 93 },
    { id: 'v43c', name: 'Florian Karlskron 43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's25', position: [48.680, 11.420], status: 'Available', fuel: 86 },
    { id: 'v43d', name: 'Florian Karlskron 44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's25', position: [48.680, 11.420], status: 'Available', fuel: 90 },

    // Buxheim (s26) - 4 vehicles
    { id: 'v44', name: 'Florian Buxheim 40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's26', position: [48.802, 11.302], status: 'Dispatched', fuel: 92, mission: { keyword: 'Wildfire', description: 'Forest fire', timeline: [{ time: '22:40', event: 'Dispatched: Wildfire' }, { time: '22:48', event: 'Arrived at Scene' }, { time: '22:55', event: 'On Scene' }] } },
    { id: 'v44b', name: 'Florian Buxheim 21/1', type: 'Vehicle', category: 'Fire', subtype: 'TLF 16/25', stationId: 's26', position: [48.800, 11.300], status: 'Available', fuel: 86 },
    { id: 'v44c', name: 'Florian Buxheim 14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's26', position: [48.800, 11.300], status: 'Available', fuel: 91 },
    { id: 'v44d', name: 'Florian Buxheim 43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's26', position: [48.800, 11.300], status: 'Available', fuel: 88 },

    // --- New Vehicles for latest IN-Stations ---
    // Station s36 - 3 vehicles
    { id: 'v54', name: 'Florian Ingolstadt 10/46/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF-W', stationId: 's36', position: [48.732, 11.392], status: 'Returning', fuel: 85 },
    { id: 'v54b', name: 'Florian Ingolstadt 10/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's36', position: [48.732, 11.392], status: 'Available', fuel: 90 },
    { id: 'v54c', name: 'Florian Ingolstadt 10/44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's36', position: [48.732, 11.392], status: 'Available', fuel: 88 },

    // Station s37 - 3 vehicles
    { id: 'v55', name: 'Florian Ingolstadt 11/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 10', stationId: 's37', position: [48.730, 11.460], status: 'Available', fuel: 92 },
    { id: 'v55b', name: 'Florian Ingolstadt 11/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's37', position: [48.730, 11.460], status: 'Available', fuel: 86 },
    { id: 'v55c', name: 'Florian Ingolstadt 11/44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's37', position: [48.730, 11.460], status: 'Available', fuel: 89 },

    // Station s38 - 3 vehicles
    { id: 'v56', name: 'Florian Ingolstadt 12/42/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's38', position: [48.730, 11.430], status: 'Available', fuel: 88 },
    { id: 'v56b', name: 'Florian Ingolstadt 12/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's38', position: [48.730, 11.430], status: 'Available', fuel: 91 },
    { id: 'v56c', name: 'Florian Ingolstadt 12/44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's38', position: [48.730, 11.430], status: 'Available', fuel: 85 },

    // Station s39 - 3 vehicles
    { id: 'v57', name: 'Florian Ingolstadt 13/43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10/6', stationId: 's39', position: [48.720, 11.410], status: 'Available', fuel: 89 },
    { id: 'v57b', name: 'Florian Ingolstadt 13/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's39', position: [48.720, 11.410], status: 'Available', fuel: 92 },
    { id: 'v57c', name: 'Florian Ingolstadt 13/44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's39', position: [48.720, 11.410], status: 'Available', fuel: 87 },

    // Station s40 - 3 vehicles
    { id: 'v58', name: 'Florian Ingolstadt 14/44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's40', position: [48.720, 11.370], status: 'Available', fuel: 85 },
    { id: 'v58b', name: 'Florian Ingolstadt 14/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's40', position: [48.720, 11.370], status: 'Available', fuel: 90 },
    { id: 'v58c', name: 'Florian Ingolstadt 14/43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's40', position: [48.720, 11.370], status: 'Available', fuel: 88 },

    // Station s41 - 3 vehicles
    { id: 'v59', name: 'Florian Ingolstadt 15/46/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF-W', stationId: 's41', position: [48.780, 11.320], status: 'Available', fuel: 91 },
    { id: 'v59b', name: 'Florian Ingolstadt 15/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's41', position: [48.780, 11.320], status: 'Available', fuel: 87 },
    { id: 'v59c', name: 'Florian Ingolstadt 15/43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's41', position: [48.780, 11.320], status: 'Available', fuel: 89 },

    // Station s42 - 3 vehicles
    { id: 'v60', name: 'Florian Ingolstadt 16/44/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's42', position: [48.790, 11.340], status: 'Available', fuel: 86 },
    { id: 'v60b', name: 'Florian Ingolstadt 16/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's42', position: [48.790, 11.340], status: 'Available', fuel: 91 },
    { id: 'v60c', name: 'Florian Ingolstadt 16/43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's42', position: [48.790, 11.340], status: 'Available', fuel: 88 },

    // Station s43 - 3 vehicles
    { id: 'v61', name: 'Florian Ingolstadt 17/47/1', type: 'Vehicle', category: 'Fire', subtype: 'TSF', stationId: 's43', position: [48.795, 11.330], status: 'Available', fuel: 87 },
    { id: 'v61b', name: 'Florian Ingolstadt 17/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's43', position: [48.795, 11.330], status: 'Available', fuel: 90 },
    { id: 'v61c', name: 'Florian Ingolstadt 17/43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's43', position: [48.795, 11.330], status: 'Available', fuel: 85 },

    // Station s44 - already has 2, add 1 more
    { id: 'v62', name: 'Florian Ingolstadt 18/40/1', type: 'Vehicle', category: 'Fire', subtype: 'HLF 20', stationId: 's44', position: [48.792, 11.442], status: 'Dispatched', fuel: 94, mission: { keyword: 'Water Damage', description: 'Flooding', timeline: [{ time: '23:00', event: 'Dispatched: Water Damage' }, { time: '23:06', event: 'Arrived at Scene' }] } },
    { id: 'v63', name: 'Florian Ingolstadt 18/14/1', type: 'Vehicle', category: 'Fire', subtype: 'MTW', stationId: 's44', position: [48.790, 11.440], status: 'Available', fuel: 96 },
    { id: 'v63b', name: 'Florian Ingolstadt 18/43/1', type: 'Vehicle', category: 'Fire', subtype: 'LF 10', stationId: 's44', position: [48.790, 11.440], status: 'Available', fuel: 89 }
];

export const INCIDENTS = [
    {
        id: 'i1',
        name: 'Structure Fire',
        type: 'Incident',
        description: 'Building Fire with potential victims',
        position: [48.770, 11.425],
        severity: 'High',
        address: 'Paradeplatz 4',
        timeline: [
            { time: '14:45', event: 'Call Received' },
            { time: '14:46', event: 'Dispatch Alerted' }
        ]
    }
];
