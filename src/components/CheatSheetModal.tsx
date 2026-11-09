import React from 'react';
import { MODAL_VERB_CHEAT_SHEET } from '../data/stationsData';
import { BookOpen, X, Sparkles, AlertCircle } from 'lucide-react';

interface CheatSheetModalProps {
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="parchment-bg w-full max-w-4xl rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-[#996515] shadow-2xl p-4 sm:p-6 md:p-8 relative my-auto max-h-[92vh] flex flex-col overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cheatsheet-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-[#b89058]/50 pb-3 sm:pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#ecd8bc] border border-[#b89058] text-[#92400e]">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#92400e]">
                Nyelvtani Segédlet
              </span>
              <h2 id="cheatsheet-title" className="text-lg sm:text-2xl font-bold text-[#451a03] font-heading">
                Puska: Módbeli segédigék (Modalverben)
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#ecd8bc] hover:bg-[#e0c4a0] text-[#78350f] border border-[#b89058] transition-colors"
            aria-label="Ablak bezárása"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Order Rule Box */}
        <div className="mb-5 p-3.5 sm:p-4 rounded-xl bg-[#fffcf5] border-2 border-[#c8a475] shadow-sm space-y-2">
          <div className="flex items-center gap-2 text-[#78350f] font-bold text-xs sm:text-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Aranyszabályok a német mondatban:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm text-[#451a03]">
            <div className="bg-[#fcf5e8] p-2.5 rounded-lg border border-[#e5cca7]">
              <span className="font-bold block text-[#92400e]">1. Kijelentő mondat:</span>
              A ragozott módbeli segédige a <strong>2. helyen</strong> áll, a főige ragozatlanul (főnévi igenévben) a <strong>mondat legvégére</strong> kerül.
              <p className="mt-1 font-mono text-[11px] sm:text-xs text-[#78350f] bg-white/60 p-1 rounded">
                Ich <u>muss</u> heute Mathe <u>lernen</u>.
              </p>
            </div>
            <div className="bg-[#fcf5e8] p-2.5 rounded-lg border border-[#e5cca7]">
              <span className="font-bold block text-[#92400e]">2. Eldöntendő kérdés:</span>
              A ragozott módbeli segédige az <strong>1. helyre</strong> kerül, a főige itt is a <strong>mondat végén</strong> marad.
              <p className="mt-1 font-mono text-[11px] sm:text-xs text-[#78350f] bg-white/60 p-1 rounded">
                <u>Kannst</u> du mir <u>helfen</u>?
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-[#854d0e] font-semibold pt-1">
            <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
            <span>Figyelem: E/1 (ich) és E/3 (er/sie/es) alakokban NINCS személyrag!</span>
          </div>
        </div>

        {/* Modal Verbs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-4">
          {MODAL_VERB_CHEAT_SHEET.map((verb) => (
            <div
              key={verb.infinitive}
              className="bg-white/85 rounded-xl border-2 border-[#c8a475] p-3.5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#e5cca7] pb-1.5 mb-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-[#78350f] font-serif">
                    {verb.infinitive}
                  </h3>
                  <span className="text-[11px] font-bold text-[#8b5a2b] bg-[#fbf5e8] px-2 py-0.5 rounded border border-[#e5cca7]">
                    {verb.meaningHu}
                  </span>
                </div>

                {/* Conjugation list */}
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b border-[#f3e5ce]">
                      <td className="py-1 text-[#8b5a2b] font-medium w-24">ich</td>
                      <td className="py-1 font-bold text-[#451a03] font-mono">{verb.forms.ich}</td>
                    </tr>
                    <tr className="border-b border-[#f3e5ce]">
                      <td className="py-1 text-[#8b5a2b] font-medium">du</td>
                      <td className="py-1 font-bold text-[#451a03] font-mono">{verb.forms.du}</td>
                    </tr>
                    <tr className="border-b border-[#f3e5ce]">
                      <td className="py-1 text-[#8b5a2b] font-medium">er / sie / es</td>
                      <td className="py-1 font-bold text-[#451a03] font-mono">{verb.forms.er_sie_es}</td>
                    </tr>
                    <tr className="border-b border-[#f3e5ce]">
                      <td className="py-1 text-[#8b5a2b] font-medium">wir</td>
                      <td className="py-1 font-bold text-[#451a03] font-mono">{verb.forms.wir}</td>
                    </tr>
                    <tr className="border-b border-[#f3e5ce]">
                      <td className="py-1 text-[#8b5a2b] font-medium">ihr</td>
                      <td className="py-1 font-bold text-[#451a03] font-mono">{verb.forms.ihr}</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-[#8b5a2b] font-medium">sie / Sie</td>
                      <td className="py-1 font-bold text-[#451a03] font-mono">{verb.forms.sie_Sie}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-2.5 pt-2 border-t border-[#f3e5ce] text-[10px] text-[#714823] italic">
                {verb.note}
              </div>
            </div>
          ))}
        </div>

        {/* Close action */}
        <div className="mt-auto pt-3 border-t-2 border-[#b89058]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#593019] hover:bg-[#783e1e] text-white font-bold text-sm shadow transition-colors"
          >
            Rendben, bezárás
          </button>
        </div>
      </div>
    </div>
  );
};
