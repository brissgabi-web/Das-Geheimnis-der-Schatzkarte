import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/audio';
import { Award, Trophy, Sparkles, RotateCcw, X, Check, Star } from 'lucide-react';
import { StationData } from '../types/game';

interface TreasureChestModalProps {
  stations: StationData[];
  soundEnabled: boolean;
  onClose: () => void;
  onResetGame: () => void;
}

export const TreasureChestModal: React.FC<TreasureChestModalProps> = ({
  stations,
  soundEnabled,
  onClose,
  onResetGame,
}) => {
  useEffect(() => {
    // Play fanfare
    playSound.chestOpen(soundEnabled);

    // Fire fireworks / confetti burst
    const duration = 3.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#f59e0b', '#d97706', '#10b981', '#3b82f6', '#ec4899']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#f59e0b', '#d97706', '#10b981', '#3b82f6', '#ec4899']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, [soundEnabled]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="parchment-bg w-full max-w-3xl rounded-3xl border-4 sm:border-8 border-[#b8860b] shadow-2xl p-5 sm:p-8 relative my-auto max-h-[94vh] flex flex-col overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="treasure-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-[#ecd8bc] hover:bg-[#e0c4a0] text-[#78350f] border border-[#b89058] transition-colors"
          aria-label="Bezárás"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebration Header */}
        <div className="text-center space-y-3 mb-6">
          <div className="relative inline-block">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 border-4 border-yellow-200 shadow-2xl flex items-center justify-center text-5xl sm:text-6xl mx-auto animate-bounce">
              👑
            </div>
            <Sparkles className="w-8 h-8 text-yellow-300 absolute -top-2 -right-2 animate-spin" />
            <Sparkles className="w-6 h-6 text-yellow-200 absolute -bottom-1 -left-1 animate-pulse" />
          </div>

          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#92400e] block">
              A Kaland Végállomása
            </span>
            <h2 id="treasure-title" className="text-2xl sm:text-4xl font-extrabold text-[#451a03] font-heading drop-shadow-sm mt-1">
              Gratulálunk! Megtaláltad az elveszett kincset!
            </h2>
            <p className="text-sm sm:text-base text-[#6b421f] max-w-lg mx-auto mt-2 font-medium">
              Összegyűjtötted mind a hét térképdarabot, és sikeresen felnyitottad a régi iskolai kincsesládát. Büszke lehetsz a kitartásodra és a német tudásodra!
            </p>
          </div>
        </div>

        {/* Ancient Certificate / Diploma Card */}
        <div className="bg-gradient-to-br from-[#fffcf5] via-[#faf3e3] to-[#f4e5c8] border-3 border-[#c29b63] rounded-2xl p-4 sm:p-6 shadow-md mb-6 relative">
          {/* Decorative ribbons / badge */}
          <div className="flex items-center justify-between border-b-2 border-[#b89058]/50 pb-3 mb-4">
            <div className="flex items-center gap-2 text-[#78350f]">
              <Trophy className="w-6 h-6 text-amber-600" />
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-wide uppercase">
                Kincskereső Mesterlevél
              </span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
              ))}
            </div>
          </div>

          <p className="text-center font-serif text-sm sm:text-base text-[#3b1f0c] leading-relaxed mb-4">
            Ezennel tanúsítjuk, hogy sikeresen teljesítetted a <span className="font-bold text-[#78350f]">„Das Geheimnis der Schatzkarte”</span> összes német nyelvi próbáját a Schule und Freizeit témakörben!
          </p>

          {/* 7 Completed Stations Recap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {stations.map(st => (
              <div 
                key={st.id} 
                className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950 font-semibold"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-[10px]">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="truncate">
                  <span className="text-[#78350f] font-bold">{st.id}. állomás: </span>
                  <span>{st.titleHu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#ecd8bc] hover:bg-[#e0c4a0] text-[#522e11] font-bold text-sm sm:text-base border border-[#b89058] shadow transition-colors"
          >
            Térkép áttekintése
          </button>

          <button
            onClick={onResetGame}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Új játék indítása</span>
          </button>
        </div>
      </div>
    </div>
  );
};
