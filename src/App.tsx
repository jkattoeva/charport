import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Send, MessageCircle, ArrowUpRight, Zap } from 'lucide-react';

// Анимационные пресеты
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

interface ServiceProps {
  title: string;
  price: string;
  desc: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ title, price, desc, tags }) => (
  <motion.div 
    variants={fadeInUp}
    whileHover={{ scale: 0.98 }}
    className="bg-[#111111] border border-white/5 p-7 rounded-[2.5rem] mb-5 hover:border-[#D4A5FF]/40 transition-colors group relative shadow-2xl"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-black uppercase tracking-tighter leading-[0.9] w-2/3 group-hover:text-[#D4A5FF] transition-colors italic">
        {title}
      </h3>
      <span className="text-[#D4A5FF] font-mono text-sm font-bold italic">{price}</span>
    </div>
    <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em] mb-6 leading-relaxed font-medium">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-[9px] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-400 font-bold tracking-widest uppercase">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter'] antialiased flex items-center justify-center overflow-x-hidden relative">
      
      {/* Эффект шума из референса */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.06] z-50 contrast-125 mix-blend-screen" 
           style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>

      <motion.div 
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="max-w-[460px] w-full px-6 py-12 relative z-10 flex flex-col justify-center min-h-screen"
      >
        
        {/* Header - Анимированный */}
        <motion.header variants={fadeInUp} className="mb-16">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ rotate: [45, 225, 45] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-[#D4A5FF] flex items-center justify-center"
              >
                <span className="text-[10px] font-black -rotate-45 text-[#D4A5FF]">BT</span>
              </motion.div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Brocelle Tech</span>
            </div>
            <motion.div 
              whileHover={{ rotate: 45 }}
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <ArrowUpRight size={18} className="text-gray-500" />
            </motion.div>
          </div>

          <h1 className="text-[54px] leading-[0.85] font-black uppercase tracking-tighter mb-8 italic">
            Создай <br />
            <motion.span 
              animate={{ color: ["#D4A5FF", "#FFFFFF", "#D4A5FF"] }}
              transition={{ duration: 4, repeat: Infinity }}
            >Свой Бот</motion.span> <br />
            для продаж
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#D4A5FF]/30"></div>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">
              Insta • TG • WhatsApp
            </p>
          </div>
        </motion.header>

        {/* Секция услуг */}
        <motion.section className="mb-12">
          <ServiceCard 
            title="Insta Direct"
            price="от $80"
            desc="Автоответчик, который квалифицирует лидов и продает в личке."
            tags={['Direct', 'Auto-sales']}
          />
          <ServiceCard 
            title="TG Ecosystem"
            price="от $150"
            desc="Сложные Web-Apps внутри Telegram и автоматизация платежей."
            tags={['WebApp', 'Payments']}
          />
        </motion.section>

        {/* Footer */}
        <motion.footer variants={fadeInUp} className="space-y-10">
          <motion.a 
            href="https://t.me/your_nick"
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-between w-full bg-[#D4A5FF] text-black font-black uppercase py-7 px-10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(212,165,255,0.1)] transition-all hover:bg-white"
          >
            <span className="text-[11px] tracking-[0.3em]">Начать работу</span>
            <Send size={18} />
          </motion.a>

          <div className="flex justify-center gap-10 opacity-30 pt-4">
            <Instagram size={22} className="hover:text-[#D4A5FF] transition-colors" />
            <MessageCircle size={22} className="hover:text-[#D4A5FF] transition-colors" />
            <Zap size={22} className="hover:text-[#D4A5FF] transition-colors" />
          </div>
        </motion.footer>

      </motion.div>
    </div>
  );
}