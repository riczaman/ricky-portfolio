import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsCarousel from './components/ui/SkillsCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      <HeroSection />
      <SkillsCarousel />
      <ProjectsSection />
    </main>
  );
}