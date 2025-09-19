import React from "react";
import { Compass, Volume2, Pause, ChevronRight } from "lucide-react";

const PhuongPhapLuan2Tab = ({ audioState }) => {
  const handleSpeak = () => {
    if (window.handleSpeakTab) {
      const content = `Ý NGHĨA PHƯƠNG PHÁP LUẬN CỦA MỐI QUAN HỆ VẬT CHẤT VÀ Ý THỨC

1. XUẤT PHÁT TỪ THỰC TẾ KHÁCH QUAN
• Tôn trọng tính khách quan của vật chất
• Tôn trọng quy luật khách quan
• Xuất phát từ thực tế trong nhận thức và hoạt động

2. PHÁT HUY TÍNH NĂNG ĐỘNG CHỦ QUAN
• Phát huy vai trò tích cực của ý thức
• Phát huy vai trò sáng tạo của ý thức
• Phát huy vai trò của con người trong việc vật chất hóa ý tưởng

3. TÔNG TRỌNG TRI THỨC KHOA HỌC
• Tích cực học tập, nghiên cứu
• Làm chủ tri thức khoa học
• Truyền bá tri thức vào quần chúng
• Tự giác tu dưỡng bản thân`;

      window.handleSpeakTab(content, 5);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
            <Compass className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Thẻ 6: Ý nghĩa phương pháp luận
          </h2>
        </div>

        <button
          onClick={handleSpeak}
          disabled={
            audioState.isLoading ||
            (audioState.currentPlayingTab !== null &&
              audioState.currentPlayingTab !== 5)
          }
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all
            ${
              audioState.currentPlayingTab === 5
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                : audioState.currentPlayingTab !== null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {audioState.isLoading && audioState.currentPlayingTab === 5 ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Đang tải
            </>
          ) : audioState.currentPlayingTab === 5 ? (
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

      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">
          Ý nghĩa phương pháp luận của mối quan hệ vật chất và ý thức
        </h3>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </span>
              Xuất phát từ thực tế khách quan
            </h4>
            <div className="ml-8 space-y-2">
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Tôn trọng tính khách quan của vật chất
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Tôn trọng quy luật khách quan
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Xuất phát từ thực tế trong nhận thức và hoạt động
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                2
              </span>
              Phát huy tính năng động chủ quan
            </h4>
            <div className="ml-8 space-y-2">
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Phát huy vai trò tích cực của ý thức
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Phát huy vai trò sáng tạo của ý thức
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Phát huy vai trò của con người trong việc vật chất hóa ý tưởng
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                3
              </span>
              Tôn trọng tri thức khoa học
            </h4>
            <div className="ml-8 space-y-2">
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Tích cực học tập, nghiên cứu
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Làm chủ tri thức khoa học</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Truyền bá tri thức vào quần chúng
                </span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Tự giác tu dưỡng bản thân</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <h5 className="font-bold text-lg mb-3">📌 Tóm tắt:</h5>
        <p className="text-sm leading-relaxed">
          Ý nghĩa phương pháp luận gồm ba nội dung cơ bản: xuất phát từ thực tế
          khách quan và tôn trọng quy luật; phát huy tính năng động chủ quan của
          ý thức và con người; tôn trọng tri thức khoa học và tự giác tu dưỡng.
        </p>
      </div>
    </div>
  );
};

export default PhuongPhapLuan2Tab;
