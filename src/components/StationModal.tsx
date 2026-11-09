import React, { useState, useEffect } from 'react';
import { 
  StationData, 
  Question, 
  ArticleChoiceQuestion, 
  AnagramInputQuestion, 
  SingleChoiceQuestion, 
  SentenceBuilderQuestion, 
  BooleanChoiceQuestion 
} from '../types/game';
import { isAnswerCorrect, isSentenceCorrect } from '../utils/validation';
import { playSound } from '../utils/audio';
import { GateIllustration } from './GateIllustrations';
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ArrowRight, 
  Undo2, 
  Trash2, 
  BookOpen, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface StationModalProps {
  station: StationData;
  currentQuestionIndex: number;
  attemptsMap: Record<string, number>;
  soundEnabled: boolean;
  onClose: () => void;
  onQuestionCompleted: (stationId: number, questionIndex: number) => void;
  onStationCompleted: (stationId: number) => void;
  onOpenCheatSheet: () => void;
}

export const StationModal: React.FC<StationModalProps> = ({
  station,
  currentQuestionIndex,
  attemptsMap,
  soundEnabled,
  onClose,
  onQuestionCompleted,
  onStationCompleted,
  onOpenCheatSheet,
}) => {
  const [qIndex, setQIndex] = useState(currentQuestionIndex);
  const currentQuestion: Question = station.questions[qIndex] || station.questions[0];

  // User input states
  const [selectedArticle, setSelectedArticle] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');
  const [selectedChoice, setSelectedChoice] = useState<string>('');
  const [selectedBoolean, setSelectedBoolean] = useState<boolean | null>(null);
  const [selectedSentenceTokens, setSelectedSentenceTokens] = useState<string[]>([]);

  // Verification & feedback states
  const questionKey = `${station.id}_${qIndex}`;
  const [currentQuestionAttempts, setCurrentQuestionAttempts] = useState<number>(
    attemptsMap[questionKey] || 0
  );
  const [feedbackState, setFeedbackState] = useState<'idle' | 'empty' | 'incorrect' | 'revealed' | 'correct'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');

  // Station complete celebration state
  const [isStationFinished, setIsStationFinished] = useState(false);

  // Collapsible reading text for station 6
  const [isReadingOpen, setIsReadingOpen] = useState(true);

  // Reset inputs when question changes
  useEffect(() => {
    setSelectedArticle('');
    setTextInput('');
    setSelectedChoice('');
    setSelectedBoolean(null);
    setSelectedSentenceTokens([]);
    setFeedbackState('idle');
    setFeedbackMessage('');
    setCurrentQuestionAttempts(0);
  }, [qIndex]);

  // Insert umlaut into text input
  const handleInsertUmlaut = (char: string) => {
    setTextInput(prev => prev + char);
  };

  // Add word card to sentence builder
  const handleAddToken = (token: string, cardIndex: number) => {
    playSound.click(soundEnabled);
    setSelectedSentenceTokens(prev => [...prev, token]);
  };

  // Remove word card from sentence builder
  const handleRemoveToken = (indexToRemove: number) => {
    playSound.click(soundEnabled);
    setSelectedSentenceTokens(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  // Handle Check ("Ellenőrzés")
  const handleCheckAnswer = () => {
    playSound.click(soundEnabled);

    let isCorrect = false;
    let isEmpty = false;

    switch (currentQuestion.type) {
      case 'article-choice': {
        const q = currentQuestion as ArticleChoiceQuestion;
        if (!selectedArticle) {
          isEmpty = true;
        } else {
          isCorrect = isAnswerCorrect(selectedArticle, q.acceptedAnswers);
        }
        break;
      }
      case 'anagram-input': {
        const q = currentQuestion as AnagramInputQuestion;
        if (!textInput.trim()) {
          isEmpty = true;
        } else {
          isCorrect = isAnswerCorrect(textInput, q.acceptedAnswers);
        }
        break;
      }
      case 'single-choice': {
        const q = currentQuestion as SingleChoiceQuestion;
        if (!selectedChoice) {
          isEmpty = true;
        } else {
          isCorrect = isAnswerCorrect(selectedChoice, [q.correctAnswer]);
        }
        break;
      }
      case 'sentence-builder': {
        const q = currentQuestion as SentenceBuilderQuestion;
        if (selectedSentenceTokens.length === 0) {
          isEmpty = true;
        } else {
          isCorrect = isSentenceCorrect(selectedSentenceTokens, q.acceptedSentences);
        }
        break;
      }
      case 'boolean-choice': {
        const q = currentQuestion as BooleanChoiceQuestion;
        if (selectedBoolean === null) {
          isEmpty = true;
        } else {
          isCorrect = selectedBoolean === q.correctAnswer;
        }
        break;
      }
    }

    // Rule: Empty answer does NOT count as a failed attempt!
    if (isEmpty) {
      setFeedbackState('empty');
      setFeedbackMessage('Kérlek, válassz vagy írj be egy választ az ellenőrzés előtt!');
      return;
    }

    if (isCorrect) {
      playSound.correct(soundEnabled);
      setFeedbackState('correct');
      setFeedbackMessage('Ügyes vagy! Megtaláltad a helyes utat!');
    } else {
      const nextAttempts = currentQuestionAttempts + 1;
      setCurrentQuestionAttempts(nextAttempts);

      if (nextAttempts >= 3) {
        // 3rd failed attempt: Reveal solution & Hungarian explanation!
        playSound.wrong(soundEnabled);
        setFeedbackState('revealed');
        setFeedbackMessage('Három sikertelen próbálkozás után itt a helyes megoldás és a magyarázat:');
      } else {
        // 1st or 2nd failed attempt: Do NOT reveal solution
        playSound.wrong(soundEnabled);
        setFeedbackState('incorrect');
        setFeedbackMessage(`Zsákutca! Nézd meg még egyszer, és próbáld újra! (${nextAttempts}. próbálkozás a 3-ból)`);
      }
    }
  };

  // Move to next question or complete station
  const handleProceed = () => {
    playSound.click(soundEnabled);
    onQuestionCompleted(station.id, qIndex);

    if (qIndex + 1 < station.questions.length) {
      setQIndex(prev => prev + 1);
    } else {
      // Station completed!
      playSound.mapPiece(soundEnabled);
      setIsStationFinished(true);
      onStationCompleted(station.id);
    }
  };

  // Helper to format correct answer string for display upon 3 fails
  const getCorrectAnswerDisplay = (q: Question) => {
    switch (q.type) {
      case 'article-choice':
        return (q as ArticleChoiceQuestion).acceptedAnswers.join(' vagy ');
      case 'anagram-input':
        return (q as AnagramInputQuestion).acceptedAnswers[0];
      case 'single-choice':
        return (q as SingleChoiceQuestion).correctAnswer;
      case 'sentence-builder':
        return (q as SentenceBuilderQuestion).acceptedSentences[0];
      case 'boolean-choice':
        return (q as BooleanChoiceQuestion).correctAnswer ? 'Richtig (Igaz)' : 'Falsch (Hamis)';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      {/* Modal Card */}
      <div 
        className="parchment-bg w-full max-w-3xl rounded-2xl sm:rounded-3xl border-4 sm:border-6 border-[#996515] shadow-2xl p-4 sm:p-6 md:p-8 relative my-auto max-h-[92vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="station-title"
      >
        {/* Top bar with Station Title, Progress, and Close button */}
        <div className="flex items-start justify-between gap-3 border-b-2 border-[#b89058]/50 pb-3 sm:pb-4 mb-4">
          <div className="flex items-center gap-3">
            {/* Gate Miniature Picture */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#f5ede0] border-2 border-[#b89058] p-1 shadow-sm shrink-0 flex items-center justify-center">
              <GateIllustration id={station.id} size={46} />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#92400e]">
                  {station.subtitleHu}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#ecd8bc] text-[#714823] border border-[#b89058]/60">
                  {station.themeDe}
                </span>
              </div>
              <h2 id="station-title" className="text-lg sm:text-2xl font-bold text-[#451a03] font-serif mt-0.5">
                {station.mapLocationName} <span className="text-xs sm:text-sm font-normal text-[#784d28]">({station.titleHu})</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCheatSheet}
              className="p-2 rounded-xl bg-[#ecd8bc] hover:bg-[#e0c4a0] text-[#78350f] border border-[#b89058] transition-colors"
              title="Módbeli segédigék puska"
              aria-label="Puska segédlet"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#92400e]" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#ecd8bc] hover:bg-[#e0c4a0] text-[#78350f] border border-[#b89058] transition-colors"
              aria-label="Ablak bezárása"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Either Station Completion Celebration OR Question View */}
        {isStationFinished ? (
          /* Station Complete Celebration View */
          <div className="flex-1 flex flex-col items-center justify-center text-center py-6 sm:py-10 space-y-5 animate-fade-in">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-4 border-yellow-200 shadow-xl flex items-center justify-center text-4xl sm:text-5xl animate-bounce">
              🗺️
            </div>
            <div>
              <span className="text-sm font-extrabold text-emerald-800 uppercase tracking-widest block mb-1">
                Állomás sikeresen teljesítve!
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#451a03] font-heading">
                Ügyes vagy! Megszereztél egy térképdarabot!
              </h3>
              <p className="text-sm sm:text-base text-[#69421f] max-w-md mx-auto mt-2 font-medium">
                Megtaláltad a(z) <span className="font-bold text-[#92400e]">„{station.mapPieceName}”</span> nevű darabot. A térkép következő szakasza megnyílt előtted!
              </p>
            </div>

            <button
              onClick={onClose}
              className="px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center gap-2"
            >
              <span>Vissza a térképhez</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          /* Active Question View */
          <div className="flex-1 flex flex-col overflow-y-auto pr-1">
            {/* Progress indicator */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#714823] mb-3">
              <span>{qIndex + 1} / {station.questions.length}. feladat</span>
              <div className="w-36 sm:w-48 bg-[#e8d7be] h-2.5 rounded-full overflow-hidden border border-[#b89058]/60">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-emerald-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((qIndex + 1) / station.questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Reading text accordion (for Station 6) */}
            {station.readingPassageDe && (
              <div className="mb-4 rounded-xl border-2 border-[#b89058] bg-[#f5ebd9] overflow-hidden shadow-sm">
                <button
                  onClick={() => setIsReadingOpen(!isReadingOpen)}
                  className="w-full px-4 py-2.5 bg-[#ecdcc3] hover:bg-[#e4cfb4] flex items-center justify-between text-left font-bold text-xs sm:text-sm text-[#451a03] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#92400e]" />
                    <span>Olvasmány: {station.readingPassageTitleDe || 'Német szöveg'}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#714823]">
                    <span>{isReadingOpen ? 'Összecsukás' : 'Szöveg megtekintése'}</span>
                    {isReadingOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isReadingOpen && (
                  <div className="p-3 sm:p-4 text-xs sm:text-sm text-[#3b1f0c] leading-relaxed whitespace-pre-line border-t border-[#b89058]/40 bg-[#fffcf5]/70 italic font-serif">
                    {station.readingPassageDe}
                  </div>
                )}
              </div>
            )}

            {/* Hungarian Instruction Box */}
            <div className="bg-[#f0e3ce] border-l-4 border-[#b45309] px-3.5 py-2.5 rounded-r-xl mb-4 shadow-inner text-xs sm:text-sm text-[#522e11] font-medium">
              <span className="font-bold block sm:inline text-[#78350f]">Útmutatás: </span>
              {currentQuestion.instructionHu}
            </div>

            {/* German Question Prompt */}
            <div className="bg-[#fffdfa] rounded-2xl p-4 sm:p-5 border-2 border-[#c8a475] shadow-sm mb-4">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#8b5a2b] block mb-1">
                Kérdés / Mondat (Deutsch):
              </span>
              <p className="text-base sm:text-xl font-bold text-[#291404] tracking-wide font-serif">
                {currentQuestion.questionDe}
              </p>
              {currentQuestion.type === 'single-choice' && (currentQuestion as SingleChoiceQuestion).contextHu && (
                <p className="text-xs sm:text-sm text-[#78350f] mt-1.5 italic">
                  💡 {(currentQuestion as SingleChoiceQuestion).contextHu}
                </p>
              )}
            </div>

            {/* Interactive Inputs based on Question Type */}
            <div className="mb-4">
              {/* 1. Article Choice Input (Station 1) */}
              {currentQuestion.type === 'article-choice' && (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#69421f]">
                    Kattints a megfelelő névelőre:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                    {(currentQuestion as ArticleChoiceQuestion).options.map((art) => {
                      const isSelected = selectedArticle === art;
                      return (
                        <button
                          key={art}
                          onClick={() => {
                            playSound.click(soundEnabled);
                            setSelectedArticle(art);
                            if (feedbackState !== 'idle') setFeedbackState('idle');
                          }}
                          disabled={feedbackState === 'correct' || feedbackState === 'revealed'}
                          className={`py-2.5 sm:py-3 px-3 rounded-xl font-bold text-sm sm:text-base border-2 transition-all shadow-sm active:scale-95 ${
                            isSelected
                              ? 'bg-amber-600 text-white border-amber-800 shadow-md ring-2 ring-amber-400'
                              : 'bg-[#fffdfa] hover:bg-[#faebd7] text-[#451a03] border-[#c8a475]'
                          } disabled:opacity-75 disabled:cursor-not-allowed`}
                        >
                          {art}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 2. Anagram Text Input + Umlauts (Station 2A) */}
              {currentQuestion.type === 'anagram-input' && (
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <input
                      type="text"
                      value={textInput}
                      onChange={(e) => {
                        setTextInput(e.target.value);
                        if (feedbackState !== 'idle') setFeedbackState('idle');
                      }}
                      disabled={feedbackState === 'correct' || feedbackState === 'revealed'}
                      placeholder="Írd be ide a nap német nevét..."
                      className="flex-1 bg-white border-2 border-[#b89058] rounded-xl px-4 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-[#3b1f0c] focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-inner"
                      aria-label="A nap német neve"
                      autoFocus
                    />
                  </div>

                  {/* Umlaut quick buttons */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-[#6e4624]">Német betűk:</span>
                    {['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'].map(char => (
                      <button
                        key={char}
                        type="button"
                        onClick={() => handleInsertUmlaut(char)}
                        disabled={feedbackState === 'correct' || feedbackState === 'revealed'}
                        className="w-8 h-8 rounded-lg bg-[#ecd8bc] hover:bg-[#dec4a1] active:bg-[#d0b28a] text-[#451a03] font-bold text-sm border border-[#b89058] shadow-sm transition-colors"
                      >
                        {char}
                      </button>
                    ))}
                    {(currentQuestion as AnagramInputQuestion).hint && (
                      <span className="text-xs text-[#854d0e] italic ml-auto">
                        Tipp: {(currentQuestion as AnagramInputQuestion).hint}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* 3. Single Choice Input (Station 2B, 3A, 3B, 4, 6B, 7) */}
              {currentQuestion.type === 'single-choice' && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-[#69421f]">
                    Válaszd ki a helyes lehetőséget:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {(currentQuestion as SingleChoiceQuestion).options.map((opt) => {
                      const isSelected = selectedChoice === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => {
                            playSound.click(soundEnabled);
                            setSelectedChoice(opt);
                            if (feedbackState !== 'idle') setFeedbackState('idle');
                          }}
                          disabled={feedbackState === 'correct' || feedbackState === 'revealed'}
                          className={`text-left p-3 sm:p-3.5 rounded-xl font-semibold text-xs sm:text-sm border-2 transition-all shadow-sm active:scale-98 flex items-center justify-between ${
                            isSelected
                              ? 'bg-amber-600 text-white border-amber-800 shadow-md ring-2 ring-amber-400'
                              : 'bg-[#fffdfa] hover:bg-[#faebd7] text-[#451a03] border-[#c8a475]'
                          } disabled:opacity-75 disabled:cursor-not-allowed`}
                        >
                          <span>{opt}</span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                            isSelected ? 'border-white bg-amber-700' : 'border-[#9c7a4d]'
                          }`}>
                            {isSelected ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 4. Sentence Builder with Word Cards (Station 5) */}
              {currentQuestion.type === 'sentence-builder' && (
                <div className="space-y-4">
                  {/* Drop / Display Area for Built Sentence */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#69421f] mb-1">
                      <span>Az általad összeállított mondat:</span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (selectedSentenceTokens.length > 0) {
                              handleRemoveToken(selectedSentenceTokens.length - 1);
                            }
                          }}
                          disabled={selectedSentenceTokens.length === 0 || feedbackState === 'correct' || feedbackState === 'revealed'}
                          className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-[#ecd8bc] hover:bg-[#dec4a1] text-[#714823] border border-[#b89058] disabled:opacity-50"
                        >
                          <Undo2 className="w-3 h-3" />
                          <span>Visszavonás</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            playSound.click(soundEnabled);
                            setSelectedSentenceTokens([]);
                          }}
                          disabled={selectedSentenceTokens.length === 0 || feedbackState === 'correct' || feedbackState === 'revealed'}
                          className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-[#fcdede] hover:bg-[#fca5a5] text-[#991b1b] border border-[#f87171] disabled:opacity-50"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Törlés</span>
                        </button>
                      </div>
                    </div>

                    <div className="min-h-[56px] p-3 rounded-xl bg-[#fffdfa] border-2 border-dashed border-[#b89058] flex flex-wrap gap-2 items-center shadow-inner">
                      {selectedSentenceTokens.length === 0 ? (
                        <span className="text-xs sm:text-sm text-[#a89073] italic">
                          Kattints az alábbi szókártyákra a mondat felépítéséhez...
                        </span>
                      ) : (
                        selectedSentenceTokens.map((token, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleRemoveToken(idx)}
                            disabled={feedbackState === 'correct' || feedbackState === 'revealed'}
                            className="bg-amber-600 hover:bg-red-600 text-white font-bold text-xs sm:text-sm px-3 py-1.5 rounded-lg shadow-sm border border-amber-800 transition-colors flex items-center gap-1 group"
                            title="Kattints a szó eltávolításához"
                          >
                            <span>{token}</span>
                            <span className="text-[10px] opacity-75 group-hover:opacity-100">✕</span>
                          </button>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Word Cards Bank */}
                  <div>
                    <span className="text-xs font-bold text-[#69421f] block mb-1.5">
                      Választható szókártyák:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(currentQuestion as SentenceBuilderQuestion).wordCards.map((token, idx) => (
                        <button
                          key={`${token}_${idx}`}
                          type="button"
                          onClick={() => handleAddToken(token, idx)}
                          disabled={feedbackState === 'correct' || feedbackState === 'revealed'}
                          className="bg-[#faf3e8] hover:bg-[#f3dfc2] active:bg-[#ebd0ab] text-[#451a03] font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl border-2 border-[#b89058] shadow-sm transition-all transform active:scale-95 disabled:opacity-50"
                        >
                          {token}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 5. Boolean Choice: Richtig / Falsch (Station 6A) */}
              {currentQuestion.type === 'boolean-choice' && (
                <div className="space-y-3">
                  <div className="text-xs font-bold text-[#69421f]">
                    Döntsd el a szöveg alapján:
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
                    <button
                      onClick={() => {
                        playSound.click(soundEnabled);
                        setSelectedBoolean(true);
                        if (feedbackState !== 'idle') setFeedbackState('idle');
                      }}
                      disabled={feedbackState === 'correct' || feedbackState === 'revealed'}
                      className={`py-3 sm:py-4 px-4 rounded-xl font-bold text-sm sm:text-base border-2 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 ${
                        selectedBoolean === true
                          ? 'bg-emerald-600 text-white border-emerald-800 shadow-md ring-2 ring-emerald-400'
                          : 'bg-[#fffdfa] hover:bg-[#ecfdf5] text-emerald-900 border-[#a7f3d0]'
                      } disabled:opacity-75 disabled:cursor-not-allowed`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>Richtig (Igaz)</span>
                    </button>

                    <button
                      onClick={() => {
                        playSound.click(soundEnabled);
                        setSelectedBoolean(false);
                        if (feedbackState !== 'idle') setFeedbackState('idle');
                      }}
                      disabled={feedbackState === 'correct' || feedbackState === 'revealed'}
                      className={`py-3 sm:py-4 px-4 rounded-xl font-bold text-sm sm:text-base border-2 transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2 ${
                        selectedBoolean === false
                          ? 'bg-rose-600 text-white border-rose-800 shadow-md ring-2 ring-rose-400'
                          : 'bg-[#fffdfa] hover:bg-[#fff1f2] text-rose-900 border-[#fecdd3]'
                      } disabled:opacity-75 disabled:cursor-not-allowed`}
                    >
                      <AlertCircle className="w-5 h-5 text-rose-500" />
                      <span>Falsch (Hamis)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Feedback Banners */}
            {feedbackState === 'empty' && (
              <div className="p-3 bg-amber-100 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-900 font-semibold flex items-center gap-2 mb-4 animate-shake">
                <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {feedbackState === 'incorrect' && (
              <div className="p-3.5 bg-rose-100 border-2 border-rose-300 rounded-xl text-xs sm:text-sm text-rose-900 font-semibold flex items-center gap-2 mb-4 animate-shake">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {feedbackState === 'correct' && (
              <div className="p-3.5 bg-emerald-100 border-2 border-emerald-400 rounded-xl text-xs sm:text-sm text-emerald-950 font-bold flex items-center gap-2 mb-4 shadow-sm animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {feedbackState === 'revealed' && (
              <div className="p-4 bg-amber-50 border-2 border-amber-500 rounded-xl mb-4 shadow-md space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-900">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Helyes válasz:</span>
                  <span className="font-mono bg-amber-200/80 px-2 py-0.5 rounded text-amber-950 font-extrabold">
                    {getCorrectAnswerDisplay(currentQuestion)}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-[#451a03] font-medium leading-relaxed bg-white/70 p-2.5 rounded-lg border border-amber-300/60">
                  <span className="font-bold text-[#78350f]">Magyarázat: </span>
                  {currentQuestion.explanationHu}
                </div>
              </div>
            )}

            {/* Modal Bottom Actions */}
            <div className="mt-auto pt-3 border-t-2 border-[#b89058]/40 flex items-center justify-between gap-3">
              <span className="text-xs text-[#7d512a]">
                {feedbackState === 'idle' && 'Válaszd ki a megoldást, majd kattints az Ellenőrzésre!'}
              </span>

              {/* Action Buttons */}
              {feedbackState !== 'correct' && feedbackState !== 'revealed' ? (
                <button
                  type="button"
                  onClick={handleCheckAnswer}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform active:scale-95"
                >
                  Ellenőrzés
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleProceed}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-2"
                >
                  <span>
                    {qIndex + 1 < station.questions.length ? 'Következő feladat' : 'Térképdarab átvétele!'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
