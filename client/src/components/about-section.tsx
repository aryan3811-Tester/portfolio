import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Passionate Quality Engineer with 3+ years of experience in manual and automated testing. 
            Specialized in e-commerce platforms, logistics solutions, and comprehensive testing strategies 
            that drive product excellence and customer satisfaction.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">Professional Journey</h3>
            <p className="text-gray-300 mb-4">
              Currently working as a Quality Engineer at AGL360 – Hakuhodo International, where I've achieved 
              an 80% reduction in post-release bugs and increased testing efficiency by 72%.
            </p>
            <p className="text-gray-300">
              My expertise spans across various testing methodologies, automation frameworks, and 
              collaboration with cross-functional teams to deliver exceptional software products.
            </p>
          </motion.div>
          
          <motion.div
            className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-teal-500 to-violet-500 rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-white font-semibold">Quality Engineer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
