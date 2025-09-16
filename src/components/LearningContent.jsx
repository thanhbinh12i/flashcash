import React, { useState, useEffect } from "react";
import {
  Search,
  Clock,
  BookOpen,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Settings,
  Square,
} from "lucide-react";
import { learningLessons, learningCategories } from "../data/learningData";

const LearningContent = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [currentPlayingLesson, setCurrentPlayingLesson] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedVoice, setSelectedVoice] = useState("");
  const [availableVoices, setAvailableVoices] = useState([]);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [showSettings, setShowSettings] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (lesson) => {
    setSelectedLesson(lesson);
    setTimeout(() => setIsAnimating(true), 10); //
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedLesson(null);
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedLesson) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedLesson]);

  useEffect(() => {
    if (selectedLesson) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedLesson]);

  useEffect(() => {
    const loadVoices = () => {
      if ("speechSynthesis" in window) {
        const voices = speechSynthesis.getVoices();
        console.log("Loaded voices:", voices);

        setAvailableVoices(voices);

        const vietnameseVoice = voices.find(
          (voice) => voice.lang.includes("vi") || voice.lang.includes("VN")
        );

        if (vietnameseVoice) {
          setSelectedVoice(vietnameseVoice.name);
        } else if (voices.length > 0) {
          setSelectedVoice(voices[0].name);
        }
      } else {
        console.error("Speech synthesis not supported");
        alert("Trình duyệt không hỗ trợ Text-to-Speech");
      }
    };

    loadVoices();

    if ("speechSynthesis" in window) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      if ("speechSynthesis" in window && speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
    };
  }, []);

  // Lọc bài học
  const filteredLessons = learningLessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || lesson.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Phát âm
  const handleSpeak = (lesson) => {
    if (!lesson || !lesson.content.trim()) {
      alert("Không có nội dung để đọc");
      return;
    }

    // Dừng audio hiện tại
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    setIsLoading(true);
    setCurrentPlayingLesson(lesson.id);

    // Tạo utterance
    const utterance = new SpeechSynthesisUtterance(lesson.content);

    // Cấu hình
    const voice = availableVoices.find((v) => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = speechRate;
    utterance.volume = isMuted ? 0 : 1;

    // Events
    utterance.onstart = () => {
      console.log("Bắt đầu phát");
      setIsLoading(false);
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      console.log("Kết thúc phát");
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentPlayingLesson(null);
    };

    utterance.onerror = (event) => {
      console.error("Lỗi TTS:", event);
      setIsLoading(false);
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentPlayingLesson(null);
    };

    // Phát
    speechSynthesis.speak(utterance);
  };

  // Dừng
  const handleStop = () => {
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentPlayingLesson(null);
  };

  // Tạm dừng / Tiếp tục
  const handlePauseResume = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    } else if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
    }
  };

  // Mute
  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    // Không cần alert nữa, chỉ thông báo qua UI
  };

  // Thay đổi giọng
  const handleVoiceChange = (voiceName) => {
    setSelectedVoice(voiceName);
    // Nếu đang phát, dừng lại
    if (speechSynthesis.speaking && isPlaying) {
      handleStop();
    }
  };

  // Thay đổi tốc độ
  const handleRateChange = (rate) => {
    setSpeechRate(rate);
    // Nếu đang phát, dừng lại
    if (speechSynthesis.speaking && isPlaying) {
      handleStop();
    }
  };

  // Component Settings
  const TTSSettings = () => {
    const vietnameseVoices = availableVoices.filter(
      (v) => v.lang.includes("vi") || v.lang.includes("VN")
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
            className="text-blue-600 hover:text-blue-800 px-3 py-1 rounded"
          >
            {showSettings ? "Ẩn" : "Hiện"}
          </button>
        </div>

        {/* Trạng thái phát */}
        {currentPlayingLesson && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    isLoading
                      ? "bg-blue-500 animate-pulse"
                      : isPlaying
                      ? "bg-green-500 animate-pulse"
                      : isPaused
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                ></div>
                <span className="text-sm font-medium text-gray-700">
                  {isLoading
                    ? "Đang tải..."
                    : isPlaying
                    ? "Đang phát: "
                    : isPaused
                    ? "Tạm dừng: "
                    : "Đã dừng: "}
                  {
                    learningLessons.find((l) => l.id === currentPlayingLesson)
                      ?.title
                  }
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePauseResume}
                  disabled={
                    !speechSynthesis.speaking && !speechSynthesis.paused
                  }
                  className="p-1 text-gray-600 hover:text-gray-800 disabled:opacity-50"
                >
                  {isPaused ? (
                    <Play className="w-4 h-4" />
                  ) : (
                    <Pause className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={handleMuteToggle}
                  className="p-1 text-gray-600 hover:text-gray-800"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                <button
                  onClick={handleStop}
                  className="p-1 text-red-600 hover:text-red-800"
                >
                  <Square className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cảnh báo không có giọng tiếng Việt */}
        {vietnameseVoices.length === 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-medium text-yellow-800">
                  Không tìm thấy giọng tiếng Việt
                </h4>
                <p className="text-sm text-yellow-700 mt-1">
                  Hệ thống sẽ sử dụng giọng English. Để có giọng tiếng Việt tốt
                  hơn, hãy cài đặt gói ngôn ngữ tiếng Việt trong hệ điều hành.
                </p>
              </div>
            </div>
          </div>
        )}

        {showSettings && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Giọng nói ({availableVoices.length} giọng):
              </label>
              <select
                value={selectedVoice}
                onChange={(e) => handleVoiceChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                {availableVoices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name} ({voice.lang}){" "}
                    {voice.lang.includes("vi") ? "🇻🇳" : ""}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                🇻🇳 = Giọng tiếng Việt ({vietnameseVoices.length} giọng)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tốc độ: {speechRate}x
              </label>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={speechRate}
                onChange={(e) => handleRateChange(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>0.5x</span>
                <span>1.0x</span>
                <span>2.0x</span>
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tất cả danh mục</option>
              {learningCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${
                currentPlayingLesson === lesson.id
                  ? "ring-2 ring-green-500 bg-white"
                  : currentPlayingLesson && currentPlayingLesson !== lesson.id
                  ? "opacity-75 bg-gray-50"
                  : "bg-white"
              }`}
              onClick={() => openModal(lesson)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {
                      learningCategories.find(
                        (cat) => cat.id === lesson.category
                      )?.name
                    }
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

                  <div className="flex items-center gap-2">
                    {currentPlayingLesson === lesson.id && (
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isLoading
                            ? "bg-blue-500 animate-pulse"
                            : isPlaying
                            ? "bg-green-500 animate-pulse"
                            : isPaused
                            ? "bg-yellow-500"
                            : "bg-gray-400"
                        }`}
                      ></div>
                    )}

                    {/* Stop button cho lesson đang phát */}
                    {currentPlayingLesson === lesson.id &&
                      (isPlaying || isPaused) && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleStop();
                          }}
                          className="flex items-center p-1 bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors"
                          title="Dừng"
                        >
                          <Square className="w-3 h-3" />
                        </button>
                      )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (currentPlayingLesson === lesson.id) {
                          // Nếu đang phát lesson này, cho phép pause/resume
                          if (isPlaying) {
                            handlePauseResume();
                          } else if (isPaused) {
                            handlePauseResume();
                          }
                        } else if (!currentPlayingLesson) {
                          // Chỉ cho phép phát khi không có lesson nào đang chạy
                          handleSpeak(lesson);
                        }
                      }}
                      disabled={
                        isLoading ||
                        (currentPlayingLesson &&
                          currentPlayingLesson !== lesson.id)
                      }
                      className={`flex items-center px-3 py-1 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        currentPlayingLesson === lesson.id
                          ? isPlaying
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                            : "bg-green-100 text-green-800 hover:bg-green-200"
                          : currentPlayingLesson
                          ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }`}
                    >
                      {isLoading && currentPlayingLesson === lesson.id ? (
                        <>
                          <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin mr-1"></div>
                          Đang tải
                        </>
                      ) : currentPlayingLesson === lesson.id ? (
                        isPlaying ? (
                          <>
                            <Pause className="w-4 h-4 mr-1" />
                            Tạm dừng
                          </>
                        ) : isPaused ? (
                          <>
                            <Play className="w-4 h-4 mr-1" />
                            Tiếp tục
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-4 h-4 mr-1" />
                            Phát âm
                          </>
                        )
                      ) : currentPlayingLesson ? (
                        <>
                          <VolumeX className="w-4 h-4 mr-1" />
                          Đang phát khác
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 mr-1" />
                          Phát âm
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lesson Detail Modal */}
        {selectedLesson && (
          <div className="p-8 bg-gray-100 min-h-screen">
            {selectedLesson && (
              <div
                className={`fixed inset-0 bg-[rgba(0,0,0,0.45)] flex items-center justify-center p-4 z-50 transition-all duration-300 ease-out ${
                  isAnimating ? "opacity-100" : "opacity-0"
                }`}
                onClick={closeModal}
              >
                <div
                  className={`bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-300 ease-out transform ${
                    isAnimating
                      ? "scale-100 opacity-100 translate-y-0"
                      : "scale-95 opacity-0 translate-y-4"
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="overflow-y-auto max-h-[90vh]">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                          {selectedLesson.title}
                        </h2>
                        <button
                          onClick={closeModal}
                          className="text-gray-400 hover:text-gray-600 text-2xl w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                        >
                          ×
                        </button>
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {
                            learningCategories.find(
                              (cat) => cat.id === selectedLesson.category
                            )?.name
                          }
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

                      <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4">
                          {selectedLesson.description}
                        </p>
                        <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                          {selectedLesson.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
