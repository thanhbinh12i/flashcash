import React, { useState, useEffect } from "react";
import {
  Brain,
  Volume2,
  Pause,
  ChevronRight,
  Sparkles,
  Cloud,
  Eye,
  Zap,
  Star,
  Heart,
  Moon,
  Sun,
  BookOpen,
  Lightbulb,
  Theater,
  Crown,
  Gem,
  Wand2,
  Rainbow,
  Telescope,
  Music,
  Paintbrush,
} from "lucide-react";

const DuyTamTab = ({ audioState }) => {
  const [, setCurrentImageIndex] = useState(0);

  const philosophyImages = [
    {
      icon: "🧠",
      title: "Tâm trí",
      description: "Ý thức là nguồn gốc của vạn vật",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: "💭",
      title: "Tư duy",
      description: "Thế giới vật chất là sản phẩm của tinh thần",
      color: "from-blue-400 to-purple-400",
    },
    {
      icon: "✨",
      title: "Tinh thần",
      description: "Ý thức quyết định tồn tại",
      color: "from-pink-400 to-yellow-400",
    },
    {
      icon: "🌌",
      title: "Vũ trụ quan",
      description: "Vạn vật đều xuất phát từ ý niệm",
      color: "from-indigo-400 to-purple-400",
    },
    {
      icon: "🎭",
      title: "Hiện tượng",
      description: "Vật chất chỉ là biểu hiện của tinh thần",
      color: "from-purple-400 to-red-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % philosophyImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSpeak = () => {
    if (window.handleSpeakTab) {
      const content = `CHỦNG NGHĨA DUY TÂM

Quan điểm cơ bản:
• Ý thức là tồn tại duy nhất, tuyệt đối, có tính quyết định
• Thế giới vật chất chỉ là bản sao, biểu hiện khác của ý thức tinh thần
• Vật chất là tính thứ hai, do ý thức tinh thần sinh ra

Đặc điểm:
• Phủ nhận tính khách quan của thế giới vật chất
• Cường điệu vai trò nhân tố chủ quan
• Duy ý chí trong hành động
• Bất chấp điều kiện và quy luật khách quan

Hệ quả:
• Dẫn đến chủ nghĩa duy ý chí trong nhận thức
• Tách rời thực tiễn khách quan
• Không phản ánh đúng bản chất của thế giới`;

      window.handleSpeakTab(content, 0);
    }
  };

  return (
    <div className="animate-fadeIn bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen p-4">
      <div className="flex items-center justify-between mb-8 bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse-slow">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-700 bg-clip-text text-transparent">
              Chủ nghĩa duy tâm
            </h2>
          </div>
        </div>

        <button
          onClick={handleSpeak}
          disabled={
            audioState.isLoading ||
            (audioState.currentPlayingTab !== null &&
              audioState.currentPlayingTab !== 0)
          }
          className={`
            flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all transform hover:scale-105
            ${
              audioState.currentPlayingTab === 0
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse shadow-lg"
                : audioState.currentPlayingTab !== null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-xl"
            }
            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          `}
        >
          {audioState.isLoading && audioState.currentPlayingTab === 0 ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Đang tải
            </>
          ) : audioState.currentPlayingTab === 0 ? (
            <>
              <Pause className="w-5 h-5" />
              Đang phát
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5" />
              Phát âm thanh
            </>
          )}
        </button>
      </div>

      <div className="mb-8 relative h-48 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 rounded-3xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-8 animate-slide">
            {[...philosophyImages, ...philosophyImages].map((img, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-36 h-36 bg-gradient-to-br ${img.color} rounded-3xl flex flex-col items-center justify-center transform hover:scale-110 transition-all cursor-pointer shadow-xl border-2 border-white/50`}
              >
                <div className="text-5xl mb-2 animate-bounce-slow">
                  {img.icon}
                </div>
                <p className="text-white text-sm font-bold mb-1">{img.title}</p>
                <p className="text-white/90 text-xs px-3 text-center leading-tight">
                  {img.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-purple-100 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-indigo-100 to-transparent pointer-events-none" />
      </div>

      <div className="mb-8 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-4 shadow-lg">
            <Crown className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Bản chất của chủ nghĩa duy tâm
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Chủ nghĩa duy tâm coi ý thức, tinh thần, ý niệm là yếu tố duy nhất
            và quyết định. Thế giới vật chất chỉ là sự biểu hiện, phản ánh của
            thế giới tinh thần.
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl mb-3 animate-pulse-slow">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <p className="font-bold text-gray-800 text-lg">Ý THỨC</p>
              <p className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full mt-1">
                Tồn tại duy nhất
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <ChevronRight className="w-10 h-10 text-purple-500 animate-pulse" />
              <span className="text-sm font-bold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                QUYẾT ĐỊNH
              </span>
            </div>

            <div className="text-center">
              <div className="w-28 h-28 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shadow-lg mb-3 opacity-70">
                <Gem className="w-12 h-12 text-white" />
              </div>
              <p className="font-bold text-gray-700 text-lg">VẬT CHẤT</p>
              <p className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1">
                Biểu hiện thứ hai
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 shadow-lg border border-purple-200">
          <h4 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-3">
            <Eye className="w-7 h-7" />
            Quan điểm cơ bản
          </h4>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white/80 rounded-2xl p-4 hover:translate-x-2 transition-all hover:shadow-md">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Ý thức là tồn tại duy nhất
                </p>
                <p className="text-gray-600 text-sm">
                  Chỉ có tinh thần, ý thức mới là thực tại tuyệt đối và quyết
                  định
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/80 rounded-2xl p-4 hover:translate-x-2 transition-all hover:shadow-md">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Vật chất là bản sao của tinh thần
                </p>
                <p className="text-gray-600 text-sm">
                  Thế giới vật chất chỉ là biểu hiện, phản ánh của ý thức tinh
                  thần
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/80 rounded-2xl p-4 hover:translate-x-2 transition-all hover:shadow-md">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Vật chất có tính thứ hai
                </p>
                <p className="text-gray-600 text-sm">
                  Được sinh ra và quyết định hoàn toàn bởi ý thức tinh thần
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 shadow-lg border border-amber-200">
            <h4 className="text-xl font-bold text-amber-700 mb-4 flex items-center gap-3">
              <Zap className="w-6 h-6" />
              Đặc điểm nổi bật
            </h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3 hover:translate-x-1 transition-all">
                <ChevronRight className="w-4 h-4 text-amber-600 animate-pulse" />
                <span className="text-gray-700 text-sm">
                  Phủ nhận tính khách quan của thế giới vật chất
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3 hover:translate-x-1 transition-all">
                <ChevronRight className="w-4 h-4 text-amber-600 animate-pulse" />
                <span className="text-gray-700 text-sm">
                  Cường điệu vai trò nhân tố chủ quan
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3 hover:translate-x-1 transition-all">
                <ChevronRight className="w-4 h-4 text-amber-600 animate-pulse" />
                <span className="text-gray-700 text-sm">
                  Duy ý chí trong hành động
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3 hover:translate-x-1 transition-all">
                <ChevronRight className="w-4 h-4 text-amber-600 animate-pulse" />
                <span className="text-gray-700 text-sm">
                  Bất chấp điều kiện và quy luật khách quan
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-2xl p-6 shadow-lg border border-red-200">
            <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-3">
              <Star className="w-6 h-6" />
              Hệ quả tiêu cực
            </h4>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3 hover:translate-x-1 transition-all">
                <ChevronRight className="w-4 h-4 text-red-600" />
                <span className="text-gray-700 text-sm">
                  Dẫn đến chủ nghĩa duy ý chí
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3 hover:translate-x-1 transition-all">
                <ChevronRight className="w-4 h-4 text-red-600" />
                <span className="text-gray-700 text-sm">
                  Tách rời thực tiễn khách quan
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3 hover:translate-x-1 transition-all">
                <ChevronRight className="w-4 h-4 text-red-600" />
                <span className="text-gray-700 text-sm">
                  Không phản ánh đúng bản chất thế giới
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-xl border border-green-200">
        <h4 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
          <Theater className="w-7 h-7" />
          Ví dụ minh họa trong thực tế
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h5 className="font-bold text-gray-800">Trong giáo dục</h5>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg border-l-3 border-blue-400">
                <p className="text-sm font-medium text-blue-800 mb-1">
                  ✅ Quan điểm duy tâm:
                </p>
                <p className="text-xs text-gray-600">
                  "Học sinh chỉ cần có ý chí và động lực cao là sẽ học giỏi.
                  Điều kiện học tập, phương pháp giảng dạy không quan trọng bằng
                  tinh thần."
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border-l-3 border-red-400">
                <p className="text-sm font-medium text-red-800 mb-1">
                  ❌ Hạn chế:
                </p>
                <p className="text-xs text-gray-600">
                  Bỏ qua tầm quan trọng của phương pháp, công cụ học tập, và môi
                  trường giáo dục.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h5 className="font-bold text-gray-800">Trong âm nhạc</h5>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg border-l-3 border-green-400">
                <p className="text-sm font-medium text-green-800 mb-1">
                  ✅ Quan điểm duy tâm:
                </p>
                <p className="text-xs text-gray-600">
                  "Âm nhạc hay chỉ cần có cảm xúc chân thành. Kỹ thuật chơi
                  nhạc, chất lượng nhạc cụ không quan trọng bằng tâm hồn nghệ
                  sĩ."
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border-l-3 border-red-400">
                <p className="text-sm font-medium text-red-800 mb-1">
                  ❌ Hạn chế:
                </p>
                <p className="text-xs text-gray-600">
                  Coi nhẹ vai trò của kỹ thuật, luyện tập, và điều kiện vật chất
                  trong nghệ thuật.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:-rotate-1 border border-white/50">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h5 className="font-bold text-purple-700 mb-3 text-center text-lg">
            💭 Quan điểm cốt lõi
          </h5>
          <p className="text-gray-600 text-center leading-relaxed">
            Ý thức là tồn tại duy nhất và quyết định, vật chất chỉ là biểu hiện
            của tinh thần
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-white/50">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <Wand2 className="w-8 h-8 text-white" />
          </div>
          <h5 className="font-bold text-amber-700 mb-3 text-center text-lg">
            ⚠️ Hạn chế chủ yếu
          </h5>
          <p className="text-gray-600 text-center leading-relaxed">
            Phủ nhận tính khách quan của thế giới, dẫn đến chủ nghĩa duy ý chí
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:rotate-1 border border-white/50">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h5 className="font-bold text-red-700 mb-3 text-center text-lg">
            📌 Hệ quả thực tiễn
          </h5>
          <p className="text-gray-600 text-center leading-relaxed">
            Tách rời thực tiễn khách quan, không phản ánh đúng bản chất thế giới
          </p>
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
        <Sparkles className="w-12 h-12 mx-auto mb-4 animate-bounce" />
        <h3 className="text-2xl font-bold mb-3">Bài học quan trọng</h3>
        <p className="text-purple-100 leading-relaxed max-w-3xl mx-auto">
          Chủ nghĩa duy tâm tuy đánh giá cao vai trò của ý thức và tinh thần,
          nhưng đã rơi vào thái cực phủ nhận tính khách quan của thế giới vật
          chất. Điều này dẫn đến chủ nghĩa duy ý chí, tách rời khỏi thực tiễn.
          Cần có cái nhìn biện chứng về mối quan hệ ý thức - vật chất.
        </p>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes floating {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(360deg);
          }
        }

        @keyframes floating-reverse {
          0% {
            transform: translateY(0px) rotate(360deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-slide {
          animation: slide 25s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .floating-icon {
          animation: floating 6s ease-in-out infinite;
        }

        .floating-icon-reverse {
          animation: floating-reverse 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DuyTamTab;
