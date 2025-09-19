import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RotateCcw, Brain, Gamepad2 } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import GameHeader from "./components/GameHeader";
import WelcomeScreen from "./components/WelcomeScreen";
import MaterialCard from "./components/MaterialCard";
import ConsciousCardList from "./components/ConsciousCardList";
import GameComplete from "./components/GameComplete";
import Feedback from "./components/Feedback";
import AIAnalysisGame from "./components/AIAnalysisGame";
import LearningContent from "./components/LearningContent";

// Hooks
import { useGameLogic } from "./hooks/useGameLogic";
import AIUsageReport from "./components/AiUsage";

// Flashcard Game Component
const FlashcardGame = () => {
  const {
    // State
    currentMaterialCard,
    availableConsciousCards,
    score,
    matches,
    gameStatus,
    selectedConsciousCard,
    feedback,

    // Actions
    drawMaterialCard,
    selectConsciousCard,
    checkMatch,
    resetGame,

    // Constants
    totalCards,
    GAME_STATUS,
  } = useGameLogic();

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <GameHeader score={score} matches={matches} totalCards={totalCards} />

        {/* Game States */}
        {gameStatus === GAME_STATUS.WAITING && (
          <WelcomeScreen onStartGame={drawMaterialCard} />
        )}

        {gameStatus === GAME_STATUS.PLAYING && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MaterialCard
              currentCard={currentMaterialCard}
              selectedConsciousCard={selectedConsciousCard}
              onDrawCard={drawMaterialCard}
              onCheckMatch={checkMatch}
            />

            <ConsciousCardList
              cards={availableConsciousCards}
              selectedCard={selectedConsciousCard}
              onSelectCard={selectConsciousCard}
            />
          </div>
        )}

        {gameStatus === GAME_STATUS.FINISHED && (
          <GameComplete score={score} onResetGame={resetGame} />
        )}

        {/* Feedback Component */}
        <Feedback message={feedback} />

        {/* Reset button */}
        {gameStatus !== GAME_STATUS.WAITING && (
          <div className="fixed top-8 right-8">
            <button
              onClick={resetGame}
              className="bg-white border border-gray-300 p-3 rounded-full text-gray-700 hover:bg-gray-100 transition-all duration-300 shadow-sm"
              title="Reset Game"
            >
              <RotateCcw size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// AI Analysis Page Component
const AIAnalysisPage = () => {
  return (
    <div>
      <AIAnalysisGame />
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto p-4 py-20">
        <div className="bg-white border border-gray-200 p-12 rounded-3xl text-center space-y-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Về chúng tôi
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Philosophy Mind là nền tảng học tập tương tác về triết học, tập
            trung vào mối quan hệ giữa vật chất và ý thức. Chúng tôi kết hợp
            công nghệ AI hiện đại với phương pháp giáo dục sáng tạo để mang đến
            trải nghiệm học tập độc đáo và hiệu quả.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Sứ mệnh</h3>
              <p className="text-gray-600">
                Làm cho triết học trở nên dễ tiếp cận và thú vị thông qua công
                nghệ và trò chơi tương tác.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Tầm nhìn</h3>
              <p className="text-gray-600">
                Trở thành nền tảng giáo dục triết học hàng đầu, kết nối tri thức
                cổ điển với công nghệ hiện đại.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/learning" element={<LearningContent />} />
            <Route path="/flashcard" element={<FlashcardGame />} />
            <Route path="/ai-analysis" element={<AIAnalysisPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ai-usage" element={<AIUsageReport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
