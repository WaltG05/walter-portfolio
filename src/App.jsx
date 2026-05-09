import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { TechStack } from "@/sections/Tech-Stack";
import { Footer } from "@/sections/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Global Background Dots */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        {/* <Experience /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
