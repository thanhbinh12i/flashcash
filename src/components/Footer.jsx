import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Gamepad2, 
  Home, 
  BookOpen, 
  Mail, 
  Github, 
  Twitter, 
  Linkedin,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Trang chủ', href: '/', icon: Home },
    { name: 'Flashcard Game', href: '/flashcard', icon: Gamepad2 },
    { name: 'AI Analysis', href: '/ai-analysis', icon: Brain },
    { name: 'Về chúng tôi', href: '/about', icon: BookOpen },
  ];

  const philosophyLinks = [
    { name: 'Chủ nghĩa duy vật', href: '#materialism' },
    { name: 'Chủ nghĩa duy tâm', href: '#idealism' },
    { name: 'Triết học tâm trí', href: '#philosophy-of-mind' },
    { name: 'Ý thức và não bộ', href: '#consciousness' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Email', href: 'mailto:contact@philosophymind.com', icon: Mail },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Philosophy Mind</h3>
                <p className="text-sm text-gray-600">Vật chất & Ý thức</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Khám phá mối quan hệ sâu sắc giữa vật chất và ý thức thông qua các trò chơi tương tác 
              và phân tích AI tiên tiến.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-blue-600 transition-all duration-300 group"
                    title={social.name}
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Liên kết nhanh</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                    >
                      <Icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Philosophy Topics */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Chủ đề triết học</h4>
            <ul className="space-y-2">
              {philosophyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                  >
                    <ExternalLink size={14} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">contact@philosophymind.com</span>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="text-blue-800 font-medium mb-2">💡 Mẹo học tập</h5>
                <p className="text-blue-700 text-sm">
                  Hãy thử kết hợp Flashcard Game với AI Analysis để hiểu sâu hơn về triết học!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>© {currentYear} Philosophy Mind. Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>for philosophy lovers.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#privacy" className="hover:text-blue-600 transition-colors duration-300">
                Chính sách bảo mật
              </a>
              <a href="#terms" className="hover:text-blue-600 transition-colors duration-300">
                Điều khoản sử dụng
              </a>
              <a href="#cookies" className="hover:text-blue-600 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;