import React from 'react';
import { X } from 'lucide-react';

interface StoryModalProps {
  onStart: () => void;
  canCloseWithoutStart?: boolean;
  onClose?: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  onStart,
  canCloseWithoutStart = false,
  onClose,
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      onStart();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden animate-fade-in select-none">
      
      {/* 
        Main Container:
        Expansive antique parchment paper held by a student's hands.
        Dynamically preserves the exact 1264/848 aspect ratio of the photo so it never crops or overflows on any screen!
      */}
      <div 
        className="relative w-full my-auto rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] border-4 border-[#5a381b] bg-[#1a0e06]"
        style={{
          maxWidth: 'min(860px, calc(84vh * (1264 / 848)))',
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-title"
      >
        {/* Close Button disguised as an antique wax seal pin in top right */}
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-40 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#8a1414] to-[#450a0a] text-[#fef3c7] border-2 border-[#b91c1c] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
          title="Ablak bezárása"
          aria-label="Ablak bezárása"
        >
          <X className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Photorealistic Background Scene (Student holding expansive parchment in the attic) */}
        <div className="relative w-full aspect-[1264/848]">
          <img
            src="/assets/aistudio/student_hands_parchment.jpg"
            alt="Egy diák tartja a kezében az iskola padlásán talált ősrégi pergament"
            className="w-full h-full object-cover block pointer-events-none"
          />

          {/* 
            Expansive Manuscript Reading Layer:
            Strictly bounded inside the unburnt, clean parchment area (top: 14%, bottom: 15%, left: 23%, right: 21%)
            High-contrast calligraphy, completely scroll-free, perfectly proportioned inside the paper!
          */}
          <div className="absolute top-[14%] bottom-[15%] left-[23%] right-[21%] flex flex-col justify-between px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1">
            
            {/* 1. Header section */}
            <div className="text-center pt-0.5">
              <span className="text-[9px] sm:text-[11px] font-extrabold tracking-[0.2em] text-[#6b2c0a] uppercase font-serif block">
                A Régi Iskola Legendája
              </span>
              <h2 
                id="story-title" 
                className="text-sm sm:text-lg md:text-xl font-serif font-black text-[#140601] tracking-tight leading-tight mt-0.5"
              >
                Das Geheimnis der Schatzkarte
              </h2>
              <p className="text-[9px] sm:text-[11px] md:text-xs font-serif italic text-[#3d1a08] font-bold mt-0.5">
                Kincskeresés az iskola és a szabadidő világában (A1–A2)
              </p>
              <div className="h-0.5 w-16 sm:w-24 bg-[#7a3915]/35 mx-auto mt-0.5 sm:mt-1" />
            </div>

            {/* 2. Story Narrative with Illuminated Drop Capital */}
            <div className="font-serif text-[10px] sm:text-xs md:text-[13px] text-[#140601] font-semibold leading-relaxed italic text-justify px-1 my-0.5 sm:my-1">
              <span className="float-left text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#851810] mr-1.5 leading-[0.85] select-none font-fantasy">
                E
              </span>
              gy régi térképet találtál az iskola padlásán. Vajon hová vezet? 
              Indulj útnak, oldd meg a német feladatokat, és gyűjtsd össze a hét térképdarabot! 
              Ha ügyes vagy, megtalálod az elveszett kincset.
            </div>

            {/* 3. Codex Decrees / Rules in 3 balanced columns */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-0.5 sm:py-1 border-t border-b border-[#7a3915]/30 font-serif text-[#1f0a02]">
              <div className="flex flex-col bg-[#faecd6]/75 p-1 sm:p-1.5 rounded-lg border border-[#7a3915]/25 shadow-xs">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="font-bold text-[#851810] font-fantasy text-[10px] sm:text-xs">I.</span>
                  <strong className="text-[#140601] font-extrabold text-[9px] sm:text-[11px]">7 titkos kapu</strong>
                </div>
                <span className="text-[8px] sm:text-[10px] leading-tight font-medium text-[#2b1206]">
                  Német feladatok a <em>Schule und Freizeit</em> világából.
                </span>
              </div>

              <div className="flex flex-col bg-[#faecd6]/75 p-1 sm:p-1.5 rounded-lg border border-[#7a3915]/25 shadow-xs">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="font-bold text-[#851810] font-fantasy text-[10px] sm:text-xs">II.</span>
                  <strong className="text-[#140601] font-extrabold text-[9px] sm:text-[11px]">Gyakorlás & segítség</strong>
                </div>
                <span className="text-[8px] sm:text-[10px] leading-tight font-medium text-[#2b1206]">
                  Nincs pontlevonás! A 3. hiba után magyar magyarázat segít.
                </span>
              </div>

              <div className="flex flex-col bg-[#faecd6]/75 p-1 sm:p-1.5 rounded-lg border border-[#7a3915]/25 shadow-xs">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="font-bold text-[#851810] font-fantasy text-[10px] sm:text-xs">III.</span>
                  <strong className="text-[#140601] font-extrabold text-[9px] sm:text-[11px]">A kincs nyitása</strong>
                </div>
                <span className="text-[8px] sm:text-[10px] leading-tight font-medium text-[#2b1206]">
                  Mind a 7 darab után kinyithatod a végső kincsesládát!
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
