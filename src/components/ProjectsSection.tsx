import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

// import projectMutualFund from 'public/';
// import projectPortfolioBuilder from '@assets';
import zapify from "../assets/zapify.png";
import salesforce from "../assets/salesforce.png"
import todo from "../assets/todo.png";
import typing from "../assets/typing.png";
import todo2 from "../assets/personaltodo.png";
import weather from "../assets/weather.png";
import portfolio from "../assets/weather.png";

const projects = [
  
    {
    id: 1,
    name: 'Zapify – Luxury Electronics E-Commerce Platform',
    description:
      'A modern e-commerce platform for luxury electronic gadgets, offering a premium shopping experience with smooth interactions, elegant UI, and performance-focused design.',
    techStack: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
    ],
    problem:
      'Most electronics e-commerce platforms feel generic and cluttered, failing to convey a premium or luxury experience. Zapify solves this by delivering a visually rich, smooth, and intuitive interface tailored specifically for high-end electronic products.',
    live: 'https://zapifyweb.netlify.app/',
    github: 'https://github.com/devendhra/zapify.git', 
    color: 'from-purple-500/30 to-indigo-500/30',
    image: zapify,
  },

{
  id: 2,
  name: 'Salesforce Landing Page Clone',
  description:
    'A responsive clone of Salesforce’s official landing page, built with a modern UI approach, smooth hover effects, and mobile-first layout.',
  techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
  problem:
    'Learning real-world UI implementation can be difficult without replicating production-grade designs. This project solves that by recreating Salesforce’s modern landing page with responsive and interactive behavior.',
  live: 'https://salesforcecloneapp.netlify.app/',
  github: 'https://github.com/devendhra/Salesforceclone-html-tailwindcss.git',
  color: 'from-blue-500/30 to-indigo-500/30',
  image: salesforce,
},
{
  id: 3,
  name: 'AI-Powered To-Do App',
  description:
    'A clean and intuitive to-do application with task management features and AI integration for enhanced productivity.',
  techStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'AI API'],
  problem:
    'Traditional to-do apps lack intelligence and engagement. This project enhances task management with a simple UI and AI-assisted features for better productivity.',
  live: 'https://devendhrastodoapp.netlify.app/',
  github: 'https://github.com/devendhra/to-do-app.git',
  color: 'from-green-500/30 to-emerald-500/30',
  image: todo,
},
{
  id: 4,
  name: 'Typing Speed Test Application',
  description:
    'A functional typing speed test app featuring real-time WPM calculation, countdown timer, and dynamically generated words.',
  techStack: ['HTML', 'Tailwind CSS', 'JavaScript'],
  problem:
    'Users lack simple tools to measure and improve typing speed. This app provides instant feedback with real-time performance metrics.',
  live: 'https://10typingtest.netlify.app/',
  github: 'https://github.com/devendhra/Typingtest.git',
  color: 'from-slate-500/30 to-gray-500/30',
  image: typing
},

{
  id: 5,
  name: 'Personal Portfolio Website',
  description:
    'A dynamic and responsive portfolio website showcasing projects, skills, and experience with smooth animations and modern design.',
  techStack: ['React.js', 'Next.js', 'Tailwind CSS'],
  problem:
    'Developers need a strong online presence to showcase their work. This portfolio provides a professional and visually engaging platform for personal branding.',
  live: 'https://680a661afebd6f11a5db1fde--devendhraportfolio.netlify.app/',
  github: 'https://github.com/devendhra/portfolio-1',
  color: 'from-violet-500/30 to-purple-500/30',
  image: portfolio
},

{
  id: 6,
  name: "Skywatcher’s Companion",
  description:
    'A real-time weather forecasting application providing hourly updates, location-based tracking, and detailed weather metrics.',
  techStack: ['React.js', 'Tailwind CSS', 'Rapid API'],
  problem:
    'Accessing accurate and real-time weather data is essential for daily planning. This app delivers fast, location-aware weather insights with a clean UI.',
  live: 'https://skywatcherscompanion.netlify.app/',
  github: 'https://github.com/devendhra/Weather-App',
  color: 'from-sky-500/30 to-indigo-500/30',
  image: weather
},

{
  id: 7,
  name: 'Task Manager Application',
  description:
    'An advanced task management application featuring priority levels, task categories, and local storage persistence.',
  techStack: ['React.js', 'Context API', 'CSS-in-JS'],
  problem:
    'Basic todo apps fail to scale for complex task organization. This project solves it by adding prioritization, categorization, and persistent state management.',
  live: 'https://taskmanagingweb.netlify.app/',
  github: 'https://github.com/devendhra/TaskManager',
  color: 'from-orange-500/30 to-amber-500/30',
  image: todo2
},


];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.article
      ref={ref}
      className="group relative h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="glass-card rounded-3xl overflow-hidden glow-effect hoverable relative h-full flex flex-col"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* 3D Shine Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at ${isHovered ? '50%' : '50%'} ${isHovered ? '50%' : '50%'}, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0,
          }}
          animate={{
            background: isHovered
              ? `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255,255,255,0.2) 0%, transparent 50%)`
              : `radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, transparent 50%)`,
          }}
        />

        {/* Project Visual */}
        <div
          className={`relative h-48 md:h-56 overflow-hidden flex-shrink-0`}
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Project Image */}
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} mix-blend-overlay`} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Project Number */}
          <div
            className="absolute top-0 right-3 text-gradient-gold text-5xl font-serif font-bold text-foreground/20"
            style={{ transform: "translateZ(50px)" }}
          >
            0{project.id}
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translateZ(60px)" }}
          >
            <div className="flex gap-4">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium text-sm hoverable"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-full font-medium text-sm hoverable"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6 md:p-8 flex-1 flex flex-col" style={{ transform: "translateZ(10px)" }}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 3D Edge Highlight */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            boxShadow: isHovered
              ? 'inset 0 0 30px rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0,0,0,0.4)'
              : 'none',
          }}
        />
      </motion.div>
    </motion.article>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="projects" className="section-spacing overflow-hidden relative" ref={ref}>
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-heading font-serif mb-6">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A selection of projects that showcase my expertise in building modern,
            scalable web applications with elegant user interfaces.
          </p>
        </motion.div>

        {/* Projects Grid - Equal height cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Parallax decorative element */}
        <motion.div
          className="absolute -right-20 top-1/2 w-40 h-40 border border-primary/10 rounded-full hidden lg:block"
          style={{ y }}
        />

        {/* View More CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://github.com/devendhra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-luxury hoverable"
          >
            <Github className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;