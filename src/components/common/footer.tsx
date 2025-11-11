import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      // Animação
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className="relative py-8 backdrop-blur-md"
    >
      <div className="relative flex flex-col items-center justify-center text-center space-y-3">
        {/* Texto  */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white/70 text-sm md:text-base tracking-wide"
        >
          © {new Date().getFullYear()} danilo1opes — Interestellar Animation 🪐
        </motion.p>

        {/* Link GitHub */}
        <motion.a
          href="https://github.com/danilo1opes"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 text-white/60 hover:text-snow transition-colors duration-300"
        >
          <FaGithub size={20} />
          <span className="text-sm font-light tracking-widest">
            github.com/danilo1opes
          </span>
        </motion.a>
      </div>
    </motion.footer>
  );
}
