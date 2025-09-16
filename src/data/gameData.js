// Dữ liệu thẻ bài cho Flashcard Game

export const materialCards = [
  { id: 1, content: "Một viên đá rơi xuống đất", type: "material" },
  { id: 2, content: "Nước sôi ở 100°C", type: "material" },
  { id: 3, content: "Ánh sáng mặt trời", type: "material" },
  { id: 4, content: "Tiếng sấm trong cơn bão", type: "material" },
  { id: 5, content: "Cây cối phát triển", type: "material" },
  { id: 6, content: "Máy tính xử lý dữ liệu", type: "material" },
  { id: 7, content: "Trái tim đập", type: "material" },
  { id: 8, content: "Hành tinh quay quanh mặt trời", type: "material" }
];

export const consciousCards = [
  { id: 9, content: "Cảm giác sợ hãi khi thấy đá rơi", type: "conscious", matchId: 1 },
  { id: 10, content: "Hiểu biết về nhiệt độ sôi", type: "conscious", matchId: 2 },
  { id: 11, content: "Cảm nhận về ánh sáng ấm áp", type: "conscious", matchId: 3 },
  { id: 12, content: "Cảm giác lo lắng khi nghe sấm", type: "conscious", matchId: 4 },
  { id: 13, content: "Niềm vui khi thấy cây xanh", type: "conscious", matchId: 5 },
  { id: 14, content: "Suy nghĩ về công nghệ", type: "conscious", matchId: 6 },
  { id: 15, content: "Cảm xúc yêu thương", type: "conscious", matchId: 7 },
  { id: 16, content: "Khái niệm về vũ trụ", type: "conscious", matchId: 8 }
];

// Game constants
export const GAME_CONFIG = {
  CORRECT_SCORE: 10,
  WRONG_PENALTY: 2,
  AUTO_NEXT_DELAY: 10000,
  FEEDBACK_DURATION: 5000
};

// Game status enum
export const GAME_STATUS = {
  WAITING: 'waiting',
  PLAYING: 'playing',
  FINISHED: 'finished'
};