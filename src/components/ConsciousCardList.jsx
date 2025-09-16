import React from 'react';
import { Brain, Heart, Eye, Lightbulb, Smile, Cpu, TreePine, Globe } from 'lucide-react';

const ConsciousCardList = ({ cards, selectedCard, onSelectCard }) => {
  // Hàm để lấy biểu tượng phù hợp cho từng thẻ ý thức
  const getCardIcon = (cardId) => {
    const iconMap = {
      9: <Brain className="text-purple-600" size={24} />, // Cảm giác sợ hãi
      10: <Lightbulb className="text-yellow-600" size={24} />, // Hiểu biết về nhiệt độ
      11: <Eye className="text-orange-600" size={24} />, // Cảm nhận ánh sáng
      12: <Heart className="text-red-600" size={24} />, // Cảm giác lo lắng
      13: <Smile className="text-green-600" size={24} />, // Niềm vui
      14: <Cpu className="text-blue-600" size={24} />, // Suy nghĩ về công nghệ
      15: <Heart className="text-pink-600" size={24} />, // Cảm xúc yêu thương
      16: <Globe className="text-indigo-600" size={24} /> // Khái niệm về vũ trụ
    };
    return iconMap[cardId] || <Brain className="text-gray-600" size={24} />;
  };

  // Hàm để lấy màu viền phù hợp cho từng thẻ
  const getCardBorderColor = (cardId) => {
    const colorMap = {
      9: 'border-purple-200 hover:border-purple-300', // Cảm giác sợ hãi
      10: 'border-yellow-200 hover:border-yellow-300', // Hiểu biết về nhiệt độ
      11: 'border-orange-200 hover:border-orange-300', // Cảm nhận ánh sáng
      12: 'border-red-200 hover:border-red-300', // Cảm giác lo lắng
      13: 'border-green-200 hover:border-green-300', // Niềm vui
      14: 'border-blue-200 hover:border-blue-300', // Suy nghĩ về công nghệ
      15: 'border-pink-200 hover:border-pink-300', // Cảm xúc yêu thương
      16: 'border-indigo-200 hover:border-indigo-300' // Khái niệm về vũ trụ
    };
    return colorMap[cardId] || 'border-gray-200 hover:border-gray-300';
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-4 card-slide-in">
        🧠 Thẻ Ý thức
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div
            key={card.id}
            data-card-id={card.id}
            onClick={() => onSelectCard(card)}
            className={`bg-white border-2 p-6 rounded-xl cursor-pointer transition-all duration-300 card-slide-in shadow-sm hover:shadow-md transform hover:scale-105 stagger-item ${
              selectedCard?.id === card.id 
                ? 'ring-4 ring-blue-500 bg-blue-50 border-blue-300 shadow-lg scale-105' 
                : `${getCardBorderColor(card.id)} hover:bg-gray-50`
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                {getCardIcon(card.id)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 font-medium leading-relaxed">
                  {card.content}
                </p>
                {selectedCard?.id === card.id && (
                  <div className="mt-2 text-sm text-blue-600 font-medium">
                    ✓ Đã chọn
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsciousCardList;