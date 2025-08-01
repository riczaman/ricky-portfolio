import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}