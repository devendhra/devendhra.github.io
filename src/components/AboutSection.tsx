import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const stats = [
    { label: 'CGPA', value: '9.13', sublabel: 'Up to 4th Semester' },
    { label: 'Year', value: '3rd', sublabel: 'Graduating 2027' },
    { label: 'Projects', value: '10+', sublabel: 'Completed' },
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden" ref={ref}>
      {/* Parallax Background Accent */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"
        style={{ y: backgroundY }}
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Label */}
            <motion.span
              className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.span>

            {/* Heading */}
            <h2 className="text-heading font-serif mb-8">
              Building the future,{' '}
              <span className="text-gradient-gold">one line at a time.</span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm Devendhra, a highly motivated full-stack developer with an insatiable curiosity for 
                learning new technologies and building meaningful web experiences. My journey in tech 
                is driven by a passion for creating elegant solutions to complex problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I enjoy presenting ideas, crafting intuitive interfaces, and continuously pushing 
                my limits to grow as an engineer. My goal is to join a reputed company where 
                innovation and impact are at the forefront of everything we do.
              </motion.p>
            </div>

            {/* Academic Info Card */}
            <motion.div
              className="mt-10 glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Computer Science and Engineering
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>S.A. Engineering College</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Grid with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y }}
          >
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-2xl p-8 glow-effect hoverable"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-2">
                        {stat.label}
                      </p>
                      <p className="text-5xl font-serif font-bold text-gradient-gold">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {stat.sublabel}
                      </p>
                    </div>
                    <div className="w-24 h-24 rounded-full border border-border/50 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-primary/10"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
