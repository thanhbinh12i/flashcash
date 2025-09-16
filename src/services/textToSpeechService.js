class TextToSpeechService {
  constructor() {
    this.isPlaying = false;
    this.isPaused = false;
    this.currentUtterance = null;
    this.speechSynthesis = window.speechSynthesis;
    this.voices = [];
    this.selectedVoice = null;
    this.rate = 1.0;
    this.pitch = 1.0;
    this.volume = 1.0;
    
    // Load voices khi khởi tạo
    this.loadVoices();
  }

  // Load danh sách giọng nói có sẵn
  loadVoices() {
    return new Promise((resolve) => {
      const loadVoicesWhenAvailable = () => {
        this.voices = this.speechSynthesis.getVoices();
        
        if (this.voices.length > 0) {
          console.log('Loaded voices:', this.voices.length);
          console.log('Available voices:', this.voices.map(v => `${v.name} (${v.lang})`));
          
          // Tìm giọng tiếng Việt với nhiều pattern khác nhau
          const vietnameseVoices = this.voices.filter(voice => 
            voice.lang.includes('vi') || 
            voice.lang.includes('VN') ||
            voice.lang.toLowerCase().includes('vietnamese') ||
            voice.name.toLowerCase().includes('vietnam') ||
            voice.name.toLowerCase().includes('vietnamese') ||
            voice.lang === 'vi-VN' ||
            voice.lang === 'vi'
          );
          
          console.log('Vietnamese voices found:', vietnameseVoices.length);
          vietnameseVoices.forEach(v => console.log(`- ${v.name} (${v.lang})`));
          
          // Nếu có giọng tiếng Việt, chọn giọng đầu tiên
          if (vietnameseVoices.length > 0) {
            this.selectedVoice = vietnameseVoices[0];
            console.log('Selected Vietnamese voice:', this.selectedVoice.name);
          } else {
            // Nếu không có giọng tiếng Việt, tìm giọng English hoặc giọng đầu tiên
            const englishVoices = this.voices.filter(voice => 
              voice.lang.includes('en') || voice.lang.includes('US') || voice.lang.includes('GB')
            );
            
            if (englishVoices.length > 0) {
              this.selectedVoice = englishVoices[0];
              console.log('No Vietnamese voice found, using English voice:', this.selectedVoice.name);
            } else {
              this.selectedVoice = this.voices[0];
              console.log('No Vietnamese/English voice found, using first available:', this.selectedVoice?.name);
            }
          }
          
          resolve(this.voices);
        } else {
          // Thử lại sau 100ms
          setTimeout(loadVoicesWhenAvailable, 100);
        }
      };

      // Lắng nghe sự kiện voiceschanged
      this.speechSynthesis.onvoiceschanged = loadVoicesWhenAvailable;
      
      // Thử load ngay lập tức
      loadVoicesWhenAvailable();
    });
  }

  // Lấy danh sách giọng nói
  getVoices() {
    const allVoices = this.voices.map(voice => ({
      code: voice.name,
      name: `${voice.name} (${voice.lang})`,
      lang: voice.lang,
      gender: voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman') ? 'FEMALE' : 'MALE',
      voice: voice
    }));

    // Ưu tiên giọng tiếng Việt
    const vietnameseVoices = allVoices.filter(v => 
      v.lang.includes('vi') || v.lang.includes('VN')
    );
    
    const otherVoices = allVoices.filter(v => 
      !v.lang.includes('vi') && !v.lang.includes('VN')
    );

    return [...vietnameseVoices, ...otherVoices];
  }

  // Kiểm tra hỗ trợ Web Speech API
  isSupported() {
    return 'speechSynthesis' in window;
  }

  // Dừng phát audio
  stopAudio() {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
      this.isPlaying = false;
      this.isPaused = false;
      this.currentUtterance = null;
    }
  }

  // Tạm dừng phát audio
  pauseAudio() {
    if (this.speechSynthesis && this.isPlaying) {
      this.speechSynthesis.pause();
      this.isPaused = true;
    }
  }

  // Tiếp tục phát audio
  resumeAudio() {
    if (this.speechSynthesis && this.isPaused) {
      this.speechSynthesis.resume();
      this.isPaused = false;
    }
  }

  // Kiểm tra trạng thái phát
  getPlayingStatus() {
    return this.isPlaying;
  }

  // Thiết lập giọng nói
  setVoice(voiceName) {
    const voice = this.voices.find(v => v.name === voiceName);
    if (voice) {
      this.selectedVoice = voice;
      console.log('Voice changed to:', voice.name);
    }
  }

  // Thiết lập tốc độ (0.1 - 10)
  setRate(rate) {
    this.rate = Math.max(0.1, Math.min(10, rate));
  }

  // Thiết lập cao độ (0 - 2)
  setPitch(pitch) {
    this.pitch = Math.max(0, Math.min(2, pitch));
  }

  // Thiết lập âm lượng (0 - 1)
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
  }

  // Hàm chính để text-to-speech
  async textToSpeech(text, voiceName = null, speed = 1.0) {
    return new Promise((resolve, reject) => {
      try {
        if (!this.isSupported()) {
          throw new Error('Trình duyệt không hỗ trợ Web Speech API');
        }

        if (!text || text.trim() === '') {
          throw new Error('Vui lòng nhập văn bản cần đọc');
        }

        // Dừng phát âm hiện tại nếu có
        this.stopAudio();

        // Tạo utterance mới
        this.currentUtterance = new SpeechSynthesisUtterance(text);

        // Thiết lập giọng nói
        if (voiceName) {
          const voice = this.voices.find(v => v.name === voiceName);
          if (voice) {
            this.currentUtterance.voice = voice;
          }
        } else if (this.selectedVoice) {
          this.currentUtterance.voice = this.selectedVoice;
        }

        // Thiết lập các thuộc tính
         this.currentUtterance.rate = speed;
         this.currentUtterance.pitch = this.pitch;
         this.currentUtterance.volume = this.volume;
         
         // Thiết lập ngôn ngữ - ưu tiên tiếng Việt, fallback sang English
         if (this.currentUtterance.voice?.lang?.includes('vi') || this.currentUtterance.voice?.lang?.includes('VN')) {
           this.currentUtterance.lang = this.currentUtterance.voice.lang;
         } else {
           // Nếu không có giọng tiếng Việt, vẫn set lang là vi-VN để browser cố gắng đọc
           this.currentUtterance.lang = 'vi-VN';
         }

        // Xử lý sự kiện
        this.currentUtterance.onstart = () => {
          this.isPlaying = true;
          this.isPaused = false;
          console.log('Speech started');
        };

        this.currentUtterance.onend = () => {
          this.isPlaying = false;
          this.isPaused = false;
          this.currentUtterance = null;
          console.log('Speech ended');
          resolve({
            success: true,
            message: 'Text-to-speech hoàn thành'
          });
        };

        this.currentUtterance.onerror = (event) => {
          this.isPlaying = false;
          this.isPaused = false;
          this.currentUtterance = null;
          console.error('Speech error:', event.error);
          reject(new Error(`Lỗi phát âm: ${event.error}`));
        };

        this.currentUtterance.onpause = () => {
          this.isPaused = true;
          console.log('Speech paused');
        };

        this.currentUtterance.onresume = () => {
          this.isPaused = false;
          console.log('Speech resumed');
        };

        // Bắt đầu phát âm
        console.log('Starting speech with voice:', this.currentUtterance.voice?.name || 'default');
        console.log('Text:', text);
        console.log('Rate:', speed);
        
        this.speechSynthesis.speak(this.currentUtterance);

      } catch (error) {
        console.error('Error in text-to-speech:', error);
        reject(error);
      }
    });
  }

  // Phương thức tương thích với code cũ
  async speak(text, options = {}) {
    const {
      voice = null,
      rate = 1.0,
      pitch = 1.0,
      volume = 1.0
    } = options;

    // Thiết lập các thuộc tính
    this.setRate(rate);
    this.setPitch(pitch);
    this.setVolume(volume);

    if (voice) {
      this.setVoice(voice);
    }

    return this.textToSpeech(text, voice, rate);
  }

  // Lấy thông tin trạng thái
  getStatus() {
    return {
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      isSupported: this.isSupported(),
      selectedVoice: this.selectedVoice?.name || null,
      rate: this.rate,
      pitch: this.pitch,
      volume: this.volume,
      voicesCount: this.voices.length
    };
  }

  // Khởi tạo service
  async initialize() {
    try {
      if (!this.isSupported()) {
        throw new Error('Trình duyệt không hỗ trợ Web Speech API');
      }

      await this.loadVoices();
      console.log('Web Speech API TTS service initialized successfully');
      return true;
    } catch (error) {
      console.error('TTS initialization failed:', error);
      throw error;
    }
  }
}

export default TextToSpeechService;