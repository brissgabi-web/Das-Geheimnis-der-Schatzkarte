/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { STATIONS_DATA } from './data/stationsData';
import { GameProgress, StationData } from './types/game';
import { Header } from './components/Header';
import { MapCanvas } from './components/MapCanvas';
import { StationModal } from './components/StationModal';
import { TreasureChestModal } from './components/TreasureChestModal';
import { CheatSheetModal } from './components/CheatSheetModal';
import { StoryModal } from './components/StoryModal';
import { ResetConfirmModal } from './components/ResetConfirmModal';

const STORAGE_KEY = 'das_geheimnis_der_schatzkarte_v1';

const INITIAL_PROGRESS: GameProgress = {
  hasStarted: false,
  completedStations: [],
  currentStationId: 1,
  currentQuestionIndex: {},
  attempts: {},
  revealedAnswers: {},
  isChestUnlocked: false,
  isChestOpened: false,
  soundEnabled: true,
};

export default function App() {
  const [progress, setProgress] = useState<GameProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_PROGRESS;
  });

  // Modal display states
  const [activeStationId, setActiveStationId] = useState<number | null>(null);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [isStoryOpen, setIsStoryOpen] = useState<boolean>(!progress.hasStarted);
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState<boolean>(false);
  const [isChestModalOpen, setIsChestModalOpen] = useState<boolean>(false);

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Storage unavailable or disabled
    }
  }, [progress]);

  // If game hasn't started yet, prompt story modal on mount
  useEffect(() => {
    if (!progress.hasStarted) {
      setIsStoryOpen(true);
    }
  }, [progress.hasStarted]);

  // Start adventure
  const handleStartGame = () => {
    setProgress(prev => ({ ...prev, hasStarted: true }));
    setIsStoryOpen(false);
  };

  // Toggle sound
  const handleToggleSound = () => {
    setProgress(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  };

  // Station selection from Map
  const handleSelectStation = (stationId: number) => {
    setActiveStationId(stationId);
  };

  // Question completed inside a station
  const handleQuestionCompleted = (stationId: number, questionIndex: number) => {
    setProgress(prev => ({
      ...prev,
      currentQuestionIndex: {
        ...prev.currentQuestionIndex,
        [stationId]: questionIndex + 1,
      },
    }));
  };

  // Station completed celebration and unlock next
  const handleStationCompleted = (stationId: number) => {
    setProgress(prev => {
      const alreadyCompleted = prev.completedStations.includes(stationId);
      const newCompleted = alreadyCompleted
        ? prev.completedStations
        : [...prev.completedStations, stationId];

      const nextStationId = Math.min(
        stationId + 1,
        STATIONS_DATA.length
      );

      const allDone = newCompleted.length === STATIONS_DATA.length;

      return {
        ...prev,
        completedStations: newCompleted,
        currentStationId: allDone ? STATIONS_DATA.length : nextStationId,
        isChestUnlocked: allDone,
      };
    });
  };

  // Open chest
  const handleOpenChest = () => {
    setIsChestModalOpen(true);
  };

  // Reset confirmation
  const handleConfirmReset = () => {
    const fresh: GameProgress = {
      ...INITIAL_PROGRESS,
      hasStarted: true,
      soundEnabled: progress.soundEnabled,
    };
    setProgress(fresh);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
    setIsResetConfirmOpen(false);
    setIsChestModalOpen(false);
    setActiveStationId(null);
  };

  const currentStationData: StationData | undefined = STATIONS_DATA.find(
    s => s.id === activeStationId
  );

  return (
    <div className="min-h-screen bg-[#ede7db] text-[#2c1a0e] flex flex-col font-sans selection:bg-[#d6c3a5] selection:text-[#2b1d14]">
      {/* Header matching preview */}
      <Header
        completedCount={progress.completedStations.length}
        totalStations={STATIONS_DATA.length}
        soundEnabled={progress.soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onOpenStory={() => setIsStoryOpen(true)}
        onOpenResetConfirm={() => setIsResetConfirmOpen(true)}
      />

      {/* Main Adventure Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-2 sm:p-4 md:p-6 flex flex-col items-center justify-center">
        <MapCanvas
          stations={STATIONS_DATA}
          completedStations={progress.completedStations}
          currentStationId={progress.currentStationId}
          soundEnabled={progress.soundEnabled}
          onSelectStation={handleSelectStation}
          onOpenChest={handleOpenChest}
        />
      </main>

      {/* Footer info */}
      <footer className="text-center py-4 px-4 text-xs text-[#a89073] border-t border-[#4a2e1b]/40">
        <p>
          „Das Geheimnis der Schatzkarte” &bull; Német nyelvi oktatójáték A1–A2 szinten (Schule und Freizeit)
        </p>
      </footer>

      {/* 1. Station Task Modal */}
      {activeStationId && currentStationData && (
        <StationModal
          station={currentStationData}
          currentQuestionIndex={progress.currentQuestionIndex[activeStationId] || 0}
          attemptsMap={progress.attempts}
          soundEnabled={progress.soundEnabled}
          onClose={() => setActiveStationId(null)}
          onQuestionCompleted={handleQuestionCompleted}
          onStationCompleted={handleStationCompleted}
          onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        />
      )}

      {/* 2. Modal Verbs Cheat Sheet ("Puska") */}
      {isCheatSheetOpen && (
        <CheatSheetModal onClose={() => setIsCheatSheetOpen(false)} />
      )}

      {/* 3. Story Prologue Modal */}
      {isStoryOpen && (
        <StoryModal
          onStart={handleStartGame}
          canCloseWithoutStart={true}
          onClose={handleStartGame}
        />
      )}

      {/* 4. Reset Confirmation Modal */}
      {isResetConfirmOpen && (
        <ResetConfirmModal
          onConfirm={handleConfirmReset}
          onCancel={() => setIsResetConfirmOpen(false)}
        />
      )}

      {/* 5. Final Treasure Chest Celebration Modal */}
      {isChestModalOpen && (
        <TreasureChestModal
          stations={STATIONS_DATA}
          soundEnabled={progress.soundEnabled}
          onClose={() => setIsChestModalOpen(false)}
          onResetGame={() => {
            setIsChestModalOpen(false);
            setIsResetConfirmOpen(true);
          }}
        />
      )}
    </div>
  );
}
