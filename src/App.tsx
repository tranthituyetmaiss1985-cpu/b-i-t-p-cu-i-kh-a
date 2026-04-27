import { 
  BookOpen, 
  Music, 
  Video, 
  Gamepad2, 
  ClipboardList, 
  Flower2, 
  Home,
  ChevronRight,
  Play,
  CheckCircle2,
  Trophy
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Section = 'home' | 'plan' | 'lecture' | 'video' | 'exercise' | 'game';

// --- Sub-components ---

const HomeView = ({ onNavigate }: { onNavigate: (s: Section) => void }) => (
  <div className="relative z-10 px-4 md:px-0">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-8">
        <p className="label-caps">Chương trình Âm nhạc Tiểu học</p>
        <h1 className="text-6xl md:text-8xl leading-tight font-light text-artistic-text">
          Giai Điệu <br/>
          <span className="italic font-serif text-artistic-accent">Mùa Xuân</span>
        </h1>
        <p className="max-w-md text-xl leading-relaxed text-artistic-secondary-text font-light italic">
          Một bộ sưu tập tài liệu số toàn diện giúp học sinh khám phá vẻ đẹp của âm nhạc và thiên nhiên qua những bài hát truyền thống.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            onClick={() => onNavigate('lecture')}
            className="artistic-btn-primary"
          >
            Bắt đầu bài giảng
          </button>
          <button 
            onClick={() => onNavigate('plan')}
            className="artistic-btn-secondary"
          >
            Kế hoạch bài dạy
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { id: 'lecture', title: 'Bài giảng', label: '18 Trang tương tác', icon: Music, bg: 'bg-white/60' },
          { id: 'video', title: 'Video Nhạc', label: 'Chất lượng 4K Ultra', icon: Video, bg: 'bg-artistic-soft-green/60' },
          { id: 'game', title: 'Trò chơi', label: 'Giải mã âm thanh', icon: Gamepad2, bg: 'bg-artistic-accent/10' },
          { id: 'exercise', title: 'Bài tập', label: 'Cảm thụ âm nhạc', icon: ClipboardList, bg: 'bg-white/60' },
        ].map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ y: -10, scale: 1.02 }}
            onClick={() => onNavigate(item.id as Section)}
            className={`artistic-card p-8 text-left flex flex-col justify-between h-64 ${item.bg}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${item.id === 'game' ? 'bg-artistic-accent text-white' : 'bg-white shadow-sm text-artistic-accent'}`}>
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-1 text-artistic-text">{item.title}</h3>
              <p className="label-caps !text-[8px] opacity-70">{item.label}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  </div>
);

