import React from 'react';
import { Volume2, VolumeX, BookOpen, RotateCcw, Info } from 'lucide-react';

interface HeaderProps {
  completedCount: number;
  totalStations: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCheatSheet: () => void;
  onOpenStory: () => void;
  onOpenResetConfirm: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  completedCount,
  totalStations,
  soundEnabled,
  onToggleSound,
  onOpenCheatSheet,
  onOpenStory,
  onOpenResetConfirm,
}) => {
  return (
    <header className="w-full max-w-6xl mx-auto px-4 pt-6 pb-4 sm:pt-10 sm:pb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
      {/* Top Left Title and Tagline matching the image */}
      <div>
        <p className="text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#6b5744] uppercase mb-1 sm:mb-1.5 font-sans">
          A térkép nálad van. A tudás lesz a kulcs.
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#271a11] leading-[1.08] tracking-tight">
          Az elveszett<br className="hidden sm:inline" /> tudás térképe
        </h1>
        <p className="text-xs sm:text-sm text-[#7a6450] mt-1.5 font-serif italic">
          „Das Geheimnis der Schatzkarte” &bull; Kincskeresés az iskola és a szabadidő világában (A1–A2)
        </p>
      </div>

      {/* Top Right Control Buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Puska button */}
        <button
          onClick={onOpenCheatSheet}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f5ede0] hover:bg-[#ebdcc9] text-[#4a3220] border border-[#d6c7b2] text-xs sm:text-sm font-medium shadow-sm transition-all active:scale-95"
          title="Módbeli segédigék táblázata"
          aria-label="Puska segédlet megnyitása"
        >
          <BookOpen className="w-4 h-4 text-[#8a5b28]" />
          <span>Puska</span>
        </button>

        {/* Történet button */}
        <button
          onClick={onOpenStory}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f5ede0] hover:bg-[#ebdcc9] text-[#4a3220] border border-[#d6c7b2] text-xs sm:text-sm font-medium shadow-sm transition-all active:scale-95"
          title="Kaland bevezetője"
          aria-label="Történet megnyitása"
        >
          <Info className="w-4 h-4 text-[#8a5b28]" />
          <span>Történet</span>
        </button>

        {/* Sound toggle button */}
        <button
          onClick={onToggleSound}
          className="p-2 rounded-xl bg-[#f5ede0] hover:bg-[#ebdcc9] text-[#4a3220] border border-[#d6c7b2] shadow-sm transition-all active:scale-95"
          title={soundEnabled ? 'Hangok kikapcsolása' : 'Hangok bekapcsolása'}
          aria-label={soundEnabled ? 'Hangok kikapcsolása' : 'Hangok bekapcsolása'}
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-[#2d7a46]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#9c4238]" />
          )}
        </button>

        {/* Új játék button */}
        <button
          onClick={onOpenResetConfirm}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#f5ede0] hover:bg-[#ebdcc9] text-[#7a2e24] border border-[#d6c7b2] text-xs sm:text-sm font-medium shadow-sm transition-all active:scale-95"
          title="Játék újrakezdése"
          aria-label="Új játék indítása"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Új játék</span>
        </button>
      </div>
    </header>
  );
};
