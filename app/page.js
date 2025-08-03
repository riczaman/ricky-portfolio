import Header from './components/sections/Header';
import HeroSection from './components/sections/HeroSection';
import SkillsCarousel from './components/ui/SkillsCarousel';
import Timeline from './components/ui/Timeline';
import ProjectsSection from './components/sections/ProjectsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        
        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in building scalable web applications 
              and implementing robust DevSecOps practices. I love turning complex problems into elegant, 
              user-friendly solutions while ensuring security and performance at every step.
            </p>
          </div>
        </section>

        <SkillsCarousel />
        
        <section id="experience">
          <Timeline />
        </section>
        
        <ProjectsSection />
        
        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
              Let's Connect
            </h2>
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed mb-8">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ricky.zaman@outlook.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-gray-600 rounded-xl font-semibold hover:from-blue-500 hover:to-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 text-white"
              >
                Get In Touch
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-blue-500 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 text-blue-700 dark:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}