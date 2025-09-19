import React from "react";
import { Target, Volume2, Pause, ArrowUp, ArrowDown } from "lucide-react";
import image from "../../assets/tab5.png";

const PhuongPhapLuan1Tab = ({ audioState }) => {
  const handleSpeak = () => {
    if (window.handleSpeakTab) {
      const content = `Ý NGHĨA PHƯƠNG PHÁP LUẬN CỦA MỐI QUAN HỆ VẬT CHẤT VÀ Ý THỨC

TRONG HOẠT ĐỘNG NHẬN THỨC VÀ THỰC TIỄN PHẢI XUẤT PHÁT TỪ TÌNH HÌNH THỰC TẾ KHÁCH QUAN

PHẢI BIẾT PHÁT HUY TÍNH NĂNG ĐỘNG CHỦ QUAN TRONG HOẠT ĐỘNG NHẬN THỨC VÀ THỰC TIỄN`;

      window.handleSpeakTab(content, 4);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
            <Target className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Thẻ 5: Ý nghĩa phương pháp luận
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
                : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg"
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

      <div className="bg-blue-50 rounded-xl p-8 ">
        <h3 className="text-xl font-bold text-blue-800 text-center mb-4">
          Ý nghĩa phương pháp luận của mối quan hệ vật chất và ý thức
        </h3>

        <div className="flex justify-center mb-6">
          <img
            src={image}
            alt="Ý nghĩa phương pháp luận"
            className="max-w-full h-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-400">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <ArrowUp className="w-5 h-5 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-800">
              Xuất phát từ thực tế khách quan
            </h4>
          </div>
          <p className="text-gray-600 text-sm">
            Trong hoạt động nhận thức và thực tiễn phải xuất phát từ tình hình
            thực tế khách quan
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <ArrowDown className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-800">
              Phát huy tính năng động chủ quan
            </h4>
          </div>
          <p className="text-gray-600 text-sm">
            Phải biết phát huy tính năng động chủ quan trong hoạt động nhận thức
            và thực tiễn
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhuongPhapLuan1Tab;
