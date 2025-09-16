import React from 'react';
import { Shuffle, Heart, Zap, Thermometer, Sun, Cloud, TreePine, Cpu, Activity, Globe } from 'lucide-react';

const MaterialCard = ({ currentCard, selectedConsciousCard, onDrawCard, onCheckMatch }) => {
  // Hàm để lấy biểu tượng và màu sắc phù hợp cho từng thẻ vật chất
  const getCardStyle = (cardId) => {
    const styleMap = {
      1: { 
        icon: <Zap className="text-gray-700" size={48} />, 
        bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
        borderColor: 'border-gray-300',
        emoji: '🪨'
      }, // Viên đá rơi
      2: { 
        icon: <Thermometer className="text-red-500" size={48} />, 
        bgColor: 'bg-gradient-to-br from-red-50 to-orange-50',
        borderColor: 'border-red-300',
        emoji: '🌡️'
      }, // Nước sôi
      3: { 
        icon: <Sun className="text-yellow-500" size={48} />, 
        bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
        borderColor: 'border-yellow-300',
        emoji: '☀️'
      }, // Ánh sáng mặt trời
      4: { 
        icon: <Cloud className="text-blue-600" size={48} />, 
        bgColor: 'bg-gradient-to-br from-blue-50 to-gray-50',
        borderColor: 'border-blue-300',
        emoji: '⛈️'
      }, // Tiếng sấm
      5: { 
        icon: <TreePine className="text-green-600" size={48} />, 
        bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
        borderColor: 'border-green-300',
        emoji: '🌱'
      }, // Cây cối phát triển
      6: { 
        icon: <Cpu className="text-blue-500" size={48} />, 
        bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        borderColor: 'border-blue-300',
        emoji: '💻'
      }, // Máy tính
      7: { 
        icon: <Activity className="text-red-600" size={48} />, 
        bgColor: 'bg-gradient-to-br from-red-50 to-pink-50',
        borderColor: 'border-red-300',
        emoji: '❤️'
      }, // Trái tim đập
      8: { 
        icon: <Globe className="text-purple-600" size={48} />, 
        bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
        borderColor: 'border-purple-300',
        emoji: '🪐'
      } // Hành tinh quay
    };
    return styleMap[cardId] || { 
      icon: <Zap className="text-gray-600" size={48} />, 
      bgColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      borderColor: 'border-gray-300',
      emoji: '🧱'
    };
  };

  const cardStyle = currentCard ? getCardStyle(currentCard.id) : null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4 card-slide-in">
        🌍 Thẻ Vật chất
      </h2>
      {currentCard && cardStyle && (
        <div className={`${cardStyle.bgColor} border-2 ${cardStyle.borderColor} p-8 rounded-2xl text-center card-flip shadow-lg hover:shadow-xl transition-all duration-300`}>
          <div className="flex justify-center items-center mb-6 space-x-4">
            <div className="text-5xl float">{cardStyle.emoji}</div>
            <div className="p-3 bg-white rounded-full shadow-sm">
              {cardStyle.icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 card-fade-in">
            {currentCard.content}
          </h3>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-white/50">
            <p className="text-gray-700 font-medium card-slide-in">
              Hãy chọn thẻ Ý thức phù hợp bên phải
            </p>
          </div>
        </div>
      )}
      
      <div className="text-center space-y-4">
        <button
          onClick={onDrawCard}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg btn-hover transform transition-all duration-300"
        >
          <Shuffle className="inline mr-2" size={16} />
          Bốc thẻ khác
        </button>
        
        {selectedConsciousCard && (
          <button
            onClick={onCheckMatch}
            className="block mx-auto px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full font-semibold shadow-lg btn-hover card-pulse transform transition-all duration-300"
          >
            <Heart className="inline mr-2" size={20} />
            Ghép cặp
          </button>
        )}
      </div>
    </div>
  );
};

export default MaterialCard;