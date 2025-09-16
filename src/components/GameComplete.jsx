import React from 'react';
import { RotateCcw } from 'lucide-react';

const GameComplete = ({ score, onResetGame }) => {
  return (
    <div className="text-center">
      <div className="bg-white border border-gray-200 p-8 rounded-2xl max-w-md mx-auto card-bounce shadow-sm">
        <div className="text-6xl mb-4 float">🎊</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 card-fade-in">Chúc mừng!</h2>
        <p className="text-gray-600 mb-4 card-slide-in">
          Bạn đã hoàn thành trò chơi!
        </p>
        <div className="text-2xl font-bold text-yellow-600 mb-6 card-pulse glow">
          Điểm cuối: {score}
        </div>
        <button
          onClick={onResetGame}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full font-semibold shadow-lg btn-hover"
        >
          <RotateCcw className="inline mr-2" size={20} />
          Chơi lại
        </button>
      </div>
    </div>
  );
};

export default GameComplete;