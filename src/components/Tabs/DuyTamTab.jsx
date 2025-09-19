// tabs/DuyTamTab.jsx
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
    <div className="animate-fadeIn">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-icon absolute top-10 left-10 text-purple-200 opacity-30">
          <Brain className="w-8 h-8" />
        </div>
        <div className="floating-icon-reverse absolute top-20 right-20 text-purple-200 opacity-30">
          <Cloud className="w-10 h-10" />
        </div>
        <div className="floating-icon absolute bottom-20 left-20 text-purple-200 opacity-30">
          <Star className="w-6 h-6" />
        </div>
        <div className="floating-icon-reverse absolute bottom-10 right-10 text-purple-200 opacity-30">
          <Sparkles className="w-8 h-8" />
        </div>
      </div>

      <div className="mb-6 relative h-40 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-8 animate-slide">
            {[...philosophyImages, ...philosophyImages].map((img, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-32 h-32 bg-gradient-to-br ${img.color} rounded-2xl flex flex-col items-center justify-center transform hover:scale-110 transition-transform cursor-pointer shadow-lg`}
              >
                <div className="text-4xl mb-2 animate-bounce-slow">
                  {img.icon}
                </div>
                <p className="text-white text-sm font-bold">{img.title}</p>
                <p className="text-white/80 text-xs px-2 text-center">
                  {img.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-purple-100 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-pink-100 to-transparent pointer-events-none" />
      </div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center animate-pulse-slow">
            <Brain className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Chủ nghĩa duy tâm
          </h2>
        </div>

        <button
          onClick={handleSpeak}
          disabled={
            audioState.isLoading ||
            (audioState.currentPlayingTab !== null &&
              audioState.currentPlayingTab !== 0)
          }
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all
            ${
              audioState.currentPlayingTab === 0
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white animate-pulse"
                : audioState.currentPlayingTab !== null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:shadow-lg hover:scale-105"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {audioState.isLoading && audioState.currentPlayingTab === 0 ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Đang tải
            </>
          ) : audioState.currentPlayingTab === 0 ? (
            <>
              <Pause className="w-4 h-4" />
              Đang phát
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4" />
              Phát âm
            </>
          )}
        </button>
      </div>

      <div className="bg-purple-50 rounded-xl p-6 mb-6 relative">
        <div className="prose max-w-none">
          <h4 className="text-lg font-semibold text-purple-700 mt-4 mb-2 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Quan điểm cơ bản:
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">
              Ý thức là tồn tại duy nhất, tuyệt đối, có tính quyết định
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">
              Thế giới vật chất chỉ là bản sao, biểu hiện khác của ý thức tinh
              thần
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">
              Vật chất là tính thứ hai, do ý thức tinh thần sinh ra
            </span>
          </div>

          <h4 className="text-lg font-semibold text-purple-700 mt-4 mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Đặc điểm:
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">
              Phủ nhận tính khách quan của thế giới vật chất
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">
              Cường điệu vai trò nhân tố chủ quan
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">Duy ý chí trong hành động</span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">
              Bất chấp điều kiện và quy luật khách quan
            </span>
          </div>

          <h4 className="text-lg font-semibold text-purple-700 mt-4 mb-2 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Hệ quả:
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">
              Dẫn đến chủ nghĩa duy ý chí trong nhận thức
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">Tách rời thực tiễn khách quan</span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2 hover:translate-x-2 transition-transform">
            <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0 animate-pulse" />
            <span className="text-gray-700">
              Không phản ánh đúng bản chất của thế giới
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          Ví dụ minh họa các quan điểm
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Sun,
              title: "Platon",
              desc: "Ví dụ: Khi nhìn thấy một cái bàn gỗ, bàn sắt hay bàn nhựa, đó chỉ là bản sao không hoàn hảo của 'ý niệm Cái Bàn' tồn tại ở thế giới ý niệm.",
              color: "yellow",
            },
            {
              icon: Moon,
              title: "Berkeley",
              desc: "Ví dụ: Một cái cây trong rừng nếu không ai nhìn thấy thì vẫn tồn tại vì Thượng đế luôn tri giác nó. Tồn tại là được tri giác.",
              color: "blue",
            },
            {
              icon: Heart,
              title: "Hegel",
              desc: "Ví dụ: Các cuộc cách mạng, sự phát triển khoa học và văn hóa chỉ là biểu hiện của quá trình Ý niệm tuyệt đối tự bộc lộ trong lịch sử.",
              color: "red",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br from-${item.color}-50 to-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group`}
            >
              <div
                className={`w-10 h-10 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
              >
                <item.icon className={`w-6 h-6 text-${item.color}-600`} />
              </div>
              <h5 className="font-bold text-gray-800">{item.title}</h5>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:scale-105 hover:-rotate-1">
          <h5 className="font-semibold text-purple-700 mb-2">
            💭 Quan điểm cốt lõi
          </h5>
          <p className="text-sm text-gray-600">
            Ý thức là tồn tại duy nhất và quyết định
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:scale-105">
          <h5 className="font-semibold text-purple-700 mb-2">⚠️ Hạn chế</h5>
          <p className="text-sm text-gray-600">
            Phủ nhận tính khách quan của vật chất
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:scale-105 hover:rotate-1">
          <h5 className="font-semibold text-purple-700 mb-2">📌 Hệ quả</h5>
          <p className="text-sm text-gray-600">
            Dẫn đến duy ý chí, tách rời thực tiễn
          </p>
        </div>
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

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
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
          animation: slide 20s linear infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .floating-icon {
          animation: floating 6s ease-in-out infinite;
        }

        .floating-icon-reverse {
          animation: floating-reverse 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default DuyTamTab;
