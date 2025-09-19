import React from "react";
import {
  Crown,
  AlertTriangle,
  Star,
  CheckCircle,
  Users,
  BookOpen,
  Clock,
  FileText,
} from "lucide-react";

export default function AIUsageReport() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Crown className="w-8 h-8 text-amber-500" />
          <h1 className="text-3xl font-bold text-gray-800">
            Báo cáo sử dụng AI & Cam kết liêm chính học thuật
          </h1>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Công cụ AI đã sử dụng
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">ChatGPT</h3>
                <p className="text-sm text-gray-600">
                  <strong>Mục đích:</strong> Hỗ trợ tạo cấu trúc website với
                  ReactJS
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 mb-3">Output từ AI:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cấu trúc ReactJS cơ bản cho web
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Style với thư viện Tailwind CSS
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-2">
                Phần nhóm chỉnh sửa:
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4 text-blue-500" />
                  Kiểm tra nội dung phù hợp với nội dung gốc
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  Điều chỉnh câu hỏi quiz phù hợp với nội dung bài học
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-blue-500" />
                  Chỉnh sửa giao diện và nội dung cho phù hợp
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-6 h-6 text-emerald-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Ứng dụng AI sáng tạo
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">
                AI chỉ đóng vai trò hỗ trợ, không thay thế hoàn toàn:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-700">
                      Tạo cấu trúc kỹ thuật:
                    </p>
                    <p className="text-sm text-gray-600">
                      Sử dụng thư viện ReactJS để xây dựng website tương tác
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-700">
                      Hỗ trợ layout và design:
                    </p>
                    <p className="text-sm text-gray-600">
                      Gợi ý bố cục responsive, màu sắc chuyên nghiệp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-gray-700 mb-3">
                Phần sinh viên tự thực hiện:
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Tìm hiểu nội dung bài học
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Tóm tắt nội dung từ slide của trường
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Bổ sung ví dụ thực tiễn
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-orange-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Kiểm chứng và đối chiếu nguồn nội dung
            </h2>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Nội dung
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Nguồn gốc
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Phương thức kiểm chứng
                    </th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">
                      Trạng thái
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-700">
                      VẬT CHẤT VÀ Ý THỨC
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                        Nguồn slide tiết 8
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">
                      So sánh trực tiếp với slide bài giảng chính thức
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-green-700 font-medium text-sm">
                          Đã kiểm chứng
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full mb-4">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              CAM KẾT LIÊM CHÍNH HỌC THUẬT
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <p className="text-center text-gray-700 mb-6 font-medium">
              Chúng tôi, Nhóm MLN111, cam kết rằng:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">
                    1
                  </span>
                  Không để AI làm thay hoàn toàn:
                </h3>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">
                    2
                  </span>
                  Phân định rõ AI output và phần sinh viên:
                </h3>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-bold">
                    3
                  </span>
                  Đối chiếu nguồn chính thống:
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-violet-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Thành viên nhóm
            </h2>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Võ Quang Minh</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Nguyễn Ngô Anh Tú
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    Nguyễn Phạm Thanh Bình
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Hồ Quốc Bảo</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200 md:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Nguyễn Cao Trí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
