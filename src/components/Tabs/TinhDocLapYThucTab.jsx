import React from "react";
import { Lightbulb, Volume2, Pause, ChevronRight } from "lucide-react";

const TinhDocLapYThucTab = ({ audioState }) => {
  const handleSpeak = () => {
    if (window.handleSpeakTab) {
      const content = `Ý THỨC CÓ TÍNH ĐỘC LẬP TƯƠNG ĐỐI VÀ TÁC ĐỘNG TRỞ LẠI VẬT CHẤT

THỨ NHẤT: Ý thức thay đổi chậm hơn vật chất
• Ý thức có tính bảo thủ tương đối
• Tư tưởng cũ tồn tại dai dẳng trong xã hội mới
• Cần thời gian để ý thức thích nghi với thực tế mới
• Ví dụ: Tư tưởng phong kiến vẫn còn trong xã hội hiện đại

THỨ HAI: Tác động qua hoạt động thực tiễn
• Ý thức không trực tiếp biến đổi vật chất
• Phải thông qua lao động, hoạt động của con người
• Con người là cầu nối giữa ý thức và vật chất
• Thực tiễn là phương thức hiện thực hóa ý tưởng

THỨ BA: Ý thức chỉ đạo hoạt động thực tiễn
• Định hướng mục tiêu cho hoạt động
• Lựa chọn phương pháp, phương tiện
• Điều chỉnh hành động cho phù hợp
• Đánh giá kết quả và rút kinh nghiệm

THỨ TƯ: Vai trò ngày càng tăng trong xã hội hiện đại
• Tri thức khoa học là lực lượng sản xuất trực tiếp
• Ý thức quyết định sự phát triển bền vững
• Yếu tố tinh thần tạo sức mạnh tổng hợp
• Thời đại thông tin làm tăng vai trò của ý thức`;

      window.handleSpeakTab(content, 3);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center">
            <Lightbulb className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Tính độc lập của ý thức
          </h2>
        </div>

        <button
          onClick={handleSpeak}
          disabled={
            audioState.isLoading ||
            (audioState.currentPlayingTab !== null &&
              audioState.currentPlayingTab !== 3)
          }
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all
            ${
              audioState.currentPlayingTab === 3
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                : audioState.currentPlayingTab !== null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {audioState.isLoading && audioState.currentPlayingTab === 3 ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Đang tải
            </>
          ) : audioState.currentPlayingTab === 3 ? (
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

      <div className="bg-orange-50 rounded-xl p-6 mb-6">
        <div className="prose max-w-none">
          <h3 className="text-2xl font-bold text-orange-800 mt-6 mb-4 border-b-2 border-orange-200 pb-2">
            Ý THỨC CÓ TÍNH ĐỘC LẬP TƯƠNG ĐỐI VÀ TÁC ĐỘNG TRỞ LẠI VẬT CHẤT
          </h3>

          <h4 className="text-lg font-semibold text-orange-700 mt-4 mb-2 bg-orange-100 p-3 rounded-lg">
            THỨ NHẤT: Ý thức thay đổi chậm hơn vật chất
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ý thức có tính bảo thủ tương đối
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Tư tưởng cũ tồn tại dai dẳng trong xã hội mới
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Cần thời gian để ý thức thích nghi với thực tế mới
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ví dụ: Tư tưởng phong kiến vẫn còn trong xã hội hiện đại
            </span>
          </div>

          <h4 className="text-lg font-semibold text-orange-700 mt-4 mb-2 bg-orange-100 p-3 rounded-lg">
            THỨ HAI: Tác động qua hoạt động thực tiễn
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ý thức không trực tiếp biến đổi vật chất
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Phải thông qua lao động, hoạt động của con người
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Con người là cầu nối giữa ý thức và vật chất
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Thực tiễn là phương thức hiện thực hóa ý tưởng
            </span>
          </div>

          <h4 className="text-lg font-semibold text-orange-700 mt-4 mb-2 bg-orange-100 p-3 rounded-lg">
            THỨ BA: Ý thức chỉ đạo hoạt động thực tiễn
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Định hướng mục tiêu cho hoạt động
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Lựa chọn phương pháp, phương tiện
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Điều chỉnh hành động cho phù hợp
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Đánh giá kết quả và rút kinh nghiệm
            </span>
          </div>

          <h4 className="text-lg font-semibold text-orange-700 mt-4 mb-2 bg-orange-100 p-3 rounded-lg">
            THỨ TƯ: Vai trò ngày càng tăng trong xã hội hiện đại
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Tri thức khoa học là lực lượng sản xuất trực tiếp
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ý thức quyết định sự phát triển bền vững
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Yếu tố tinh thần tạo sức mạnh tổng hợp
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Thời đại thông tin làm tăng vai trò của ý thức
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-bold text-gray-800 mb-4">
          📍 Bốn biểu hiện chính:
        </h4>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <h5 className="font-semibold text-orange-700 mb-1">
                Thay đổi chậm hơn
              </h5>
              <p className="text-sm text-gray-600">
                Ý thức có tính bảo thủ, cần thời gian thích nghi
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <h5 className="font-semibold text-orange-700 mb-1">
                Tác động qua thực tiễn
              </h5>
              <p className="text-sm text-gray-600">
                Phải thông qua hoạt động của con người
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <h5 className="font-semibold text-orange-700 mb-1">
                Chỉ đạo thực tiễn
              </h5>
              <p className="text-sm text-gray-600">
                Định hướng mục tiêu và phương pháp
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="flex-1 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <h5 className="font-semibold text-orange-700 mb-1">
                Vai trò ngày càng tăng
              </h5>
              <p className="text-sm text-gray-600">
                Tri thức là lực lượng sản xuất trong thời đại mới
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinhDocLapYThucTab;
