/**
 * Type definitions for Das Geheimnis der Schatzkarte
 */

export type QuestionType =
  | 'article-choice'       // Station 1: ein, eine, einen, der, die, das, den
  | 'anagram-input'        // Station 2A: Days of week with scrambled letters
  | 'single-choice'        // Station 2B, 3A, 3B, 4, 6B, 7
  | 'sentence-builder'     // Station 5: Word cards order
  | 'boolean-choice';      // Station 6A: Richtig / Falsch

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  instructionHu: string;
  questionDe: string;
  explanationHu: string;
}

export interface ArticleChoiceQuestion extends BaseQuestion {
  type: 'article-choice';
  sentenceWithBlank: string;
  options: string[];
  acceptedAnswers: string[];
}

export interface AnagramInputQuestion extends BaseQuestion {
  type: 'anagram-input';
  scrambledText: string;
  acceptedAnswers: string[];
  hint?: string;
}

export interface SingleChoiceQuestion extends BaseQuestion {
  type: 'single-choice';
  options: string[];
  correctAnswer: string;
  targetVerbInfinitive?: string;
  contextHu?: string;
}

export interface SentenceBuilderQuestion extends BaseQuestion {
  type: 'sentence-builder';
  promptTokens: string[];
  wordCards: string[];
  acceptedSentences: string[];
}

export interface BooleanChoiceQuestion extends BaseQuestion {
  type: 'boolean-choice';
  statementDe: string;
  correctAnswer: boolean; // true = Richtig, false = Falsch
}

export type Question =
  | ArticleChoiceQuestion
  | AnagramInputQuestion
  | SingleChoiceQuestion
  | SentenceBuilderQuestion
  | BooleanChoiceQuestion;

export interface StationData {
  id: number;
  titleHu: string;
  subtitleHu: string;
  themeDe: string;
  iconName: string;
  mapPieceName: string;
  mapLocationName: string;
  mapCoords: { x: number; y: number };
  descriptionHu: string;
  instructionsGlobalHu: string;
  readingPassageDe?: string;
  readingPassageTitleDe?: string;
  questions: Question[];
}

export interface GameProgress {
  hasStarted: boolean;
  completedStations: number[]; // e.g. [1, 2]
  currentStationId: number;    // active station
  currentQuestionIndex: Record<number, number>; // stationId -> question index
  attempts: Record<string, number>; // key: `${stationId}_${questionIndex}`
  revealedAnswers: Record<string, boolean>; // key: `${stationId}_${questionIndex}`
  isChestUnlocked: boolean;
  isChestOpened: boolean;
  soundEnabled: boolean;
}
