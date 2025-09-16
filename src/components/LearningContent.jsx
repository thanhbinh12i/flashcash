import React, { useState, useRef, useEffect } from 'react';
import { Search, Clock, BookOpen, Play, Pause, Volume2, VolumeX, RotateCcw, Settings } from 'lucide-react';
import { learningLessons, learningCategories } from '../data/learningData';
import TextToSpeechService from '../services/textToSpeechService';

const LearningContent = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('vi-VN-Standard-A');
  const [availableVoices, setAvailableVoices] = useState([]);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [showSettings, setShowSettings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ttsService = useRef(new TextToSpeechService());

  // Khởi tạo TTS service khi component mount
  useEffect(() => {
    const initializeTTS = async () => {
      try {
        console.log('Initializing Web Speech API TTS service...');
        
        // Khởi tạo service
        await ttsService.current.initialize();
        
        // Load available voices
        const voices = ttsService.current.getVoices();
        setAvailableVoices(voices);
        
        // Chọn giọng mặc định
        if (voices.length > 0) {
          setSelectedVoice(voices[0].code);
        }
        
        // Kiểm tra xem có giọng tiếng Việt không
        const vietnameseVoices = voices.filter(v => 
          v.lang.includes('vi') || v.lang.includes('VN')
        );
        
        if (vietnameseVoices.length === 0) {
          console.warn('Không tìm thấy giọng tiếng Việt. Sẽ sử dụng giọng English để đọc.');
        }
        
        console.log('TTS service initialized successfully');
      } catch (error) {
        console.error('Failed to initialize TTS service:', error);
      }
    };

    initializeTTS();
  }, []);

  // Lọc bài học theo tìm kiếm và danh mục
  const filteredLessons = learningLessons.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lesson.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || lesson.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Xử lý phát âm
  const handleSpeak = async (text) => {
    if (!text || text.trim() === '') {
      alert('Không có nội dung để đọc');
      return;
    }

    try {
      setIsLoading(true);
      setIsPlaying(true);
      
      console.log('Speaking text with voice:', selectedVoice, 'rate:', speechRate);
      
      const result = await ttsService.current.textToSpeech(text, selectedVoice, speechRate);
      
      if (result.success) {
        console.log('Text-to-speech completed successfully');
      } else {
        throw new Error(result.error);
      }
      
    } catch (error) {
      console.error('Error in text-to-speech:', error);
      alert(`Lỗi phát âm: ${error.message}`);
    } finally {
      setIsLoading(false);
      setIsPlaying(false);
    }
  };

  // Xử lý dừng phát âm
  const handleStop = async () => {
    try {
      ttsService.current.stopAudio();
      setIsPlaying(false);
      setIsPaused(false);
    } catch (error) {
      console.error('Error stopping speech:', error);
    }
  };

  // Xử lý thay đổi giọng nói
  const handleVoiceChange = (voiceCode) => {
    setSelectedVoice(voiceCode);
    console.log('Voice changed to:', voiceCode);
  };

  // Xử lý thay đổi tốc độ
  const handleRateChange = (rate) => {
    setSpeechRate(rate);
    console.log('Speech rate changed to:', rate);
  };

  // Component cài đặt TTS
  const TTSSettings = () => {
    const vietnameseVoices = availableVoices.filter(v => 
      v.lang.includes('vi') || v.lang.includes('VN')
    );
    
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Cài đặt Text-to-Speech
          </h3>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="text-blue-600 hover:text-blue-800"
          >
            {showSettings ? 'Ẩn' : 'Hiện'}
          </button>
        </div>
        
        {/* Thông báo về giọng tiếng Việt */}
        {vietnameseVoices.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-yellow-800">
                  Không tìm thấy giọng tiếng Việt
                </h4>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>Để có giọng đọc tiếng Việt tốt hơn, bạn có thể:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li><strong>Windows:</strong> Vào Settings → Time & Language → Speech → Add voices → Tải Vietnamese</li>
                    <li><strong>Chrome:</strong> Sử dụng extension "Read Aloud" hoặc "SpeakIt!"</li>
                    <li><strong>Hiện tại:</strong> Hệ thống sẽ dùng giọng English để đọc tiếng Việt</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {showSettings && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Giọng nói ({availableVoices.length} giọng có sẵn):
              </label>
              <select
                value={selectedVoice}
                onChange={(e) => handleVoiceChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {availableVoices.map((voice) => (
                  <option key={voice.code} value={voice.code}>
                    {voice.name} {voice.lang.includes('vi') || voice.lang.includes('VN') ? '🇻🇳' : ''}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                🇻🇳 = Giọng tiếng Việt | Tổng cộng: {vietnameseVoices.length} giọng tiếng Việt
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tốc độ đọc: {speechRate}x
              </label>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={speechRate}
                onChange={(e) => handleRateChange(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Chậm (0.5x)</span>
                <span>Bình thường (1.0x)</span>
                <span>Nhanh (2.0x)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Nội dung học tập
          </h1>
          <p className="text-lg text-gray-600">
            Khám phá kiến thức về Machine Learning cơ bản
          </p>
        </div>

        {/* TTS Settings */}
        <TTSSettings />

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm bài học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Tất cả danh mục</option>
              {learningCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {filteredLessons.map(lesson => (
            <div
              key={lesson.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedLesson(lesson)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {learningCategories.find(cat => cat.id === lesson.category)?.name}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {lesson.duration}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {lesson.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {lesson.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {lesson.level}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSpeak(lesson.content);
                    }}
                    disabled={isLoading}
                    className="flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors duration-200 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mr-1"></div>
                    ) : (
                      <Volume2 className="w-4 h-4 mr-1" />
                    )}
                    Phát âm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lesson Detail Modal */}
        {selectedLesson && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedLesson.title}
                  </h2>
                  <button
                    onClick={() => setSelectedLesson(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {learningCategories.find(cat => cat.id === selectedLesson.category)?.name}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedLesson.duration}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {selectedLesson.level}
                  </div>
                </div>

                {/* Audio Controls */}
                <div className="flex items-center gap-2 mb-6 p-4 bg-gray-50 rounded-lg">
                  <button
                    onClick={() => handleSpeak(selectedLesson.content)}
                    disabled={isLoading || isPlaying}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <Play className="w-4 h-4 mr-2" />
                    )}
                    {isLoading ? 'Đang tải...' : 'Phát âm'}
                  </button>
                  
                  <button
                    onClick={handleStop}
                    disabled={!isPlaying}
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Pause className="w-4 h-4 mr-2" />
                    Dừng
                  </button>

                  <div className="ml-auto text-sm text-gray-600">
                    Giọng: {availableVoices.find(v => v.code === selectedVoice)?.name || selectedVoice}
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4">{selectedLesson.description}</p>
                  <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                    {selectedLesson.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Không tìm thấy bài học nào
            </h3>
            <p className="text-gray-500">
              Thử thay đổi từ khóa tìm kiếm hoặc danh mục
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningContent;