import React from "react";
import {
  Eye,
  Volume2,
  Pause,
  ChevronRight,
  Star,
  Zap,
  Brain,
  Target,
  AlertTriangle,
  BookOpen,
  Lightbulb,
  Users,
  Shield,
} from "lucide-react";

const DuyVatSieuHinhTab = ({ audioState }) => {
  const handleSpeak = () => {
    if (window.handleSpeakTab) {
      const content = `CHỦNG NGHĨA DUY VẬT SIÊU HÌNH

Quan điểm cơ bản:
• Tuyệt đối hoá yếu tố vật chất sinh ra ý thức
• Vật chất quyết định hoàn toàn ý thức
• Phủ nhận tính độc lập tương đối của ý thức

Đặc điểm:
• Phủ nhận tính năng động, sáng tạo của ý thức
• Coi ý thức chỉ là sự phản ánh thụ động
• Không thừa nhận vai trò tác động trở lại của ý thức

Hệ quả trong thực tiễn:
• Rơi vào trạng thái thụ động, ỷ lại
• Trông chờ vào điều kiện khách quan
• Không phát huy được yếu tố con người
• Thiếu hiệu quả trong hoạt động thực tiễn`;

      window.handleSpeakTab(content, 1);
    }
  };

  return (
    <div className="animate-fadeIn bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen p-4">
      <div className="flex items-center justify-between mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-xl">
              <Eye className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-3xl md:text- font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-transparent">
              Chủ nghĩa duy vật siêu hình
            </h2>
          </div>
        </div>

        <button
          onClick={handleSpeak}
          disabled={
            audioState.isLoading ||
            (audioState.currentPlayingTab !== null &&
              audioState.currentPlayingTab !== 1)
          }
          className={`
            flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all transform hover:scale-105
            ${
              audioState.currentPlayingTab === 1
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg"
                : audioState.currentPlayingTab !== null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-xl"
            }
            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          `}
        >
          {audioState.isLoading && audioState.currentPlayingTab === 1 ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Đang tải
            </>
          ) : audioState.currentPlayingTab === 1 ? (
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

      <div className="mb-8 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-4 shadow-lg">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Bản chất của quan điểm
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Chủ nghĩa duy vật siêu hình coi vật chất là yếu tố duy nhất quyết
            định ý thức, phủ nhận hoàn toàn tính năng động và vai trò tác động
            ngược của ý thức đối với vật chất.
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-lg mb-3">
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              </div>
              <p className="font-semibold text-gray-700">VẬT CHẤT</p>
              <p className="text-sm text-gray-500">Quyết định tuyệt đối</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <ChevronRight className="w-10 h-10 text-blue-500 animate-pulse" />
              <span className="text-sm font-bold text-blue-600 bg-purple-100 px-3 py-1 rounded-full">
                QUYẾT ĐỊNH
              </span>
            </div>

            <div className="text-center relative">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg mb-3 opacity-60">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <p className="font-semibold text-gray-700">Ý THỨC</p>
              <p className="text-sm text-gray-500">Phản ánh thụ động</p>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">✗</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg border border-blue-200">
          <h4 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-3">
            <Target className="w-7 h-7" />
            Quan điểm cơ bản
          </h4>

          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-white/70 rounded-2xl p-4 transform hover:scale-102 transition-all">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Tuyệt đối hoá yếu tố vật chất
                </p>
                <p className="text-gray-600 text-sm">
                  Chỉ có vật chất là thực tại duy nhất, mọi hiện tượng khác đều
                  phụ thuộc hoàn toàn vào nó
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/70 rounded-2xl p-4 transform hover:scale-102 transition-all">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Vật chất quyết định hoàn toàn ý thức
                </p>
                <p className="text-gray-600 text-sm">
                  Ý thức hoàn toàn bị động, không có khả năng tác động ngược lại
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/70 rounded-2xl p-4 transform hover:scale-102 transition-all">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">
                  Phủ nhận tính độc lập tương đối
                </p>
                <p className="text-gray-600 text-sm">
                  Ý thức không có bất kỳ sự tự chủ nào trong hoạt động của mình
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 shadow-lg border border-amber-200">
          <h4 className="text-2xl font-bold text-amber-700 mb-6 flex items-center gap-3">
            <Zap className="w-7 h-7" />
            Đặc điểm nổi bật
          </h4>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span className="text-gray-700">
                Phủ nhận tính năng động, sáng tạo của ý thức
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span className="text-gray-700">
                Coi ý thức chỉ là sự phản ánh thụ động
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span className="text-gray-700">
                Không thừa nhận vai trò tác động trở lại
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-3xl p-8 shadow-lg border border-red-200">
          <h4 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3">
            <Star className="w-7 h-7" />
            Hệ quả tiêu cực
          </h4>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <ChevronRight className="w-5 h-5 text-red-600" />
              <span className="text-gray-700">
                Rơi vào trạng thái thụ động, ỷ lại
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <ChevronRight className="w-5 h-5 text-red-600" />
              <span className="text-gray-700">
                Trông chờ vào điều kiện khách quan
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <ChevronRight className="w-5 h-5 text-red-600" />
              <span className="text-gray-700">
                Không phát huy được yếu tố con người
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 rounded-xl p-3">
              <ChevronRight className="w-5 h-5 text-red-600" />
              <span className="text-gray-700">
                Thiếu hiệu quả trong thực tiễn
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div className="mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 shadow-lg border border-green-200 mb-8">
            <h4 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
              <BookOpen className="w-7 h-7" />
              Ví dụ minh họa trong thực tế
            </h4>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">
                  Ví dụ 1: Đại dịch COVID-19 (duy vật)
                </h3>
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Vật chất</strong>: Virus SARS-CoV-2 xuất hiện và lây
                    lan trên toàn cầu.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Ý thức</strong>: Con người buộc phải thay đổi lối
                    sống, ý thức về sức khỏe, phát triển vaccine, đẩy mạnh làm
                    việc online.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">👉</span>
                  <span>
                    Vật chất (dịch bệnh) → quyết định ý thức (ứng xử xã hội,
                    chính sách y tế).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-white/20 p-3 rounded-full">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">
                  Ví dụ 2: Trí tuệ nhân tạo (AI)
                </h3>
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Vật chất</strong>: Sự tiến bộ trong thuật toán, sức
                    mạnh chip xử lý, dữ liệu lớn (big data).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1">•</span>
                  <span>
                    <strong>Ý thức</strong>: Con người nhận ra tiềm năng và rủi
                    ro của AI, từ đó đặt ra chính sách quản lý, luật pháp và đạo
                    đức AI.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-500 font-bold mt-1">👉</span>
                  <span>
                    Vật chất (công nghệ) → quyết định ý thức (cách con người sử
                    dụng và quản lý).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
        <Lightbulb className="w-12 h-12 mx-auto mb-4 animate-bounce" />
        <h3 className="text-2xl font-bold mb-3">Bài học quan trọng</h3>
        <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
          Chủ nghĩa duy vật siêu hình tuy nhận ra tầm quan trọng của vật chất,
          nhưng đã rơi vào thái cực phủ nhận vai trò của ý thức. Điều này dẫn
          đến sự thụ động và thiếu hiệu quả trong thực tiễn. Cần có cái nhìn
          biện chứng về mối quan hệ vật chất - ý thức.
        </p>
      </div>
    </div>
  );
};

export default DuyVatSieuHinhTab;
