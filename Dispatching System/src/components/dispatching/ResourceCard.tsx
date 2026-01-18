import React from 'react';
import { Ambulance, Truck, ShieldAlert, CheckCircle2, BriefcaseMedical, Users, MapPin, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface ResourceCardProps {
    id: string;
    type: string;
    callsign: string;
    eta: string;
    matchScore: number;
    isSelected: boolean;
    distance?: string;
    trafficInfo?: string;
    // Removed Status Props as requested for List View
    onClick: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
    id, type, callsign, eta, matchScore, isSelected,
    distance, trafficInfo,
    onClick
}) => {

    // Helper for color ring based on score
    const getScoreColor = (score: number) => {
        if (score >= 90) return 'text-green-500 border-green-500';
        if (score >= 70) return 'text-yellow-500 border-yellow-500';
        return 'text-red-500 border-red-500';
    };

    return (
        <div
            onClick={onClick}
            className={cn(
                "glass-panel rounded-xl p-4 cursor-pointer transition-all duration-300 hover:bg-white/5 hover:scale-[1.01] relative overflow-hidden group",
                isSelected ? 'ring-2 ring-primary bg-primary/10' : ''
            )}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Icon Box */}
                    <div className={cn(
                        "p-3 rounded-xl bg-white/5 flex items-center justify-center transition-colors",
                        isSelected ? 'text-primary bg-primary/20' : 'text-textMuted group-hover:text-white'
                    )}>
                        {type === 'RTW' ? <Ambulance className="w-6 h-6" /> : <Truck className="w-6 h-6" />}
                    </div>

                    {/* Main Info */}
                    <div>
                        <div className="flex items-baseline gap-2">
                            <h4 className="font-black text-xl text-white tracking-tight">{callsign}</h4>
                            <span className="text-xs font-bold text-textMuted uppercase">{type}</span>
                        </div>

                        {/* ETA & Context */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 text-white/90">
                                <span className="font-mono font-bold text-lg leading-tight">{eta}</span>
                                {distance && (
                                    <span className="text-xs text-textMuted font-medium flex items-center gap-1">
                                        • {distance}
                                        {trafficInfo && <span className={cn(
                                            "px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider",
                                            trafficInfo.includes('Heavy') ? "bg-red-500/20 text-red-300" : "bg-white/10 text-stone-400"
                                        )}>{trafficInfo}</span>}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Score & Label */}
                <div className="flex flex-col items-end justify-center min-w-[80px]">
                    {/* Score Ring */}
                    <div className={cn(
                        "relative w-12 h-12 flex items-center justify-center rounded-full border-[3px] font-bold text-sm bg-black/20 mb-1",
                        getScoreColor(matchScore)
                    )}>
                        {matchScore}%
                    </div>
                    <span className="text-[9px] font-bold text-textMuted uppercase tracking-wider text-right leading-tight">
                        System<br />Confidence
                    </span>
                </div>
            </div>
        </div>
    );
};
