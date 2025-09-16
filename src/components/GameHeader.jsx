import React from 'react';
import { Trophy, Star } from 'lucide-react';

const GameHeader = ({ score, matches, totalCards }) => {
  const completionPercentage = (matches / totalCards) * 100;

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg card-bounce">
        🃏 Flashcard Game: Vật chất & Ý thức
      </h1>
      <div className="flex justify-center items-center gap-8 mb-6">
        <div className="bg-white border border-gray-200 px-6 py-3 rounded-full card-slide-in shadow-sm">
          <span className="text-yellow-600 font-bold text-lg">
            <Trophy className="inline mr-2 float" size={20} />
            Điểm: {score}
          </span>
        </div>
        <div className="bg-white border border-gray-200 px-6 py-3 rounded-full card-slide-in shadow-sm">
          <span className="text-green-600 font-bold text-lg">
            <Star className="inline mr-2 glow" size={20} />
            Ghép đúng: {matches}/{totalCards}
          </span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-4 mb-4 card-fade-in">
        <div 
          className="bg-gradient-to-r from-green-400 to-blue-400 h-4 rounded-full progress-bar glow"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default GameHeader;