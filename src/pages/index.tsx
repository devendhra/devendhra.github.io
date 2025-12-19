import { useEffect, useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = 'Devendhra A | Full-Stack Developer';

    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Devendhra A - A curious full-stack engineer crafting elegant digital experiences with precision, passion, and performance. Explore my portfolio of innovative web applications.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'Devendhra A - A curious full-stack engineer crafting elegant digital experiences with precision, passion, and performance. Explore my portfolio of innovative web applications.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <>
      <PageLoader onLoadComplete={() => setIsLoaded(true)} />
      
      <div className={`relative min-h-screen bg-background text-foreground overflow-x-hidden transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Noise Overlay */}
        <div className="noise-overlay" />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
