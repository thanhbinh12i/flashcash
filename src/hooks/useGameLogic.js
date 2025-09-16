import { useState, useCallback } from 'react';
import { materialCards, consciousCards, GAME_CONFIG, GAME_STATUS } from '../data/gameData';

export const useGameLogic = () => {
  const [currentMaterialCard, setCurrentMaterialCard] = useState(null);
  const [availableConsciousCards, setAvailableConsciousCards] = useState(consciousCards);
  const [score, setScore] = useState(0);
  const [matches, setMatches] = useState(0);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.WAITING);
  const [selectedConsciousCard, setSelectedConsciousCard] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [usedMaterialCards, setUsedMaterialCards] = useState([]);

  // Bốc thẻ vật chất ngẫu nhiên
  const drawMaterialCard = useCallback(() => {
    const availableMaterial = materialCards.filter(card => !usedMaterialCards.includes(card.id));
    
    if (availableMaterial.length === 0) {
      setGameStatus(GAME_STATUS.FINISHED);
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableMaterial.length);
    const selectedCard = availableMaterial[randomIndex];
    
    setCurrentMaterialCard(selectedCard);
    setSelectedConsciousCard(null);
    setFeedback('');
    setGameStatus(GAME_STATUS.PLAYING);
  }, [usedMaterialCards]);

  // Chọn thẻ ý thức để ghép cặp
  const selectConsciousCard = useCallback((card) => {
    setSelectedConsciousCard(card);
  }, []);

  // Tạo giải thích chi tiết về mối quan hệ vật chất-ý thức
  const getDetailedExplanation = useCallback((materialCard, consciousCard) => {
    const explanations = {
      1: {
        material: "Viên đá (vật chất) có khối lượng và chịu tác động của trọng lực",
        consciousness: "Ý thức tạo ra cảm giác sợ hãi thông qua việc xử lý thông tin thị giác",
        interaction: "Não bộ nhận tín hiệu từ mắt → xử lý nguy hiểm → tạo cảm xúc sợ hãi → cơ thể phản ứng né tránh"
      },
      2: {
        material: "Nước (H2O) thay đổi trạng thái từ lỏng sang khí ở 100°C do năng lượng nhiệt",
        consciousness: "Ý thức hình thành hiểu biết về nhiệt độ qua kinh nghiệm và học tập",
        interaction: "Cảm giác nhiệt từ da → não xử lý → tạo khái niệm 'nóng' → liên kết với kiến thức khoa học"
      },
      3: {
        material: "Photon từ mặt trời truyền năng lượng điện từ với bước sóng khả kiến",
        consciousness: "Ý thức tạo cảm nhận ấm áp, tích cực qua hệ thần kinh và hormone",
        interaction: "Ánh sáng kích thích võng mạc → não tiết serotonin → tạo cảm giác hạnh phúc, ấm áp"
      },
      4: {
        material: "Sóng âm từ sấm có tần số thấp, cường độ cao do phóng điện trong khí quyển",
        consciousness: "Ý thức tạo cảm giác lo lắng do bản năng sinh tồn được kích hoạt",
        interaction: "Tai nhận sóng âm → não xử lý như tín hiệu nguy hiểm → kích hoạt hệ giao cảm → lo lắng"
      },
      5: {
        material: "Cây thực hiện quang hợp, hấp thụ CO2 và tạo O2 qua các phản ứng hóa học",
        consciousness: "Ý thức tạo niềm vui qua liên kết tích cực với sự sống và thiên nhiên",
        interaction: "Mắt nhận màu xanh → não liên kết với ký ức tích cực → tiết dopamine → cảm giác vui"
      },
      6: {
        material: "CPU xử lý dữ liệu nhị phân qua các transistor và mạch logic",
        consciousness: "Ý thức suy nghĩ về công nghệ, so sánh với trí tuệ nhân tạo",
        interaction: "Quan sát máy tính → não phân tích → tạo khái niệm về AI → suy nghĩ về tương lai"
      },
      7: {
        material: "Cơ tim co bóp theo nhịp điều, bơm máu qua hệ tuần hoàn",
        consciousness: "Ý thức tạo cảm xúc yêu thương qua hormone oxytocin và dopamine",
        interaction: "Tim đập nhanh khi yêu → não nhận tín hiệu → tiết hormone hạnh phúc → cảm xúc yêu thương"
      },
      8: {
        material: "Hành tinh chuyển động theo quỹ đạo ellipse do lực hấp dẫn của mặt trời",
        consciousness: "Ý thức hình thành khái niệm về vũ trụ, thời gian và không gian vô hạn",
        interaction: "Quan sát bầu trời → não xử lý thông tin → tạo khái niệm trừu tượng về vũ trụ"
      }
    };
    
    return explanations[materialCard.id] || null;
  }, []);

  // Kiểm tra ghép cặp
  const checkMatch = useCallback(() => {
    if (!currentMaterialCard || !selectedConsciousCard) return;

    const isCorrect = selectedConsciousCard.matchId === currentMaterialCard.id;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + GAME_CONFIG.CORRECT_SCORE);
      setMatches(prevMatches => prevMatches + 1);
      
      // Tạo giải thích chi tiết
      const explanation = getDetailedExplanation(currentMaterialCard, selectedConsciousCard);
      const detailedFeedback = explanation ? 
        `🎉 Chính xác!\n\n🔬 ${explanation.material}\n\n🧠 ${explanation.consciousness}\n\n⚡ Tương tác: ${explanation.interaction}` :
        '🎉 Chính xác! Bạn đã ghép đúng cặp!';
      
      setFeedback(detailedFeedback);
      
      // Add success animation class to selected card
      const selectedCardElement = document.querySelector(`[data-card-id="${selectedConsciousCard.id}"]`);
      if (selectedCardElement) {
        selectedCardElement.classList.add('card-success');
        setTimeout(() => {
          selectedCardElement.classList.remove('card-success');
        }, 600);
      }
      
      // Loại bỏ thẻ đã ghép
      setUsedMaterialCards(prev => [...prev, currentMaterialCard.id]);
      setAvailableConsciousCards(prev => prev.filter(card => card.id !== selectedConsciousCard.id));
      
      // Tự động bốc thẻ mới sau delay dài hơn để đọc giải thích
      setTimeout(() => {
        drawMaterialCard();
      }, GAME_CONFIG.AUTO_NEXT_DELAY + 3000);
    } else {
      setScore(prevScore => Math.max(0, prevScore - GAME_CONFIG.WRONG_PENALTY));
      setFeedback('❌ Chưa đúng! Hãy thử lại.\n\n💡 Gợi ý: Hãy suy nghĩ về mối liên hệ giữa hiện tượng vật lý và phản ứng tâm lý tương ứng.');
      
      // Add error animation class to selected card
      const selectedCardElement = document.querySelector(`[data-card-id="${selectedConsciousCard.id}"]`);
      if (selectedCardElement) {
        selectedCardElement.classList.add('card-error');
        setTimeout(() => {
          selectedCardElement.classList.remove('card-error');
        }, 500);
      }
    }

    // Xóa feedback sau một thời gian dài hơn cho giải thích chi tiết
    setTimeout(() => {
      setFeedback('');
    }, isCorrect ? GAME_CONFIG.FEEDBACK_DURATION + 3000 : GAME_CONFIG.FEEDBACK_DURATION);
  }, [currentMaterialCard, selectedConsciousCard, drawMaterialCard, getDetailedExplanation]);

  // Reset game
  const resetGame = useCallback(() => {
    setCurrentMaterialCard(null);
    setAvailableConsciousCards(consciousCards);
    setScore(0);
    setMatches(0);
    setGameStatus(GAME_STATUS.WAITING);
    setSelectedConsciousCard(null);
    setFeedback('');
    setUsedMaterialCards([]);
  }, []);

  return {
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
    totalCards: materialCards.length,
    GAME_STATUS
  };
};