import React from 'react';
import { AlertTriangle, RotateCcw, X } from 'lucide-react';

interface ResetConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div 
        className="parchment-bg w-full max-w-md rounded-2xl sm:rounded-3xl border-4 border-[#b91c1c] shadow-2xl p-6 relative text-center"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-title"
      >
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#ecd8bc] text-[#78350f] hover:bg-[#e0c4a0] transition-colors"
          aria-label="Mégse"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-full bg-red-100 border-2 border-red-300 text-red-600 flex items-center justify-center mx-auto mb-3">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <h3 id="reset-title" className="text-xl font-bold text-[#451a03] font-heading mb-2">
          Biztosan új játékot kezdesz?
        </h3>

        <p className="text-sm text-[#69421f] leading-relaxed mb-6 font-medium">
          Az újrakezdéssel az összes eddig megszerzett térképdarabod és az állomásokon elért haladásod törlődik. Valóban elölről kezded a kincskeresést?
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#ecd8bc] hover:bg-[#e0c4a0] text-[#522e11] font-bold text-sm border border-[#b89058] transition-colors"
          >
            Mégse, folytatom
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Igen, új játék</span>
          </button>
        </div>
      </div>
    </div>
  );
};
