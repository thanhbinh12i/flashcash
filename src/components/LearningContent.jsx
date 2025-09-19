/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Info,
  Volume2,
  Settings,
  Play,
  Pause,
  VolumeX,
  Square,
  AlertCircle,
  Brain,
  Eye,
  Layers,
  Lightbulb,
  Target,
  Compass,
} from "lucide-react";

import DuyTamTab from "./Tabs/DuyTamTab";
import DuyVatSieuHinhTab from "./Tabs/DuyVatSieuHinhTab";
import VaiTroVatChatTab from "./Tabs/VaiTroVatChatTab";
import TinhDocLapYThucTab from "./Tabs/TinhDocLapYThucTab";
import PhuongPhapLuan1Tab from "./Tabs/PhuongPhapLuan1Tab";
import PhuongPhapLuan2Tab from "./Tabs/PhuongPhapLuan2Tab";

const MainPhilosophyTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [audioState, setAudioState] = useState({
    currentPlayingTab: null,
    isPlaying: false,
    isPaused: false,
    isMuted: false,
    isLoading: false,
  });

  const [selectedVoice, setSelectedVoice] = useState("");
  const [availableVoices, setAvailableVoices] = useState([]);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [showSettings, setShowSettings] = useState(false);

  const tabsConfig = [
    {
      id: 0,
      title: "Chủ nghĩa duy tâm",
      icon: Brain,
      color: "purple",
      Component: DuyTamTab,
    },
    {
      id: 1,
      title: "Chủ nghĩa duy vật siêu hình",
      icon: Eye,
      color: "blue",
      Component: DuyVatSieuHinhTab,
    },
    {
      id: 2,
      title: "Vai trò vật chất với ý thức",
      icon: Layers,
      color: "green",
      Component: VaiTroVatChatTab,
    },
    {
      id: 3,
      title: "Tính độc lập của ý thức",
      icon: Lightbulb,
      color: "orange",
      Component: TinhDocLapYThucTab,
    },
    {
      id: 4,
      title: "Ý nghĩa phương pháp luận I",
      icon: Target,
      color: "red",
      Component: PhuongPhapLuan1Tab,
    },
    {
      id: 5,
      title: "Ý nghĩa phương pháp luận II",
      icon: Compass,
      color: "indigo",
      Component: PhuongPhapLuan2Tab,
    },
  ];

  useEffect(() => {
    const loadVoices = () => {
      if ("speechSynthesis" in window) {
        const voices = speechSynthesis.getVoices();
        setAvailableVoices(voices);

        const vietnameseVoice = voices.find(
          (voice) => voice.lang.includes("vi") || voice.lang.includes("VN")
        );

        if (vietnameseVoice) {
          setSelectedVoice(vietnameseVoice.name);
        } else if (voices.length > 0) {
          setSelectedVoice(voices[0].name);
        }
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

  const handleSpeakTab = (content, tabId) => {
    if (!content || !content.trim()) {
      alert("Không có nội dung để đọc");
      return;
    }

    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    setAudioState((prev) => ({
      ...prev,
      isLoading: true,
      currentPlayingTab: tabId,
    }));

    const utterance = new SpeechSynthesisUtterance(content);

    const voice = availableVoices.find((v) => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = speechRate;
    utterance.volume = audioState.isMuted ? 0 : 1;

    utterance.onstart = () => {
      setAudioState((prev) => ({
        ...prev,
        isLoading: false,
        isPlaying: true,
        isPaused: false,
      }));
    };

    utterance.onend = () => {
      setAudioState({
        currentPlayingTab: null,
        isPlaying: false,
        isPaused: false,
        isMuted: false,
        isLoading: false,
      });
    };

    utterance.onerror = () => {
      setAudioState({
        currentPlayingTab: null,
        isPlaying: false,
        isPaused: false,
        isMuted: false,
        isLoading: false,
      });
    };

    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    window.handleSpeakTab = handleSpeakTab;
    return () => {
      delete window.handleSpeakTab;
    };
  }, [selectedVoice, speechRate, audioState.isMuted, availableVoices]);

  const handleStop = () => {
    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
    }
    setAudioState({
      currentPlayingTab: null,
      isPlaying: false,
      isPaused: false,
      isMuted: false,
      isLoading: false,
    });
  };

  const handlePauseResume = () => {
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
      speechSynthesis.pause();
      setAudioState((prev) => ({
        ...prev,
        isPaused: true,
        isPlaying: false,
      }));
    } else if (speechSynthesis.paused) {
      speechSynthesis.resume();
      setAudioState((prev) => ({
        ...prev,
        isPaused: false,
        isPlaying: true,
      }));
    }
  };

  const handleMuteToggle = () => {
    setAudioState((prev) => ({
      ...prev,
      isMuted: !prev.isMuted,
    }));
  };

  const CurrentTabComponent = tabsConfig[activeTab].Component;
  const vietnameseVoices = availableVoices.filter(
    (v) => v.lang.includes("vi") || v.lang.includes("VN")
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 md:p-6">
      <div className="mx-auto" style={{ width: "85%" }}>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Mối Quan Hệ Giữa Vật Chất và Ý Thức
          </h1>
          <p className="text-gray-600">
            Quan điểm của các trường phái triết học
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 mb-6 border border-white/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-indigo-600" />
              Điều khiển âm thanh chung
            </h3>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="text-indigo-600 hover:text-indigo-800 px-3 py-1 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              {showSettings ? "Ẩn" : "Hiện"} cài đặt
            </button>
          </div>

          {audioState.currentPlayingTab !== null && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      audioState.isLoading
                        ? "bg-blue-500 animate-pulse"
                        : audioState.isPlaying
                        ? "bg-green-500 animate-pulse"
                        : audioState.isPaused
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                    }`}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">
                    {audioState.isLoading
                      ? "Đang tải..."
                      : audioState.isPlaying
                      ? "Đang phát: "
                      : audioState.isPaused
                      ? "Tạm dừng: "
                      : "Đã dừng: "}
                    {tabsConfig[audioState.currentPlayingTab]?.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePauseResume}
                    disabled={
                      !speechSynthesis.speaking && !speechSynthesis.paused
                    }
                    className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {audioState.isPaused ? (
                      <Play className="w-4 h-4" />
                    ) : (
                      <Pause className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={handleMuteToggle}
                    className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {audioState.isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={handleStop}
                    className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Square className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {showSettings && (
            <div className="space-y-4 pt-4 border-t border-gray-200">
              {vietnameseVoices.length === 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium text-amber-800">
                        Không tìm thấy giọng tiếng Việt
                      </h4>
                      <p className="text-sm text-amber-700 mt-1">
                        Hệ thống sẽ sử dụng giọng mặc định. Để có giọng tiếng
                        Việt, vui lòng cài đặt gói ngôn ngữ.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Giọng nói ({availableVoices.length} giọng):
                </label>
                <select
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  {availableVoices.map((voice) => (
                    <option key={voice.name} value={voice.name}>
                      {voice.name} ({voice.lang}){" "}
                      {voice.lang.includes("vi") ? "🇻🇳" : ""}
                    </option>
                  ))}
                </select>
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
                  onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                  className="w-full accent-indigo-600"
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

        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl mb-6 p-2 border border-white/50">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {tabsConfig.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const isPlaying = audioState.currentPlayingTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative p-3 md:p-4 rounded-xl font-medium transition-all duration-300 flex flex-col items-center gap-2
                    ${
                      isActive
                        ? `bg-gradient-to-r from-${tab.color}-500 to-${tab.color}-600 text-white shadow-lg scale-105`
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-102"
                    }
                  `}
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-xs md:text-sm text-center">
                    {tab.title}
                  </span>
                  {isPlaying && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 md:p-8 min-h-[500px] border border-white/50">
          <CurrentTabComponent
            audioState={audioState}
            setAudioState={setAudioState}
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4" />
            <span>Nhấn vào tab để xem nội dung</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Volume2 className="w-4 h-4" />
            <span>Mỗi tab có nút phát âm riêng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPhilosophyTabs;