const LessonPlan = () => (
  <div className="max-w-4xl mx-auto artistic-card overflow-hidden">
    <div className="bg-artistic-text p-12 text-artistic-bg">
      <h2 className="text-4xl font-light italic font-serif mb-2">Kế Hoạch Bài Dạy</h2>
      <p className="label-caps text-artistic-accent/80">Môn: Âm nhạc • Thời lượng: 2 Tiết</p>
    </div>
    <div className="p-12 space-y-12 bg-white/40">
      <section>
        <h3 className="label-caps text-artistic-accent mb-6 flex items-center gap-3">
          <CheckCircle2 size={18} /> I. Mục tiêu bài học
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-artistic-text italic">1. Kiến thức</h4>
            <ul className="space-y-3 text-artistic-secondary-text text-sm">
              <li className="flex gap-2"><span>—</span> Nhận biết giai điệu các bài hát xuân phổ biến</li>
              <li className="flex gap-2"><span>—</span> Hiểu ý nghĩa các ca từ về ngày Tết</li>
              <li className="flex gap-2"><span>—</span> Biết về các nhạc cụ thường dùng</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-artistic-text italic">2. Kỹ năng</h4>
            <ul className="space-y-3 text-artistic-secondary-text text-sm">
              <li className="flex gap-2"><span>—</span> Hát đúng giai điệu và lời ca</li>
              <li className="flex gap-2"><span>—</span> Vận động phụ họa theo nhạc</li>
              <li className="flex gap-2"><span>—</span> Làm việc nhóm trong các trò chơi</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="label-caps text-artistic-accent mb-6 flex items-center gap-3">
          <ChevronRight size={18} /> II. Tiến trình dạy học
        </h3>
        <div className="space-y-6">
          {[
            { step: 'Khởi động', act: 'Trò chơi "Nghe giai điệu đoán tên bài hát".', time: '5p' },
            { step: 'Khám phá', act: 'Tìm hiểu về nhạc xuân qua bài giảng số.', time: '15p' },
            { step: 'Luyện tập', act: 'Tập bài hát "Ngày Tết Quê Em".', time: '15p' },
            { step: 'Vận dụng', act: 'Thi biểu diễn nhóm.', time: '10p' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 p-6 border-b border-artistic-text/5 last:border-0 items-center hover:bg-white/60 transition-colors rounded-2xl">
              <div className="text-4xl font-serif italic text-artistic-accent opacity-30">{String(idx + 1).padStart(2, '0')}</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-artistic-text">{item.step}</span>
                  <span className="label-caps !text-[9px] text-artistic-accent">{item.time}</span>
                </div>
                <p className="text-sm text-artistic-secondary-text mt-1">{item.act}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

const Lecture = () => {
  const [slide, setSlide] = useState(0);
  const slides = [
    { title: 'Tín hiệu của Mùa Xuân', content: 'Hoa mai vàng, hoa đào thắm và tiếng chim hót líu lo là những hình ảnh quen thuộc báo hiệu xuân về.', img: 'https://images.unsplash.com/photo-1549405626-d62df67468ba?q=80&w=1000' },
    { title: 'Giai điệu Mùa Xuân', content: 'Âm nhạc mùa xuân thường có tiết tấu nhanh, vui tươi, sử dụng nhiều nhạc cụ dân tộc như trống, phách.', img: 'https://images.unsplash.com/photo-1520626337972-ebf863448db6?q=80&w=1000' },
    { title: 'Nội dung bài hát', content: 'Thường kể về sum họp gia đình, lời chúc Tết, phong cảnh ngày xuân và hy vọng vào năm mới.', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000' },
  ];

  return (
    <div className="max-w-4xl mx-auto artistic-card overflow-hidden">
      <div className="relative h-80 md:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.img 
            key={slide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            src={slides[slide].img} 
            className="w-full h-full object-cover"
            alt={slides[slide].title}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-t from-artistic-text/80 to-transparent flex items-end p-12">
          <div className="space-y-4">
            <p className="label-caps text-white/60">Slide {slide + 1}</p>
            <h2 className="text-5xl font-serif italic text-white">{slides[slide].title}</h2>
          </div>
        </div>
      </div>
      <div className="p-12 space-y-8 bg-white">
        <p className="text-2xl text-artistic-text font-light leading-relaxed italic">
          "{slides[slide].content}"
        </p>
        <div className="flex justify-between items-center pt-8 border-t border-artistic-text/5">
          <button 
            disabled={slide === 0}
            onClick={() => setSlide(s => s - 1)}
            className="label-caps px-4 py-2 hover:text-artistic-accent disabled:opacity-30 transition-colors"
          >
            Quay lại
          </button>
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <div key={i} className={`h-1 transition-all rounded-full ${i === slide ? 'w-8 bg-artistic-accent' : 'w-2 bg-artistic-text/10'}`} />
            ))}
          </div>
          <button 
            disabled={slide === slides.length - 1}
            onClick={() => setSlide(s => s + 1)}
            className="label-caps px-4 py-2 hover:text-artistic-accent disabled:opacity-30 transition-colors"
          >
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

const VideoLibrary = () => {
  const songs = [
    { id: '1', title: 'Ngày Tết Quê Em', artist: 'Nhiều ca sĩ', duration: '3:45', thumbnail: 'https://img.youtube.com/vi/a_Nf_9qH1Yk/mqdefault.jpg' },
    { id: '2', title: 'Sắp Đến Tết Rồi', artist: 'Thiếu nhi', duration: '2:30', thumbnail: 'https://img.youtube.com/vi/S7-q5kO9L4U/mqdefault.jpg' },
    { id: '3', title: 'Liên Khúc Xuân', artist: 'Dân ca', duration: '4:15', thumbnail: 'https://img.youtube.com/vi/LpI7O4Gg0nQ/mqdefault.jpg' },
  ];

  return (
    <div className="space-y-12">
      <div className="artistic-card bg-artistic-soft-green/40 p-12 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div className="flex-1 space-y-4">
          <p className="label-caps">Bộ sưu tập</p>
          <h2 className="text-4xl font-serif italic text-artistic-text">Thư Viện Video Xuân</h2>
          <p className="text-artistic-secondary-text italic max-w-md">Những giai điệu bất hủ đi cùng năm tháng, giúp các em cảm nhận không khí Tết rõ nét hơn.</p>
        </div>
        <div className="flex-none">
          <button className="artistic-btn-primary flex items-center gap-2">
            <Play size={14} fill="currentColor" /> Phát tất cả
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {songs.map(song => (
          <div key={song.id} className="group cursor-pointer">
            <div className="artistic-card overflow-hidden !rounded-[30px] aspect-video relative">
              <img src={song.thumbnail} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
              <div className="absolute inset-0 bg-artistic-text/20 group-hover:bg-artistic-text/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-artistic-accent shadow-xl scale-75 group-hover:scale-100 transition-all duration-500">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <span className="absolute bottom-4 right-4 label-caps !text-white !bg-artistic-text/80 px-2 py-1 rounded">
                {song.duration}
              </span>
            </div>
            <div className="mt-4 px-2">
              <h3 className="text-xl font-medium text-artistic-text">{song.title}</h3>
              <p className="label-caps !text-[9px] mt-1 opacity-60">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Quiz = () => {
  const questions = [
    { q: 'Bài hát nào có câu "Mai vàng đào tươi bưng nở"?', options: ['Ngày Tết Quê Em', 'Liên khúc Xuân', 'Tết Nguyên Đán'], correct: 0 },
    { q: 'Âm thanh nào thường xuyên xuất hiện trong nhạc Tết?', options: ['Tiếng mưa rơi', 'Tiếng pháo/Trống hội', 'Tiếng gió thổi'], correct: 1 },
    { q: 'Màu sắc chủ đạo trong nhạc Xuân là?', options: ['Xanh dương', 'Vàng và Đỏ', 'Đen và Trắng'], correct: 1 },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (idx: number) => {
    if (idx === questions[current].correct) setScore(s => s + 1);
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="max-w-md mx-auto artistic-card p-16 text-center space-y-8 bg-white">
        <div className="inline-block p-6 bg-artistic-soft-green rounded-full text-artistic-text">
          <Trophy size={64} />
        </div>
        <h2 className="text-4xl font-serif italic text-artistic-text">Kết quả</h2>
        <p className="text-lg text-artistic-secondary-text italic leading-relaxed">Bạn đã trả lời đúng {score}/{questions.length} câu hỏi về chủ đề Mùa Xuân.</p>
        <button 
          onClick={() => { setCurrent(0); setScore(0); setShowResult(false); }}
          className="artistic-btn-primary w-full"
        >
          Thử lại lần nữa
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <p className="label-caps">Bài tập củng cố</p>
        <div className="flex justify-center gap-2">
          {questions.map((_, i) => (
            <div key={i} className={`h-1 transition-all rounded-full ${i === current ? 'w-12 bg-artistic-accent' : 'w-4 bg-artistic-text/10'}`} />
          ))}
        </div>
      </div>
      
      <div className="artistic-card p-12 bg-white space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif italic text-artistic-text text-center leading-snug">"{questions[current].q}"</h2>
        <div className="grid gap-4">
          {questions[current].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className="p-8 text-center border border-artistic-text/10 rounded-[30px] hover:bg-artistic-bg hover:border-artistic-accent transition-all text-xl font-light italic text-artistic-secondary-text hover:text-artistic-text"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  const [isWon, setIsWon] = useState(false);
  const words = ["Ngày", "Tết", "Quê", "Em"];
  const [shuffled, setShuffled] = useState([...words].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState<string[]>([]);

  const handlePick = (word: string) => {
    const newPlaced = [...placed, word];
    setPlaced(newPlaced);
    setShuffled(shuffled.filter(w => w !== word));
    
    if (newPlaced.length === words.length) {
      if (newPlaced.join(' ') === words.join(' ')) {
        setIsWon(true);
      } else {
        setTimeout(() => {
          setShuffled([...words].sort(() => Math.random() - 0.5));
          setPlaced([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto artistic-card p-16 text-center space-y-12 bg-white/40">
      <div className="space-y-4">
        <p className="label-caps">Mini Game</p>
        <h2 className="text-4xl md:text-5xl font-serif italic text-artistic-text">Xếp Chữ Ngày Xuân</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 min-h-[100px] p-10 bg-artistic-bg/50 rounded-[40px] border border-dashed border-artistic-text/20">
        {placed.map((w, i) => (
          <motion.div 
            layoutId={w}
            key={i} 
            className={`px-8 py-4 rounded-2xl font-serif italic text-2xl shadow-sm ${isWon ? 'bg-artistic-accent text-white' : 'bg-white text-artistic-text'}`}
          >
            {w}
          </motion.div>
        ))}
      </div>

      {!isWon && (
        <div className="flex flex-wrap justify-center gap-4">
          {shuffled.map((w, i) => (
            <motion.button
              layoutId={w}
              key={i}
              onClick={() => handlePick(w)}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="px-8 py-4 bg-white artistic-card !rounded-2xl font-serif italic text-2xl text-artistic-text border-artistic-accent/20 hover:border-artistic-accent transition-colors"
            >
              {w}
            </motion.button>
          ))}
        </div>
      )}

      {isWon && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <p className="text-2xl italic text-artistic-accent font-serif">🎉 Tuyệt vời! Bạn đã ghép đúng tên bài hát rồi!</p>
          <button 
            onClick={() => { setIsWon(false); setPlaced([]); setShuffled([...words].sort(() => Math.random() - 0.5)); }}
            className="label-caps text-artistic-text underline underline-offset-8"
          >
            Thử lại lần nữa
          </button>
        </motion.div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Section>('home');

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col md:flex-row">
      {/* Background Accents */}
      <div className="floral-accent-1"></div>
      <div className="floral-accent-2"></div>

      {/* Sidebar / Navigation */}
      <nav className="w-full md:w-80 relative z-50 p-8 md:h-screen sticky top-0 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-artistic-text/5 bg-artistic-bg/80 backdrop-blur-md">
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-4 mb-20 cursor-pointer group"
        >
          <div className="w-12 h-12 bg-artistic-accent rounded-full flex items-center justify-center text-white italic text-2xl font-serif group-hover:scale-110 transition-transform">
            S
          </div>
          <div>
            <span className="block label-caps !text-artistic-text">Mùa Xuân</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-artistic-secondary-text font-bold italic">Education Portal</span>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-col justify-center gap-2 w-full">
          {[
            { id: 'home', label: 'Tổng quan', icon: Home },
            { id: 'plan', label: 'Kế hoạch dạy', icon: BookOpen },
            { id: 'lecture', label: 'Bài giảng', icon: Music },
            { id: 'video', label: 'Video Nhạc', icon: Video },
            { id: 'exercise', label: 'Bài tập', icon: ClipboardList },
            { id: 'game', label: 'Trò chơi', icon: Gamepad2 },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Section)}
              className={`flex items-center gap-4 px-6 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                activeTab === item.id 
                  ? 'text-artistic-accent border-b border-artistic-accent pb-2' 
                  : 'text-artistic-secondary-text opacity-50 hover:opacity-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-12 border-t border-artistic-text/10 hidden md:block w-full">
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <p className="label-caps !text-[8px] mb-1">Dung lượng</p>
                <p className="font-sans font-semibold text-xs">450 MB</p>
              </div>
              <div className="text-right">
                <p className="label-caps !text-[8px] mb-1">Cập nhật</p>
                <p className="font-sans font-semibold text-xs">03, 2024</p>
              </div>
            </div>
            <p className="font-serif text-[10px] italic text-artistic-accent font-bold text-center tracking-wider">
              Khơi nguồn cảm hứng âm nhạc
            </p>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-20 relative z-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {activeTab === 'home' && <HomeView onNavigate={setActiveTab} />}
              {activeTab === 'plan' && <LessonPlan />}
              {activeTab === 'lecture' && <Lecture />}
              {activeTab === 'video' && <VideoLibrary />}
              {activeTab === 'exercise' && <Quiz />}
              {activeTab === 'game' && <Game />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
