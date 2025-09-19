import React from "react";
import { Compass, Volume2, Pause, ChevronRight } from "lucide-react";

const PhuongPhapLuan2Tab = ({ audioState }) => {
  const handleSpeak = () => {
    if (window.handleSpeakTab) {
      const content = `Ý NGHĨA PHƯƠNG PHÁP LUẬN CỦA MỐI QUAN HỆ VẬT CHẤT VÀ Ý THỨC
PHẦN II: PHÁT HUY TÍNH NĂNG ĐỘNG CHỦ QUAN

1. PHÁT HUY VAI TRÒ TÍCH CỰC CỦA Ý THỨC
• Sáng tạo trong tư duy và hành động
• Chủ động tìm giải pháp cho vấn đề
• Không thụ động chờ đợi điều kiện
• Biến thách thức thành cơ hội

2. PHÁT HUY VAI TRÒ CỦA CON NGƯỜI
• Con người là nhân tố quyết định
• Nâng cao năng lực, trình độ con người
• Khơi dậy tiềm năng sáng tạo
• Tạo động lực tinh thần cho phát triển

3. TÔN TRỌNG TRI THỨC KHOA HỌC
• Học tập, nghiên cứu liên tục
• Cập nhật kiến thức mới
• Ứng dụng khoa học vào thực tiễn
• Truyền bá tri thức cho cộng đồng

4. TỰ GIÁC TU DƯỠNG, RÈN LUYỆN
• Nâng cao phẩm chất đạo đức
• Rèn luyện ý chí, nghị lực
• Phát triển tư duy biện chứng
• Hoàn thiện nhân cách toàn diện

5. KẾT HỢP KHÁCH QUAN VÀ CHỦ QUAN
• Thống nhất giữa lý luận và thực tiễn
• Kết hợp điều kiện khách quan với năng lực chủ quan
• Vừa tôn trọng quy luật vừa sáng tạo
• Tránh cả hai thái cực: duy ý chí và thụ động`;

      window.handleSpeakTab(content, 5);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center">
            <Compass className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            Ý nghĩa phương pháp luận II
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
                : "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:shadow-lg"
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

      <div className="bg-indigo-50 rounded-xl p-6 mb-6">
        <div className="prose max-w-none">
          <h3 className="text-2xl font-bold text-indigo-800 mt-6 mb-2">
            Ý NGHĨA PHƯƠNG PHÁP LUẬN CỦA MỐI QUAN HỆ VẬT CHẤT VÀ Ý THỨC
          </h3>
          <h4 className="text-lg font-bold text-indigo-700 mb-4 bg-indigo-100 p-3 rounded-lg">
            PHẦN II: PHÁT HUY TÍNH NĂNG ĐỘNG CHỦ QUAN
          </h4>

          <h5 className="text-md font-semibold text-indigo-600 mt-4 mb-2 border-l-4 border-indigo-400 pl-3">
            1. PHÁT HUY VAI TRÒ TÍCH CỰC CỦA Ý THỨC
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Sáng tạo trong tư duy và hành động
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Chủ động tìm giải pháp cho vấn đề
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Không thụ động chờ đợi điều kiện
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Biến thách thức thành cơ hội</span>
          </div>

          <h5 className="text-md font-semibold text-indigo-600 mt-4 mb-2 border-l-4 border-indigo-400 pl-3">
            2. PHÁT HUY VAI TRÒ CỦA CON NGƯỜI
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Con người là nhân tố quyết định
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Nâng cao năng lực, trình độ con người
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Khơi dậy tiềm năng sáng tạo</span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Tạo động lực tinh thần cho phát triển
            </span>
          </div>

          <h5 className="text-md font-semibold text-indigo-600 mt-4 mb-2 border-l-4 border-indigo-400 pl-3">
            3. TÔN TRỌNG TRI THỨC KHOA HỌC
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Học tập, nghiên cứu liên tục</span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Cập nhật kiến thức mới</span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ứng dụng khoa học vào thực tiễn
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Truyền bá tri thức cho cộng đồng
            </span>
          </div>

          <h5 className="text-md font-semibold text-indigo-600 mt-4 mb-2 border-l-4 border-indigo-400 pl-3">
            4. TỰ GIÁC TU DƯỠNG, RÈN LUYỆN
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Nâng cao phẩm chất đạo đức</span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Rèn luyện ý chí, nghị lực</span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Phát triển tư duy biện chứng</span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Hoàn thiện nhân cách toàn diện
            </span>
          </div>

          <h5 className="text-md font-semibold text-indigo-600 mt-4 mb-2 border-l-4 border-indigo-400 pl-3">
            5. KẾT HỢP KHÁCH QUAN VÀ CHỦ QUAN
          </h5>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Thống nhất giữa lý luận và thực tiễn
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Kết hợp điều kiện khách quan với năng lực chủ quan
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Vừa tôn trọng quy luật vừa sáng tạo
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Tránh cả hai thái cực: duy ý chí và thụ động
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-gradient-to-br from-indigo-100 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="text-2xl mb-2">💡</div>
          <h5 className="font-bold text-indigo-700 mb-2">Phát huy ý thức</h5>
          <p className="text-sm text-gray-600">
            Sáng tạo trong tư duy, chủ động tìm giải pháp
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="text-2xl mb-2">👥</div>
          <h5 className="font-bold text-indigo-700 mb-2">Vai trò con người</h5>
          <p className="text-sm text-gray-600">
            Con người là nhân tố quyết định sự phát triển
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="text-2xl mb-2">📚</div>
          <h5 className="font-bold text-indigo-700 mb-2">Tri thức khoa học</h5>
          <p className="text-sm text-gray-600">
            Học tập liên tục, ứng dụng khoa học vào thực tiễn
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="text-2xl mb-2">🎯</div>
          <h5 className="font-bold text-indigo-700 mb-2">Tu dưỡng bản thân</h5>
          <p className="text-sm text-gray-600">
            Nâng cao đạo đức, rèn luyện ý chí nghị lực
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-100 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 md:col-span-2 lg:col-span-1">
          <div className="text-2xl mb-2">⚖️</div>
          <h5 className="font-bold text-indigo-700 mb-2">Kết hợp cân bằng</h5>
          <p className="text-sm text-gray-600">
            Thống nhất khách quan và chủ quan, tránh thái cực
          </p>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
        <h5 className="font-bold text-xl mb-3">🌟 Thông điệp cốt lõi:</h5>
        <p className="mb-3">
          <strong>Phát huy tính năng động chủ quan</strong> là phát huy vai trò
          tích cực, năng động, sáng tạo của ý thức và vai trò của con người
          trong việc hiện thực hóa những ý tưởng sáng tạo đó.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <p className="text-sm">
              <strong>Đòi hỏi:</strong> Tôn trọng tri thức khoa học, tích cực
              học tập
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-lg p-3">
            <p className="text-sm">
              <strong>Mục tiêu:</strong> Làm chủ tri thức và truyền bá vào cộng
              đồng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhuongPhapLuan2Tab;
