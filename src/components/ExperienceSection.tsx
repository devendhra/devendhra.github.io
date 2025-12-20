import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Eye, X } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Full-Stack Developer Intern',
    company: 'Webzenith Solutions',
    duration: '5 months completed (6-month internship)',
    location: 'Remote',
    current: true,
    description: 'Building a real-world web application with production-level workflows.',
    responsibilities: [
      'Developing responsive frontend interfaces using React and Tailwind CSS',
      'Integrating backend services with Supabase for real-time data management',
      'Implementing secure authentication and user management systems',
      'Following production-level workflows and best practices',
    ],
  },
];

const achievements = [
  {
    id: 1,
    title: 'NPTEL Python for Data Science',
    score: '66%',
    icon: '🏅',
    description: 'Certified in Python programming for data science applications',
    certificateUrl: '/certificates/Nptel_Python.pdf',
  },
  {
    id: 2,
    title: 'School First (12th Grade)',
    score: '88%',
    icon: '🏆',
    description: 'Secured first position in the school with outstanding academic performance',
    certificateUrl: '/certificates/12th_Marksheet.pdf',
  },
  {
    id: 3,
    title: 'Typewriting High Speed',
    score: 'Second Class ',
    icon: '⌨️',
    description: 'Achieved exceptional speed and accuracy in typewriting',
    certificateUrl: '/certificates/typewriting.pdf',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [viewingCertificate, setViewingCertificate] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const lineY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleViewCertificate = (url: string) => {
    setViewingCertificate(url);
    // Also open in new tab for download
    window.open(url, '_blank');
  };

  return (
    <section id="experience" className="section-spacing relative overflow-hidden" ref={ref}>
      
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
        style={{ y: lineY }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Journey
          </motion.span>
          <h2 className="text-heading font-serif">
            Experience & <span className="text-gradient-gold">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Timeline */}
          <div>
            <motion.h3
              className="text-xl font-serif font-semibold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Briefcase className="w-5 h-5 text-primary" />
              Work Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline Line */}
              <motion.div 
                className="absolute left-4 top-0 bottom-0 w-px bg-border"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ originY: 0 }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative pl-12 pb-8 last:pb-0"
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.2 }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className={`absolute left-0 top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      exp.current 
                        ? 'border-primary bg-primary/20' 
                        : 'border-border bg-background'
                    }`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                  >
                    {exp.current && (
                      <motion.div
                        className="w-3 h-3 rounded-full bg-primary"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  <div className="glass-card rounded-2xl p-6 glow-effect">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-lg font-serif font-semibold text-foreground">
                          {exp.role}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              className="text-xl font-serif font-semibold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl">🏆</span>
              Achievements
            </motion.h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="glass-card rounded-2xl p-6 glow-effect hoverable"
                  initial={{ opacity: 0, x: 40, rotateY: -10 }}
                  animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.3 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-2xl flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-serif font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-primary font-medium text-sm mb-2">
                        {achievement.score}
                      </p>
                      <p className="text-muted-foreground text-sm mb-3">
                        {achievement.description}
                      </p>
                      <motion.button
                        onClick={() => handleViewCertificate(achievement.certificateUrl)}
                        className="flex items-center gap-2 px-4 py-2 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors hoverable"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-3 h-3" />
                        View Certificate
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {viewingCertificate && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setViewingCertificate(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl h-[80vh] bg-card rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setViewingCertificate(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors hoverable"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={viewingCertificate}
              className="w-full h-full"
              title="Certificate"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ExperienceSection;
