// Service để quản lý lịch sử phân tích

const HISTORY_KEY = 'ai_analysis_history';
const MAX_HISTORY_ITEMS = 50;

export const historyService = {
  // Lấy tất cả lịch sử
  getHistory() {
    try {
      const history = localStorage.getItem(HISTORY_KEY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error loading history:', error);
      return [];
    }
  },

  // Thêm phân tích mới vào lịch sử
  addAnalysis(material, consciousness, result, provider) {
    try {
      const history = this.getHistory();
      const newAnalysis = {
        id: Date.now().toString(),
        material: material.trim(),
        consciousness: consciousness.trim(),
        result,
        provider,
        timestamp: new Date().toISOString(),
        createdAt: Date.now()
      };

      // Thêm vào đầu danh sách
      history.unshift(newAnalysis);

      // Giới hạn số lượng items
      if (history.length > MAX_HISTORY_ITEMS) {
        history.splice(MAX_HISTORY_ITEMS);
      }

      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
      return newAnalysis;
    } catch (error) {
      console.error('Error saving analysis:', error);
      throw new Error('Không thể lưu phân tích vào lịch sử');
    }
  },

  // Xóa một phân tích khỏi lịch sử
  deleteAnalysis(id) {
    try {
      const history = this.getHistory();
      const filteredHistory = history.filter(item => item.id !== id);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(filteredHistory));
      return true;
    } catch (error) {
      console.error('Error deleting analysis:', error);
      return false;
    }
  },

  // Xóa toàn bộ lịch sử
  clearHistory() {
    try {
      localStorage.removeItem(HISTORY_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing history:', error);
      return false;
    }
  },

  // Tìm kiếm trong lịch sử
  searchHistory(query) {
    try {
      const history = this.getHistory();
      const lowercaseQuery = query.toLowerCase().trim();
      
      if (!lowercaseQuery) return history;

      return history.filter(item => 
        item.material.toLowerCase().includes(lowercaseQuery) ||
        item.consciousness.toLowerCase().includes(lowercaseQuery) ||
        (item.result.relationship && item.result.relationship.toLowerCase().includes(lowercaseQuery))
      );
    } catch (error) {
      console.error('Error searching history:', error);
      return [];
    }
  },

  // Xuất lịch sử ra JSON
  exportHistory() {
    try {
      const history = this.getHistory();
      const exportData = {
        exportDate: new Date().toISOString(),
        totalItems: history.length,
        data: history
      };
      
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
      });
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `ai-analysis-history-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Error exporting history:', error);
      return false;
    }
  },

  // Nhập lịch sử từ file JSON
  importHistory(file) {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const importData = JSON.parse(e.target.result);
            
            if (!importData.data || !Array.isArray(importData.data)) {
              throw new Error('Định dạng file không hợp lệ');
            }

            // Validate data structure
            const validData = importData.data.filter(item => 
              item.id && item.material && item.consciousness && item.result
            );

            if (validData.length === 0) {
              throw new Error('Không tìm thấy dữ liệu hợp lệ trong file');
            }

            // Merge with existing history
            const existingHistory = this.getHistory();
            const existingIds = new Set(existingHistory.map(item => item.id));
            
            const newItems = validData.filter(item => !existingIds.has(item.id));
            const mergedHistory = [...existingHistory, ...newItems];
            
            // Sort by timestamp (newest first)
            mergedHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            
            // Limit items
            if (mergedHistory.length > MAX_HISTORY_ITEMS) {
              mergedHistory.splice(MAX_HISTORY_ITEMS);
            }

            localStorage.setItem(HISTORY_KEY, JSON.stringify(mergedHistory));
            resolve({
              imported: newItems.length,
              total: mergedHistory.length,
              skipped: validData.length - newItems.length
            });
          } catch (parseError) {
            reject(new Error('Không thể đọc file: ' + parseError.message));
          }
        };
        
        reader.onerror = () => {
          reject(new Error('Lỗi khi đọc file'));
        };
        
        reader.readAsText(file);
      } catch (error) {
        reject(error);
      }
    });
  },

  // Lấy thống kê lịch sử
  getHistoryStats() {
    try {
      const history = this.getHistory();
      const providers = {};
      const dailyCount = {};
      
      history.forEach(item => {
        // Count by provider
        providers[item.provider] = (providers[item.provider] || 0) + 1;
        
        // Count by day
        const date = new Date(item.timestamp).toISOString().split('T')[0];
        dailyCount[date] = (dailyCount[date] || 0) + 1;
      });
      
      return {
        totalAnalyses: history.length,
        providers,
        dailyCount,
        oldestAnalysis: history.length > 0 ? history[history.length - 1].timestamp : null,
        newestAnalysis: history.length > 0 ? history[0].timestamp : null
      };
    } catch (error) {
      console.error('Error getting history stats:', error);
      return {
        totalAnalyses: 0,
        providers: {},
        dailyCount: {},
        oldestAnalysis: null,
        newestAnalysis: null
      };
    }
  }
};

export default historyService;