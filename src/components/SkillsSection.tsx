import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Lucid-React', level: 80 },
      { name: 'Shadcn-ui', level: 80 },
      { name: 'Framer-motion', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Supabase', level: 85 },
      { name: 'MongoDB', level: 75 },
      { name: 'Postgres', level: 80 },
      { name: 'drizzle', level: 80 },
      { name: 'Tanstack-Query', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Vercel', level: 85 },
      { name: 'Netlify', level: 80 },
      { name: 'Figma', level: 80 },
      { name: 'Windsurf', level: 95 },
      { name: 'docker', level: 95 },
    ],
  },
]; const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => {
  return (
    <div className="group">
      {/* Label */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">
          {name}
        </span>
        <span className="text-xs text-muted-foreground">
          {level}%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-1.5 w-full rounded-full overflow-hidden bg-black/30 backdrop-blur-sm">
        {/* Progress */}
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full
           bg-gradient-to-r from-primary via-purple-500 to-fuchsia-500
           shadow-[0_0_12px_rgba(168,85,247,0.6)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="skills" className="section-spacing relative bg-secondary/30 overflow-hidden" ref={ref}>
      {/* Parallax Background Pattern */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]"
        style={{ y }}
      />

      <motion.div className="section-container relative" style={{ opacity }}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expertise
          </motion.span>
          <h2 className="text-heading font-serif">
            Skills & <span className="text-gradient-gold">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card rounded-2xl p-8 glow-effect"
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-xl font-serif font-semibold mb-8 flex items-center gap-3">
                <motion.span
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="hidden lg:block absolute -bottom-20 -right-20 w-64 h-64 border border-border/30 rounded-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        />
        <motion.div
          className="hidden lg:block absolute -bottom-10 -right-10 w-40 h-40 border border-primary/20 rounded-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
        />
      </motion.div>
    </section>
  );
};

export default SkillsSection;
