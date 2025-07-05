import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-background opacity-20"></div>
      
      <div className="text-center z-10 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">Aryan Garg</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Quality Engineer & Test Automation Expert
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="glassmorphism px-8 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300 hover-glow"
          >
            Get In Touch
          </button>
          
          <button
            onClick={() => scrollToSection("experience")}
            className="border-2 border-teal-500 px-8 py-3 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            View Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
