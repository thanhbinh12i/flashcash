import React from 'react';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';

const Feedback = ({ message }) => {
  if (!message) return null;

  // Kiểm tra xem có phải feedback chi tiết không
  const isDetailedFeedback = message.includes('🔬') || message.includes('🧠');
  const isSuccess = message.includes('🎉') || message.includes('Chính xác');
  const isError = message.includes('❌') || message.includes('Chưa đúng');
  
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl animate-in slide-in-from-bottom duration-300">
      <div className={`bg-white border-2 px-6 py-4 rounded-xl text-gray-900 shadow-xl backdrop-blur-sm ${
        isDetailedFeedback ? 'text-left' : 'text-center rounded-full'
      } ${
        isSuccess ? 'border-green-300 bg-green-50' : 
        isError ? 'border-red-300 bg-red-50' : 
        'border-gray-200'
      } card-bounce`}>
        {isDetailedFeedback ? (
          <div className="space-y-3">
            {message.split('\n\n').map((section, index) => {
              if (section.startsWith('🎉')) {
                return (
                  <div key={index} className="text-center font-bold text-lg text-green-600 mb-4 flex items-center justify-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    {section}
                  </div>
                );
              }
              if (section.startsWith('🔬')) {
                return (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 shadow-sm">
                    <div className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                      <span className="text-lg">🔬</span>
                      Vật chất:
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">{section.replace('🔬 ', '')}</div>
                  </div>
                );
              }
              if (section.startsWith('🧠')) {
                return (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 shadow-sm">
                    <div className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                      <span className="text-lg">🧠</span>
                      Ý thức:
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">{section.replace('🧠 ', '')}</div>
                  </div>
                );
              }
              if (section.startsWith('⚡')) {
                return (
                  <div key={index} className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 shadow-sm">
                    <div className="font-semibold text-yellow-700 mb-2 flex items-center gap-2">
                      <span className="text-lg">⚡</span>
                      Tương tác:
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">{section.replace('⚡ Tương tác: ', '')}</div>
                  </div>
                );
              }
              return (
                <div key={index} className="text-sm text-gray-700 leading-relaxed">
                  {section}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="font-semibold flex items-center justify-center gap-2">
            {isSuccess && <CheckCircle className="w-5 h-5 text-green-600" />}
            {isError && <XCircle className="w-5 h-5 text-red-600" />}
            {!isSuccess && !isError && <Lightbulb className="w-5 h-5 text-blue-600" />}
            <div>
              {message.split('\n').map((line, index) => (
                <div key={index} className={index > 0 ? 'mt-2 text-sm opacity-80' : ''}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;