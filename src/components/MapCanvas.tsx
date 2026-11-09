import React, { useState } from 'react';
import { StationData } from '../types/game';
import { GateIllustration } from './GateIllustrations';
import { Search, Check, Sparkles, ZoomIn, ZoomOut, RotateCcw, ArrowRight, Play } from 'lucide-react';
import { playSound } from '../utils/audio';

interface MapCanvasProps {
  stations: StationData[];
  completedStations: number[];
  currentStationId: number;
  soundEnabled: boolean;
  onSelectStation: (stationId: number) => void;
  onOpenChest: () => void;
}

export const MapCanvas: React.FC<MapCanvasProps> = ({
  stations,
  completedStations,
  currentStationId,
  soundEnabled,
  onSelectStation,
  onOpenChest,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  
  // Selected / Active preview station state - defaults to current active station
  const [selectedStationId, setSelectedStationId] = useState<number>(currentStationId);

  const allCompleted = completedStations.length === stations.length;
  const currentStation = stations.find(s => s.id === currentStationId) || stations[0];
  const activeStation = stations.find(s => s.id === selectedStationId) || currentStation;

  const isSelectedCompleted = completedStations.includes(activeStation.id);
  const isSelectedCurrent = currentStationId === activeStation.id && !isSelectedCompleted;
  const isSelectedLocked = !isSelectedCompleted && !isSelectedCurrent;
  const isSelectedChest = activeStation.id === 7 && allCompleted;

  const handleZoomIn = () => {
    playSound.click(soundEnabled);
    setZoomLevel(prev => Math.min(prev + 0.25, 1.75));
  };

  const handleZoomOut = () => {
    playSound.click(soundEnabled);
    setZoomLevel(prev => Math.max(prev - 0.25, 1));
  };

  const handleZoomReset = () => {
    playSound.click(soundEnabled);
    setZoomLevel(1);
  };

  const handleGateClick = (st: StationData) => {
    playSound.click(soundEnabled);
    setSelectedStationId(st.id);

    const isCompleted = completedStations.includes(st.id);
    const isCurrent = currentStationId === st.id && !isCompleted;
    const isLocked = !isCompleted && !isCurrent;
    const isChestTarget = st.id === 7 && allCompleted;

    if (isChestTarget) {
      onOpenChest();
    } else if (!isLocked) {
      onSelectStation(st.id);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 pb-12 select-none">
      {/* The Main Parchment Card */}
      <div className="bg-[#f8f3e5] rounded-2xl sm:rounded-3xl border border-[#dcd4c0] shadow-xl p-4 sm:p-7 md:p-8 relative">
        
        {/* Card Header matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
          <div>
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.22em] text-[#786149] uppercase font-sans">
              Expedíciós térkép
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#2a1c12] mt-0.5">
              Hét lépés a kincsig
            </h2>
          </div>

          <div className="flex items-center sm:items-end justify-between sm:justify-start gap-4">
            {/* Interactive Zoom Controls */}
            <div className="flex items-center gap-1 bg-[#ede4d2] p-1 rounded-xl border border-[#d2c4ae]">
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 1.75}
                className="p-1 sm:p-1.5 rounded-lg hover:bg-[#e2d5c0] text-[#5c4128] disabled:opacity-40 transition-colors"
                title="Térkép nagyítása"
                aria-label="Térkép nagyítása"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                className="p-1 sm:p-1.5 rounded-lg hover:bg-[#e2d5c0] text-[#5c4128] disabled:opacity-40 transition-colors"
                title="Térkép kicsinyítése"
                aria-label="Térkép kicsinyítése"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              {zoomLevel > 1 && (
                <button
                  onClick={handleZoomReset}
                  className="p-1 sm:p-1.5 rounded-lg hover:bg-[#e2d5c0] text-[#5c4128] transition-colors"
                  title="Nézet visszaállítása"
                  aria-label="Nézet visszaállítása"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Station Counter & Progress */}
            <div className="text-right">
              <span className="text-xs sm:text-sm font-semibold text-[#3b2b1d]">
                {completedStations.length} / {stations.length} állomás
              </span>
              <div className="w-28 sm:w-44 h-1.5 bg-[#e0d5c1] rounded-full overflow-hidden mt-1 ml-auto">
                <div 
                  className="h-full bg-[#704d2e] rounded-full transition-all duration-500"
                  style={{ width: `${(completedStations.length / stations.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 
          Map Viewport Area:
          NO FLOATING OVERLAYS INSIDE!
          Every single station (including 6. Lena naplója) is 100% visible and directly clickable!
        */}
        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#c4b397] shadow-inner bg-[#d8be96]">
          
          <div 
            className="relative w-full aspect-[1110/456] min-h-[250px] transition-transform duration-300 origin-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            {/* Clean Map Image Base (Without baked-in static text & buttons) */}
            <img 
              src="/assets/aistudio/map_clean.jpg" 
              alt="Das Geheimnis der Schatzkarte - Expedíciós térkép" 
              className="w-full h-full object-cover block pointer-events-none"
            />

            {/* Interactive Station Hotspots positioned exactly over the map coordinates */}
            {stations.map((st) => {
              const isCompleted = completedStations.includes(st.id);
              const isCurrent = currentStationId === st.id && !isCompleted;
              const isLocked = !isCompleted && !isCurrent;
              const isChestTarget = st.id === 7 && allCompleted;
              const isSelected = selectedStationId === st.id;

              return (
                <div
                  key={st.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer transition-transform duration-200 z-10"
                  style={{
                    left: `${st.mapCoords.x}%`,
                    top: `${st.mapCoords.y}%`,
                  }}
                  onMouseEnter={() => setSelectedStationId(st.id)}
                >
                  {/* Gate Circle Marker with Dedicated Gate Illustration */}
                  <button
                    onClick={() => handleGateClick(st)}
                    className={`relative rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                      isChestTarget
                        ? 'w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-yellow-500 border-2 sm:border-3 border-amber-800 shadow-xl animate-bounce text-xl sm:text-2xl ring-4 ring-yellow-400/50'
                        : isCurrent
                        ? 'w-12 h-12 sm:w-16 sm:h-16 bg-[#fffdf9] border-2 sm:border-3 border-[#263e36] shadow-xl hover:scale-110 active:scale-95 ring-4 ring-[#263e36]/25'
                        : isCompleted
                        ? 'w-9 h-9 sm:w-12 sm:h-12 bg-[#f7f2e4] border-2 border-[#166534] shadow-md hover:scale-105 active:scale-95'
                        : 'w-8 h-8 sm:w-11 sm:h-11 bg-[#e9ded0]/95 border border-[#9e886d] opacity-90 hover:opacity-100 hover:scale-105'
                    } ${isSelected ? 'ring-4 ring-amber-600/70 scale-105' : ''}`}
                    aria-label={`${st.id}. kapu: ${st.mapLocationName}`}
                  >
                    {/* The Gate Miniature Illustration */}
                    <div className="w-full h-full p-0.5 sm:p-1 flex items-center justify-center">
                      <GateIllustration id={st.id} size={46} />
                    </div>

                    {/* Badge Overlay Indicator (Magnifying Glass for Current, Check for Completed, Number for Locked) */}
                    {isCurrent && (
                      <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-5 h-5 sm:w-6 sm:h-6 bg-[#263e36] text-white rounded-full flex items-center justify-center shadow-md border border-[#fffdf9]">
                        <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                    )}

                    {isCompleted && (
                      <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-[#166534] text-white rounded-full flex items-center justify-center shadow-md border border-[#fffdf9]">
                        <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                    )}

                    {isLocked && !isChestTarget && (
                      <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-[#785938] text-white rounded-full flex items-center justify-center shadow font-bold text-[9px] sm:text-[11px] font-serif border border-[#fbf5e8]">
                        {st.id}
                      </div>
                    )}

                    {isChestTarget && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md border border-yellow-200 animate-spin">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </button>

                  {/* Station Pill Label under marker */}
                  <div
                    onClick={() => handleGateClick(st)}
                    className={`mt-1 sm:mt-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-semibold whitespace-nowrap shadow-sm border transition-all flex items-center gap-1 ${
                      isChestTarget
                        ? 'bg-amber-100 text-amber-950 border-amber-600 font-bold animate-pulse ring-2 ring-yellow-400'
                        : isCurrent
                        ? 'bg-[#fffdf9] text-[#1c120a] border-[#b09e86] font-bold ring-2 ring-[#263e36]/30'
                        : isCompleted
                        ? 'bg-[#f7f2e4] text-[#166534] border-[#c0b197]'
                        : 'bg-[#f4ebe0]/90 text-[#4a3724] border-[#c7b79e]'
                    } ${isSelected ? 'shadow-md border-amber-700' : ''}`}
                  >
                    <span>{isChestTarget ? 'Kincsesöböl ✨' : st.mapLocationName}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 
          Dedicated Active Gate Control Panel - Placed BELOW the map!
          Completely free of any overlap, highly functional, always accessible.
        */}
        <div className="mt-4 sm:mt-5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#fffdf9] to-[#faf3e6] border-2 border-[#c8a475] shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 w-full md:w-auto">
            {/* Large Gate Miniature Picture */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-[#f5ede0] border-2 border-[#b89058] p-1 shadow-sm flex items-center justify-center">
              <GateIllustration id={activeStation.id} size={50} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#92400e]">
                  {activeStation.subtitleHu}
                </span>
                <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border ${
                  isSelectedCompleted
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : isSelectedCurrent
                    ? 'bg-amber-100 text-amber-950 border-amber-400 font-extrabold'
                    : 'bg-stone-100 text-stone-600 border-stone-300'
                }`}>
                  {isSelectedCompleted
                    ? 'Teljesítve ✓'
                    : isSelectedCurrent
                    ? 'Aktuális kapu 🔍'
                    : 'Zárolt kapu 🔒'}
                </span>
              </div>

              <h3 className="font-serif font-bold text-base sm:text-lg text-[#3b1f0c] leading-tight truncate mt-0.5">
                {activeStation.mapLocationName} <span className="font-normal text-xs sm:text-sm text-[#784d28]">({activeStation.titleHu})</span>
              </h3>
              <p className="text-xs text-[#714823] font-medium truncate mt-0.5">
                {activeStation.themeDe} &bull; {activeStation.questions.length} feladat
              </p>
            </div>
          </div>

          {/* Action button & Legend */}
          <div className="flex flex-wrap items-center justify-between md:justify-end gap-3 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-[#e8d7be]">
            {/* Quick Legend */}
            <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#6b5744]">
              <span className="flex items-center gap-1 font-medium"><span>🔍</span> Aktuális</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1 font-medium"><span className="text-[#166534] font-bold">✓</span> Kész</span>
              <span>&bull;</span>
              <span>Szám: Zárva</span>
            </div>

            {/* Direct Open Button */}
            {isSelectedLocked ? (
              <span className="text-xs font-semibold text-stone-500 italic bg-stone-100 px-3 py-2 rounded-xl border border-stone-200">
                Előbb a korábbi kapuk kellenek 🔒
              </span>
            ) : (
              <button
                onClick={() => {
                  playSound.click(soundEnabled);
                  if (activeStation.id === 7 && allCompleted) {
                    onOpenChest();
                  } else {
                    onSelectStation(activeStation.id);
                  }
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#593019] to-[#783e1e] hover:from-[#783e1e] hover:to-[#924c25] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>
                  {isSelectedChest
                    ? 'Kincsesláda kinyitása ✨'
                    : isSelectedCompleted
                    ? 'Feladatok újranézése'
                    : 'Belépés a kapun'}
                </span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            )}
          </div>
        </div>

        {/* Interactive Gate Mini-Gallery: 7 Gates with their miniature pictures */}
        <div className="mt-5 pt-4 border-t border-[#dfd6c4]/80">
          <div className="flex items-center justify-between text-xs font-bold text-[#69421f] mb-2.5">
            <span className="uppercase tracking-wider">A hét kapu és helyszín áttekintése:</span>
            <span className="text-[#8c6b49] font-normal italic hidden sm:inline">Kattints bármelyikre a kiválasztáshoz vagy megnyitáshoz!</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {stations.map((st) => {
              const isCompleted = completedStations.includes(st.id);
              const isCurrent = currentStationId === st.id && !isCompleted;
              const isLocked = !isCompleted && !isCurrent;
              const isChestTarget = st.id === 7 && allCompleted;
              const isSelected = selectedStationId === st.id;

              return (
                <button
                  key={st.id}
                  onClick={() => handleGateClick(st)}
                  className={`p-2 rounded-xl border text-left flex items-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-[#fffdf8] border-[#263e36] ring-2 ring-[#263e36]/40 shadow-md scale-[1.02]'
                      : isCurrent
                      ? 'bg-[#fffcf2] border-amber-500 shadow-sm'
                      : isCompleted
                      ? 'bg-[#f4faee] border-[#166534]/50 shadow-sm'
                      : 'bg-[#ede5d5]/80 border-[#c4b397] opacity-80 hover:opacity-100'
                  }`}
                  title={`${st.id}. ${st.mapLocationName}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/90 p-0.5 border border-[#c4b397] shrink-0 shadow-xs flex items-center justify-center">
                    <GateIllustration id={st.id} size={28} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold text-[#451a03] truncate">
                      {st.id}. {st.mapLocationName}
                    </div>
                    <div className="text-[9px] text-[#784f27] truncate">
                      {isCompleted ? '✓ Teljesítve' : isCurrent ? '🔍 Aktuális' : '🔒 Zárva'}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Bottom explanatory footnotes matching screenshot */}
      <div className="text-center mt-6 text-xs text-[#7d6955] space-y-1 font-serif">
        <p>
          A feltöltött Schule und Freizeit gyakorló alapján &bull; Első kipróbálható változat
        </p>
        <p className="text-[11px] text-[#947e68]">
          A haladás ezen az oldalon marad meg a böngésződben; az Új játék gombbal indítható újra.
        </p>
      </div>
    </div>
  );
};
