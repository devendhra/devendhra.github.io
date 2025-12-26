import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileDown ,MapPin} from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    // This will both download and open the resume
    // For now using a placeholder - user should replace with actual resume URL
    const resumeUrl = '/resume.pdf';
    
    // Open in new tab
    window.open(resumeUrl, '_blank');
    
    // Also trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Devendhra_A_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const typingTexts = [
    'Full-Stack Developer',
    'React Enthusiast',
    'Problem Solver',
    'UI/UX Designer',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-64 md:w-[500px] h-64 md:h-[500px] rounded-full blur-[100px] md:blur-[150px]"
          style={{ background: 'linear-gradient(135deg, hsl(190 100% 50% / 0.3), hsl(280 100% 60% / 0.2))' }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 md:w-[500px] h-64 md:h-[500px] rounded-full blur-[100px] md:blur-[150px]"
          style={{ background: 'linear-gradient(135deg, hsl(320 100% 60% / 0.3), hsl(190 100% 50% / 0.2))' }}
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[600px] h-72 md:h-[600px] rounded-full blur-[150px] md:blur-[200px]"
          style={{ background: 'radial-gradient(circle, hsl(280 100% 60% / 0.15), transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:100px_100px] opacity-20"
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? 'hsl(190 100% 50%)' : 'hsl(320 100% 60%)',
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 text-center">
        {/* Typing Animation Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 text-sm font-medium tracking-widest uppercase text-primary border border-primary/30 rounded-full">
            <TypingAnimation texts={typingTexts} />
          </span>
        </motion.div>

        {/* Name - Responsive with Big Animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-4 md:mb-6 leading-tight overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span 
            className="inline-block text-foreground mr-2 md:mr-4"
            initial={{ y: 100, rotateX: -90 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Devendhra
          </motion.span>
          <motion.span 
            className="inline-block text-gradient-gold"
            initial={{ y: 100, rotateX: -90, scale: 0.5 }}
            animate={{ y: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            A
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A curious full-stack engineer crafting{' '}
          <span className="text-primary">elegant digital experiences</span>{' '}
          with precision, passion, and performance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury-filled hoverable"
          >
            View Projects
          </button>
          <button
            onClick={handleResumeClick}
            className="btn-luxury hoverable flex items-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            View Resume
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury hoverable"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Github, href: 'https://github.com/devendhra', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/devendhra-a-2946182a4/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:devendhraalthur@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hoverable"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors hoverable"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 1 },
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
