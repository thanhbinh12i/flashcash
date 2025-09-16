import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Gamepad2, 
  Sparkles, 
  BookOpen, 
  Users, 
  TrendingUp,
  ArrowRight,
  Play,
  Zap,
  Target,
  Award,
  ChevronRight
} from 'lucide-react';

const Homepage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Nội dung học tập',
      description: 'Khám phá các bài học phong phú với tính năng đọc văn bản thành podcast.',
      color: 'from-emerald-500 to-teal-500',
      link: '/learning'
    },
    {
      icon: Gamepad2,
      title: 'Flashcard Game',
      description: 'Học triết học thông qua trò chơi thẻ tương tác với hệ thống điểm số và thành tích.',
      color: 'from-blue-500 to-cyan-500',
      link: '/flashcard'
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Phân tích sâu về mối quan hệ vật chất-ý thức với công nghệ AI tiên tiến.',
      color: 'from-purple-500 to-pink-500',
      link: '/ai-analysis'
    }
  ];

  const stats = [
    { icon: Users, value: '1,000+', label: 'Người học' },
    { icon: Target, value: '500+', label: 'Câu hỏi' },
    { icon: Award, value: '50+', label: 'Chủ đề' },
    { icon: TrendingUp, value: '95%', label: 'Hài lòng' }
  ];

  const philosophyTopics = [
    {
      title: 'Chủ nghĩa duy vật',
      description: 'Vật chất là cơ sở của mọi hiện thực, ý thức là sản phẩm của não bộ.',
      gradient: 'from-red-500/20 to-orange-500/20'
    },
    {
      title: 'Chủ nghĩa duy tâm',
      description: 'Ý thức, tinh thần là yếu tố quyết định, vật chất chỉ là biểu hiện.',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      title: 'Triết học tâm trí',
      description: 'Nghiên cứu bản chất của tâm trí, ý thức và mối quan hệ với não bộ.',
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">
                  Vật chất
                </span>
                <span className="text-gray-900"> & </span>
                <span className="text-purple-600">
                  Ý thức
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Khám phá mối quan hệ sâu sắc giữa vật chất và ý thức trong triết học 
                thông qua trải nghiệm học tập tương tác
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/flashcard"
                className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Play size={20} />
                <span>Bắt đầu học ngay</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/ai-analysis"
                className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
              >
                <Brain size={20} />
                <span>Khám phá AI Analysis</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trải nghiệm học tập độc đáo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kết hợp công nghệ hiện đại với triết học cổ điển để tạo ra phương pháp học tập hiệu quả
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="group bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    <span className="font-medium">Khám phá ngay</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Topics Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Các trường phái triết học
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tìm hiểu các quan điểm khác nhau về mối quan hệ giữa vật chất và ý thức
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <p className="text-gray-600 leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 border border-gray-200 p-12 rounded-3xl space-y-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Sparkles size={32} className="text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Sẵn sàng khám phá triết học?
              </h2>
              <p className="text-xl text-gray-600">
                Bắt đầu hành trình tìm hiểu mối quan hệ giữa vật chất và ý thức ngay hôm nay
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/flashcard"
                className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Gamepad2 size={20} />
                <span>Chơi Flashcard Game</span>
                <Zap size={20} />
              </Link>
              <Link
                to="/ai-analysis"
                className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Brain size={20} />
                <span>Thử AI Analysis</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;