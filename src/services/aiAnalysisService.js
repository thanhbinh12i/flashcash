// AI Analysis Service for integrating with Gemini and GPT APIs

// Cấu hình Gemini AI (miễn phí)
export const AI_PROVIDERS = {
  GEMINI: 'gemini'
};

const API_ENDPOINTS = {
  [AI_PROVIDERS.GEMINI]: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'
};

// Create analysis prompt
const createAnalysisPrompt = (material, consciousness) => {
  return `
Bạn là một chuyên gia triết học duy vật biện chứng. Hãy phân tích mối quan hệ giữa vật chất và ý thức sau đây:

Vật chất: "${material}"
Ý thức: "${consciousness}"

Vui lòng phân tích theo cấu trúc sau:
1. Mối quan hệ: (Có/Không có mối quan hệ trực tiếp)
2. Giải thích chi tiết: Mô tả cách vật chất tác động lên ý thức hoặc ngược lại
3. Cơ chế khoa học: Giải thích các quá trình sinh học, vật lý, hóa học liên quan
4. Ý nghĩa triết học: Liên hệ với nguyên lý duy vật biện chứng
5. Độ tin cậy: Đánh giá từ 0-100%

Trả lời bằng tiếng Việt, ngắn gọn và dễ hiểu.
  `.trim();
};

const callGeminiAPI = async (prompt, apiKey) => {
  const response = await fetch(`${API_ENDPOINTS[AI_PROVIDERS.GEMINI]}?key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 400) {
      throw new Error('API key không hợp lệ hoặc đã hết hạn');
    }
    if (response.status === 429) {
      throw new Error('Đã vượt quá giới hạn API. Vui lòng thử lại sau.');
    }
    throw new Error(errorData.error?.message || `Lỗi Gemini API: ${response.status}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  
  if (!text) {
    throw new Error('Gemini không trả về kết quả. Vui lòng thử lại.');
  }
  
  return text;
};

// Clean and format text by removing excessive markdown and improving readability
const cleanText = (text) => {
  if (!text) return '';
  
  return text
    // Remove excessive ** markdown
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    // Clean up multiple spaces
    .replace(/\s+/g, ' ')
    // Remove leading/trailing whitespace
    .trim()
    // Split long lines for better readability
    .replace(/([.!?])\s+/g, '$1\n')
    // Clean up bullet points
    .replace(/\*\s+/g, '• ')
    // Remove excessive newlines
    .replace(/\n{3,}/g, '\n\n');
};

// Parse analysis result from AI response
const parseAIResponse = (analysisText, material, consciousness, provider) => {
  try {
    // Clean the input text first
    const cleanedText = cleanText(analysisText);
    
    // Extract information using regex patterns
    const relationshipMatch = cleanedText.match(/(?:Mối quan hệ|1\.)\s*:?\s*([^\n]+)/i);
    const explanationMatch = cleanedText.match(/(?:Giải thích chi tiết|2\.)\s*:?\s*([^\n]+(?:\n(?!\d+\.|Cơ chế|Ý nghĩa|Độ tin)[^\n]*)*)/i);
    const mechanismMatch = cleanedText.match(/(?:Cơ chế khoa học|3\.)\s*:?\s*([^\n]+(?:\n(?!\d+\.|Ý nghĩa|Độ tin)[^\n]*)*)/i);
    const philosophyMatch = cleanedText.match(/(?:Ý nghĩa triết học|4\.)\s*:?\s*([^\n]+(?:\n(?!\d+\.|Độ tin)[^\n]*)*)/i);
    const confidenceMatch = cleanedText.match(/(?:Độ tin cậy|5\.)\s*:?\s*([0-9]+)/i);

    const relationship = cleanText(relationshipMatch?.[1]) || 'Không xác định';
    const explanation = cleanText(explanationMatch?.[1]) || 'Không có giải thích chi tiết';
    const mechanism = cleanText(mechanismMatch?.[1]) || 'Không có thông tin cơ chế';
    const philosophy = cleanText(philosophyMatch?.[1]) || 'Không có ý nghĩa triết học';
    const confidence = parseInt(confidenceMatch?.[1]) || 50;

    return {
      relationship,
      explanation,
      mechanism,
      philosophy,
      confidence: Math.min(Math.max(confidence, 0), 100), // Ensure 0-100 range
      fullText: cleanedText
    };
  } catch (error) {
    // Fallback parsing if structured parsing fails
    const cleanedFallback = cleanText(analysisText);
    return {
      relationship: 'Có mối quan hệ',
      explanation: cleanedFallback.substring(0, 200) + '...',
      mechanism: 'Cần phân tích thêm',
      philosophy: 'Thể hiện mối quan hệ vật chất - ý thức',
      confidence: 70,
      fullText: cleanedFallback
    };
  }
};

export const analyzeRelationship = async (material, consciousness) => {
  // Validate inputs
  if (!material?.trim() || !consciousness?.trim()) {
    throw new Error('Vui lòng nhập đầy đủ vật chất và ý thức');
  }

  // Get API key from environment variable
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey?.trim()) {
    throw new Error('API key chưa được cấu hình. Vui lòng thêm VITE_GEMINI_API_KEY vào file .env');
  }

  if (!validateApiKey(apiKey)) {
    throw new Error('API key Gemini không hợp lệ trong file .env (phải bắt đầu bằng "AIza")');
  }

  try {
    const prompt = createAnalysisPrompt(material.trim(), consciousness.trim());
    const aiResponse = await callGeminiAPI(prompt, apiKey);
    return parseAIResponse(aiResponse, material, consciousness, AI_PROVIDERS.GEMINI);
  } catch (error) {
    console.error('Gemini analysis error:', error);
    throw error;
  }
};

export const getAvailableProviders = () => {
  return [
    { id: AI_PROVIDERS.GEMINI, name: 'Google Gemini', free: true }
  ];
};

export const validateApiKey = (apiKey) => {
  if (!apiKey || typeof apiKey !== 'string') {
    return false;
  }
  
  return apiKey.startsWith('AIza') && apiKey.length > 20;
};