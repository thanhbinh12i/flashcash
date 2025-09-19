// tabs/VaiTroVatChatTab.jsx
import React from "react";
import { Layers, Volume2, Pause, ChevronRight } from "lucide-react";

const VaiTroVatChatTab = ({ audioState }) => {
  const handleSpeak = () => {
    if (window.handleSpeakTab) {
      const content = `VAI TRÒ CỦA VẬT CHẤT ĐỐI VỚI Ý THỨC

Theo quan điểm của Chủ nghĩa duy vật biện chứng:

1. VẬT CHẤT QUYẾT ĐỊNH NGUỒN GỐC CỦA Ý THỨC
• Ý thức ra đời từ quá trình tiến hóa của vật chất
• Não người là cơ quan vật chất sinh ra ý thức
• Không có vật chất thì không có ý thức

2. VẬT CHẤT QUYẾT ĐỊNH NỘI DUNG CỦA Ý THỨC
• Ý thức phản ánh thế giới vật chất khách quan
• Nội dung ý thức được rút ra từ hiện thực khách quan
• Mọi tư tưởng đều có nguồn gốc từ thực tế

3. VẬT CHẤT QUYẾT ĐỊNH BẢN CHẤT CỦA Ý THỨC
• Ý thức là sự phản ánh của vật chất
• Bản chất ý thức mang tính xã hội
• Ý thức gắn liền với hoạt động thực tiễn

4. VẬT CHẤT QUYẾT ĐỊNH SỰ VẬN ĐỘNG, PHÁT TRIỂN CỦA Ý THỨC
• Khi vật chất thay đổi, ý thức cũng thay đổi theo
• Sự phát triển của xã hội dẫn đến phát triển ý thức
• Thực tiễn là động lực phát triển của ý thức`;

      window.handleSpeakTab(content, 2);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
            <Layers className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            Vai trò vật chất với ý thức
          </h2>
        </div>

        <button
          onClick={handleSpeak}
          disabled={
            audioState.isLoading ||
            (audioState.currentPlayingTab !== null &&
              audioState.currentPlayingTab !== 2)
          }
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all
            ${
              audioState.currentPlayingTab === 2
                ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                : audioState.currentPlayingTab !== null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg"
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {audioState.isLoading && audioState.currentPlayingTab === 2 ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Đang tải
            </>
          ) : audioState.currentPlayingTab === 2 ? (
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

      <div className="bg-green-50 rounded-xl p-6 mb-6">
        <div className="prose max-w-none">
          <p className="text-md font-medium text-gray-700 italic mb-4">
            Theo quan điểm của Chủ nghĩa duy vật biện chứng:
          </p>

          <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2 bg-green-100 p-3 rounded-lg">
            1. VẬT CHẤT QUYẾT ĐỊNH NGUỒN GỐC CỦA Ý THỨC
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ý thức ra đời từ quá trình tiến hóa của vật chất
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Não người là cơ quan vật chất sinh ra ý thức
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Không có vật chất thì không có ý thức
            </span>
          </div>

          <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2 bg-green-100 p-3 rounded-lg">
            2. VẬT CHẤT QUYẾT ĐỊNH NỘI DUNG CỦA Ý THỨC
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ý thức phản ánh thế giới vật chất khách quan
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Nội dung ý thức được rút ra từ hiện thực khách quan
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Mọi tư tưởng đều có nguồn gốc từ thực tế
            </span>
          </div>

          <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2 bg-green-100 p-3 rounded-lg">
            3. VẬT CHẤT QUYẾT ĐỊNH BẢN CHẤT CỦA Ý THỨC
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ý thức là sự phản ánh của vật chất
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Bản chất ý thức mang tính xã hội
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Ý thức gắn liền với hoạt động thực tiễn
            </span>
          </div>

          <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2 bg-green-100 p-3 rounded-lg">
            4. VẬT CHẤT QUYẾT ĐỊNH SỰ VẬN ĐỘNG, PHÁT TRIỂN CỦA Ý THỨC
          </h4>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Khi vật chất thay đổi, ý thức cũng thay đổi theo
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Sự phát triển của xã hội dẫn đến phát triển ý thức
            </span>
          </div>
          <div className="flex items-start gap-2 ml-4 mb-2">
            <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">
              Thực tiễn là động lực phát triển của ý thức
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="text-2xl mb-2">🌱</div>
          <h5 className="font-bold text-green-800 mb-2">Nguồn gốc</h5>
          <p className="text-sm text-gray-600">
            Vật chất quyết định nguồn gốc ý thức
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="text-2xl mb-2">📝</div>
          <h5 className="font-bold text-green-800 mb-2">Nội dung</h5>
          <p className="text-sm text-gray-600">
            Ý thức phản ánh thế giới khách quan
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="text-2xl mb-2">💎</div>
          <h5 className="font-bold text-green-800 mb-2">Bản chất</h5>
          <p className="text-sm text-gray-600">
            Ý thức là phản ánh của vật chất
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
          <div className="text-2xl mb-2">🔄</div>
          <h5 className="font-bold text-green-800 mb-2">Vận động</h5>
          <p className="text-sm text-gray-600">
            Vật chất thay đổi, ý thức thay đổi
          </p>
        </div>
      </div>
    </div>
  );
};

export default VaiTroVatChatTab;
