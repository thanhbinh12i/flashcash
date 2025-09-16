import React, { useState, useEffect } from 'react';
import { historyService } from '../services/historyService';
import { 
  History, 
  Search, 
  Trash2, 
  Download, 
  Upload, 
  X, 
  Calendar,
  Brain,
  BarChart3,
  Share2
} from 'lucide-react';

const HistoryPanel = ({ isOpen, onClose, onSelectAnalysis }) => {
  const [history, setHistory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [stats, setStats] = useState(null);
  const [activeTab, setActiveTab] = useState('history'); // 'history' | 'stats'
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadHistory();
      loadStats();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = historyService.searchHistory(searchQuery);
      setFilteredHistory(filtered);
    } else {
      setFilteredHistory(history);
    }
  }, [searchQuery, history]);

  const loadHistory = () => {
    try {
      const historyData = historyService.getHistory();
      setHistory(historyData);
    } catch (error) {
      console.error('Error loading history:', error);
    }
  };

  const loadStats = () => {
    try {
      const statsData = historyService.getHistoryStats();
      setStats(statsData);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleDeleteAnalysis = async (id) => {
    if (window.confirm('Bạn có chắc muốn xóa phân tích này?')) {
      const success = historyService.deleteAnalysis(id);
      if (success) {
        loadHistory();
        loadStats();
      }
    }
  };

  const handleClearHistory = async () => {
    if (window.confirm('Bạn có chắc muốn xóa toàn bộ lịch sử? Hành động này không thể hoàn tác.')) {
      const success = historyService.clearHistory();
      if (success) {
        setHistory([]);
        setFilteredHistory([]);
        loadStats();
      }
    }
  };

  const handleExportHistory = () => {
    setLoading(true);
    try {
      const success = historyService.exportHistory();
      if (!success) {
        alert('Có lỗi khi xuất lịch sử');
      }
    } catch (error) {
      alert('Có lỗi khi xuất lịch sử: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImportHistory = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    historyService.importHistory(file)
      .then((result) => {
        alert(`Đã nhập thành công ${result.imported} phân tích mới. Bỏ qua ${result.skipped} phân tích trùng lặp.`);
        loadHistory();
        loadStats();
      })
      .catch((error) => {
        alert('Lỗi khi nhập lịch sử: ' + error.message);
      })
      .finally(() => {
        setLoading(false);
        event.target.value = ''; // Reset file input
      });
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const shareAnalysis = async (analysis) => {
    const shareText = `🧠 AI Analysis: Vật Chất & Ý Thức\n\n` +
      `🧱 Vật chất: ${analysis.material}\n` +
      `🧠 Ý thức: ${analysis.consciousness}\n\n` +
      `📊 Kết quả phân tích:\n${analysis.result.relationship || 'Không có kết quả'}\n\n` +
      `🤖 Phân tích bởi: ${analysis.provider.toUpperCase()}\n` +
      `📅 Thời gian: ${formatDate(analysis.timestamp)}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI Analysis: Vật Chất & Ý Thức',
          text: shareText
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareText);
        alert('Đã sao chép vào clipboard!');
      }
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Đã sao chép vào clipboard!');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <History className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-gray-900">Lịch Sử Phân Tích</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'history'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <History size={18} />
              Lịch sử ({history.length})
            </div>
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'stats'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-2">
              <BarChart3 size={18} />
              Thống kê
            </div>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)] custom-scrollbar">
          {activeTab === 'history' ? (
            <>
              {/* Search and Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm trong lịch sử..."
                    className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={handleExportHistory}
                    disabled={loading || history.length === 0}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Download size={16} />
                    Xuất
                  </button>
                  
                  <label className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer flex items-center gap-2">
                    <Upload size={16} />
                    Nhập
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportHistory}
                      className="hidden"
                      disabled={loading}
                    />
                  </label>
                  
                  <button
                    onClick={handleClearHistory}
                    disabled={loading || history.length === 0}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    Xóa tất cả
                  </button>
                </div>
              </div>

              {/* History List */}
              {filteredHistory.length === 0 ? (
                <div className="text-center py-12 text-white/60">
                  {searchQuery ? (
                    <p>Không tìm thấy kết quả nào cho "{searchQuery}"</p>
                  ) : (
                    <p>Chưa có lịch sử phân tích nào</p>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredHistory.map((analysis) => (
                    <div
                      key={analysis.id}
                      className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2 text-sm text-white/70">
                          <Calendar size={14} />
                          {formatDate(analysis.timestamp)}
                          <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                            {analysis.provider.toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="flex gap-2">
                          <button
                            onClick={() => shareAnalysis(analysis)}
                            className="p-1 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                            title="Chia sẻ"
                          >
                            <Share2 size={14} />
                          </button>
                          <button
                            onClick={() => onSelectAnalysis && onSelectAnalysis(analysis)}
                            className="p-1 rounded hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                            title="Sử dụng lại"
                          >
                            <Brain size={14} />
                          </button>
                          <button
                            onClick={() => handleDeleteAnalysis(analysis.id)}
                            className="p-1 rounded hover:bg-white/10 text-red-400 hover:text-red-300 transition-colors"
                            title="Xóa"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-white/80 font-medium mb-1">🧱 Vật chất:</p>
                          <p className="text-white/90 text-sm">{analysis.material}</p>
                        </div>
                        <div>
                          <p className="text-white/80 font-medium mb-1">🧠 Ý thức:</p>
                          <p className="text-white/90 text-sm">{analysis.consciousness}</p>
                        </div>
                      </div>
                      
                      {analysis.result.relationship && (
                        <div>
                          <p className="text-white/80 font-medium mb-1">📊 Kết quả:</p>
                          <p className="text-white/70 text-sm line-clamp-3">
                            {analysis.result.relationship.substring(0, 200)}...
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Stats Tab */
            <div className="space-y-6">
              {stats && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h3 className="text-white/80 font-medium mb-2">Tổng phân tích</h3>
                      <p className="text-2xl font-bold text-blue-400">{stats.totalAnalyses}</p>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h3 className="text-white/80 font-medium mb-2">AI Providers</h3>
                      <div className="space-y-1">
                        {Object.entries(stats.providers).map(([provider, count]) => (
                          <div key={provider} className="flex justify-between text-sm">
                            <span className="text-white/70">{provider.toUpperCase()}</span>
                            <span className="text-white/90">{count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h3 className="text-white/80 font-medium mb-2">Thời gian</h3>
                      <div className="space-y-1 text-sm">
                        {stats.newestAnalysis && (
                          <div>
                            <span className="text-white/70">Mới nhất:</span>
                            <p className="text-white/90">{formatDate(stats.newestAnalysis)}</p>
                          </div>
                        )}
                        {stats.oldestAnalysis && (
                          <div>
                            <span className="text-white/70">Cũ nhất:</span>
                            <p className="text-white/90">{formatDate(stats.oldestAnalysis)}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {Object.keys(stats.dailyCount).length > 0 && (
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h3 className="text-white/80 font-medium mb-4">Hoạt động theo ngày</h3>
                      <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                        {Object.entries(stats.dailyCount)
                          .sort(([a], [b]) => new Date(b) - new Date(a))
                          .slice(0, 10)
                          .map(([date, count]) => (
                            <div key={date} className="flex justify-between text-sm">
                              <span className="text-white/70">{new Date(date).toLocaleDateString('vi-VN')}</span>
                              <span className="text-white/90">{count} phân tích</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPanel;