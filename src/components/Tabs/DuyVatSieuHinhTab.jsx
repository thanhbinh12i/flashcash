import React from "react";
import { Eye, Volume2, Pause, ChevronRight, Star, Zap } from "lucide-react";

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
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
            <Eye className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Chủ nghĩa duy vật siêu hình
          </h2>
        </div>

        <button
          onClick={handleSpeak}
          disabled={
            audioState.isLoading ||
            (audioState.currentPlayingTab !== null &&
              audioState.currentPlayingTab !== 1)
          }
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all
            ${
              audioState.currentPlayingTab === 1
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                : audioState.currentPlayingTab !== null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {audioState.isLoading && audioState.currentPlayingTab === 1 ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Đang tải
            </>
          ) : audioState.currentPlayingTab === 1 ? (
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

      <div className="bg-blue-50 rounded-xl p-6 mb-6">
        <div className="prose max-w-none">
          <h4 className="text-lg font-semibold text-purple-700 mt-4 mb-2 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Quan điểm cơ bản:
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Tuyệt đối hoá yếu tố vật chất sinh ra ý thức
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Vật chất quyết định hoàn toàn ý thức
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Phủ nhận tính độc lập tương đối của ý thức
            </span>
          </div>

          <h4 className="text-lg font-semibold text-purple-700 mt-4 mb-2 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Đặc điểm:
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Phủ nhận tính năng động, sáng tạo của ý thức
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Coi ý thức chỉ là sự phản ánh thụ động
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Không thừa nhận vai trò tác động trở lại của ý thức
            </span>
          </div>

          <h4 className="text-lg font-semibold text-purple-700 mt-4 mb-2 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Hệ quả:
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Rơi vào trạng thái thụ động, ỷ lại
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Trông chờ vào điều kiện khách quan
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Không phát huy được yếu tố con người
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Thiếu hiệu quả trong hoạt động thực tiễn
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
          <h5 className="font-semibold text-blue-700 mb-2">
            🎯 Quan điểm cốt lõi
          </h5>
          <p className="text-sm text-gray-600">
            Vật chất quyết định tuyệt đối ý thức
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
          <h5 className="font-semibold text-blue-700 mb-2">⚠️ Hạn chế</h5>
          <p className="text-sm text-gray-600">
            Phủ nhận tính năng động của ý thức
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
          <h5 className="font-semibold text-blue-700 mb-2">📌 Hệ quả</h5>
          <p className="text-sm text-gray-600">
            Dẫn đến thụ động, ỷ lại trong thực tiễn
          </p>
        </div>
      </div>
    </div>
  );
};

export default DuyVatSieuHinhTab;
