import React from 'react';
import { X, CheckCircle, AlertTriangle, Battery, Gauge, MapPin, Clock } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

interface ResourceDetailModalProps {
    resource: any; // Using any for rapid prototyping, define type properly later
    isOpen: boolean;
    onClose: () => void;
    isInline?: boolean; // New prop for inline display
}

export const ResourceDetailModal: React.FC<ResourceDetailModalProps> = ({ resource, isOpen, onClose, isInline = false }) => {
    if (!isOpen || !resource) return null;

    const Container = 'div';
    const containerClasses = isInline
        ? "w-full h-full"
        : "absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200";

    const panelClasses = isInline
        ? "glass-panel w-full h-full rounded-2xl flex overflow-hidden shadow-none ring-1 ring-white/10 flex-col md:flex-row"
        : "glass-panel w-full max-w-5xl h-[85vh] rounded-2xl flex overflow-hidden shadow-2xl ring-1 ring-white/10";

    const paddingClass = isInline ? "p-6 gap-5" : "p-8 gap-6"; // Medium Density: p-6
    const headerTitleClass = isInline ? "text-3xl" : "text-5xl"; // Medium Density: 3xl
    const statGridClass = isInline ? "grid-cols-3 gap-3" : "grid-cols-3 gap-4";
    const statBoxClass = isInline ? "p-3" : "p-4";

    return (
        <Container className={containerClasses}>
            <div className={panelClasses}>

                {/* Main Content (Left) */}
                <div className={`flex-1 ${paddingClass} flex flex-col overflow-y-auto`}>

                    {/* Header: Compact for Inline */}
                    <div className="flex justify-between items-start shrink-0">
                        <div>
                            <div className="text-xs font-mono text-textMuted uppercase tracking-widest mb-1">Primary Option</div>
                            <h1 className={`font-black text-white tracking-tight ${headerTitleClass}`}>{resource.callsign}</h1>
                            <div className="flex gap-4 text-sm text-textMuted mt-1">
                                <span className="flex items-center gap-1"><Battery className="w-4 h-4" /> 22%</span>
                                <span className="flex items-center gap-1 text-green-400"><CheckCircle className="w-4 h-4" /> Operational</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={`${isInline ? "text-3xl" : "text-4xl"} font-bold text-white`}>{resource.eta}</div>
                            <div className={`font-bold ${resource.matchScore > 90 ? "text-green-500" : "text-yellow-500"}`}>
                                {resource.matchScore}% <span className="text-xs text-textMuted font-normal uppercase tracking-wider">Confidence</span>
                            </div>
                        </div>
                    </div>

                    {/* Status Bars: Medium Density */}
                    <div className={`grid ${statGridClass} shrink-0`}>
                        <div className={`bg-surfaceHighlight/50 ${statBoxClass} rounded-lg border border-white/5`}>
                            <div className="flex justify-between text-xs font-bold uppercase text-textMuted mb-2">
                                <span>Route</span>
                                <span className="text-green-400">Stable</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[90%] rounded-full" />
                            </div>
                        </div>
                        <div className={`bg-surfaceHighlight/50 ${statBoxClass} rounded-lg border border-white/5`}>
                            <div className="flex justify-between text-xs font-bold uppercase text-textMuted mb-2">
                                <span>Equip</span>
                                <span className="text-red-400">Missing</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[40%] rounded-full" />
                            </div>
                        </div>
                        <div className={`bg-surfaceHighlight/50 ${statBoxClass} rounded-lg border border-white/5`}>
                            <div className="flex justify-between text-xs font-bold uppercase text-textMuted mb-2">
                                <span>Crew</span>
                                <span className="text-green-400">Fresh</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 w-[95%] rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* AI Reasoning Box: Medium Density */}
                    <div className={`bg-blue-900/20 border border-blue-500/30 rounded-lg relative overflow-hidden group shrink-0 ${isInline ? "p-4" : "p-6"}`}>
                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50" />
                        <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Gauge className="w-4 h-4" /> AI Analysis
                        </h3>
                        <p className={`${isInline ? "text-base" : "text-lg"} text-blue-100 font-medium leading-relaxed`}>
                            Crew has <span className="text-white font-bold">89% punctuality</span>. Traffic favors B13 approach.
                        </p>
                    </div>

                    {/* Detailed Stats List: Medium Density */}
                    <div className="space-y-3 overflow-y-auto pr-1">
                        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border-l-2 border-green-500 pl-4">
                            <MapPin className="w-5 h-5 text-green-500 mt-1" />
                            <div>
                                <div className="font-bold text-green-400 text-sm uppercase">Route</div>
                                <div className="text-sm text-textMuted">3.0 km • Clear</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border-l-2 border-red-500 pl-4 bg-red-500/5">
                            <AlertTriangle className="w-5 h-5 text-red-500 mt-1" />
                            <div>
                                <div className="font-bold text-red-400 text-sm uppercase">Warning</div>
                                <div className="text-sm text-textMuted">Missing: <span className="text-white">Rescue Boat</span></div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sidebar (Alternatives): Hidden if inline and space is tight? Or keep it very small? 
                    User asked for "Disposition container without requiring excessive scrolling".
                    If we show alternatives in inline view, it might cramp it.
                    Let's only show alternatives if NOT inline, OR make it a bottom section?
                    For now, hiding alternatives in Inline High Density View to save space, or making it collapse?
                    Let's keep it but formatted densely. 
                */}
                {/* Sidebar (Alternatives) */}
                <div className={`${isInline ? "w-full h-32 border-t md:w-48 md:h-auto md:border-l md:border-t-0" : "w-80 border-l"} border-white/10 bg-black/20 p-3 overflow-y-auto shrink-0`}>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-[10px] font-bold text-textMuted uppercase tracking-widest">Alternatives</h3>
                        {!isInline && (
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X className="w-5 h-5 text-white" />
                            </button>
                        )}
                    </div>

                    <div className="space-y-2">
                        {/* Mock Alternatives */}
                        <div className="p-2 rounded border border-white/10 bg-white/5 hover:border-white/20 transition-all cursor-pointer group">
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-bold text-white text-sm">IN-RK 71/1</span>
                                <span className="text-red-400 font-mono text-xs">40%</span>
                            </div>
                            <div className="text-[10px] text-textMuted mb-2">+1m • Missing Equip</div>
                            <button className="w-full py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 hover:bg-primary hover:text-white rounded transition-colors text-textMuted">
                                Select
                            </button>
                        </div>
                        <div className="p-2 rounded border border-white/10 bg-white/5 hover:border-white/20 transition-all cursor-pointer group">
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-bold text-white text-sm">MHD-IN 1</span>
                                <span className="text-red-400 font-mono text-xs">32%</span>
                            </div>
                            <div className="text-[10px] text-textMuted mb-2">+4m • Traffic</div>
                            <button className="w-full py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 hover:bg-primary hover:text-white rounded transition-colors text-textMuted">
                                Select
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};
