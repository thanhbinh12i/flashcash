import React from "react";
import { Target, Volume2, Pause, ChevronRight } from "lucide-react";

const PhuongPhapLuan1Tab = ({ audioState }) => {
  const handleSpeak = () => {
    if (window.handleSpeakTab) {
      const content = `Ý NGHĨA PHƯƠNG PHÁP LUẬN CỦA MỐI QUAN HỆ VẬT CHẤT VÀ Ý THỨC
PHẦN I: XUẤT PHÁT TỪ THỰC TẾ KHÁCH QUAN

1. TÔN TRỌNG TÍNH KHÁCH QUAN CỦA VẬT CHẤT
• Thừa nhận sự tồn tại khách quan của thế giới
• Không áp đặt ý muốn chủ quan lên hiện thực
• Nghiên cứu đúng bản chất sự vật, hiện tượng
• Tránh duy ý chí, chủ quan trong nhận thức

2. TÔN TRỌNG QUY LUẬT KHÁCH QUAN
• Nhận thức đúng quy luật vận động của sự vật
• Hành động phù hợp với quy luật
• Không vi phạm quy luật tự nhiên và xã hội
• Vận dụng quy luật vào thực tiễn

3. XUẤT PHÁT TỪ THỰC TẾ KHÁCH QUAN
• Điều tra, khảo sát thực tế cụ thể
• Phân tích điều kiện khách quan toàn diện
• Đánh giá đúng khả năng và hạn chế
• Xây dựng kế hoạch phù hợp thực tế

4. ỨNG DỤNG TRONG THỰC TIỄN
• Trong quản lý: Dựa trên số liệu, dữ kiện thực tế
• Trong kinh doanh: Nghiên cứu thị trường kỹ lưỡng
• Trong học tập: Xuất phát từ năng lực bản thân
• Trong cuộc sống: Sống phù hợp với hoàn cảnh`;

      window.handleSpeakTab(content, 4);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
            <Target className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Ý nghĩa phương pháp luận I
          </h2>
        </div>

        <button
          onClick={handleSpeak}
          disabled={
            audioState.isLoading ||
            (audioState.currentPlayingTab !== null &&
              audioState.currentPlayingTab !== 4)
          }
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all
            ${
              audioState.currentPlayingTab === 4
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                : audioState.currentPlayingTab !== null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {audioState.isLoading && audioState.currentPlayingTab === 4 ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Đang tải
            </>
          ) : audioState.currentPlayingTab === 4 ? (
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

      <div className="bg-red-50 rounded-xl p-6 mb-6">
        <div className="prose max-w-none">
          <h3 className="text-2xl font-bold text-red-800 mt-6 mb-2">
            Ý NGHĨA PHƯƠNG PHÁP LUẬN CỦA MỐI QUAN HỆ VẬT CHẤT VÀ Ý THỨC
          </h3>
          <h4 className="text-lg font-bold text-red-700 mb-4 bg-red-100 p-3 rounded-lg">
            PHẦN I: XUẤT PHÁT TỪ THỰC TẾ KHÁCH QUAN
          </h4>

          <h5 className="text-md font-semibold text-red-600 mt-4 mb-2 border-l-4 border-red-400 pl-3">
            1. TÔN TRỌNG TÍNH KHÁCH QUAN CỦA VẬT CHẤT
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Thừa nhận sự tồn tại khách quan của thế giới
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Không áp đặt ý muốn chủ quan lên hiện thực
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Nghiên cứu đúng bản chất sự vật, hiện tượng
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Tránh duy ý chí, chủ quan trong nhận thức
            </span>
          </div>

          <h5 className="text-md font-semibold text-red-600 mt-4 mb-2 border-l-4 border-red-400 pl-3">
            2. TÔN TRỌNG QUY LUẬT KHÁCH QUAN
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Nhận thức đúng quy luật vận động của sự vật
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Hành động phù hợp với quy luật
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Không vi phạm quy luật tự nhiên và xã hội
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Vận dụng quy luật vào thực tiễn
            </span>
          </div>

          <h5 className="text-md font-semibold text-red-600 mt-4 mb-2 border-l-4 border-red-400 pl-3">
            3. XUẤT PHÁT TỪ THỰC TẾ KHÁCH QUAN
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Điều tra, khảo sát thực tế cụ thể
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Phân tích điều kiện khách quan toàn diện
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Đánh giá đúng khả năng và hạn chế
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Xây dựng kế hoạch phù hợp thực tế
            </span>
          </div>

          <h5 className="text-md font-semibold text-red-600 mt-4 mb-2 border-l-4 border-red-400 pl-3">
            4. ỨNG DỤNG TRONG THỰC TIỄN
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Trong quản lý: Dựa trên số liệu, dữ kiện thực tế
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Trong kinh doanh: Nghiên cứu thị trường kỹ lưỡng
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Trong học tập: Xuất phát từ năng lực bản thân
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Trong cuộc sống: Sống phù hợp với hoàn cảnh
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold">1</span>
            </div>
            <h5 className="font-bold text-red-700">Tôn trọng khách quan</h5>
          </div>
          <p className="text-sm text-gray-600">
            Thừa nhận sự tồn tại khách quan, không áp đặt ý muốn chủ quan
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold">2</span>
            </div>
            <h5 className="font-bold text-red-700">Tôn trọng quy luật</h5>
          </div>
          <p className="text-sm text-gray-600">
            Nhận thức và hành động phù hợp với quy luật khách quan
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold">3</span>
            </div>
            <h5 className="font-bold text-red-700">Xuất phát từ thực tế</h5>
          </div>
          <p className="text-sm text-gray-600">
            Điều tra, khảo sát và phân tích điều kiện thực tế toàn diện
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-red-600 font-bold">4</span>
            </div>
            <h5 className="font-bold text-red-700">Ứng dụng thực tiễn</h5>
          </div>
          <p className="text-sm text-gray-600">
            Áp dụng trong quản lý, kinh doanh, học tập và cuộc sống
          </p>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-5 border-l-4 border-red-500">
        <h5 className="font-bold text-red-800 mb-2">💡 Nguyên tắc cốt lõi:</h5>
        <p className="text-gray-700">
          <strong>Xuất phát từ thực tế khách quan</strong> - Tôn trọng tính
          khách quan của vật chất, có thái độ đúng đắn với hiện thực khách quan,
          căn bản là tôn trọng quy luật.
        </p>
      </div>
    </div>
  );
};

export default PhuongPhapLuan1Tab;
