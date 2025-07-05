import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Genie Dashboard",
      description: "A comprehensive dashboard for Flipkart, Amazon, Zepto, Blinkit, and Bajaj Ads Platform, where users can access all campaign metrics and optimize campaigns to achieve higher ROI.",
      details: "The dashboard provides real-time data, including day-wise campaign performance, demographic, and geographic information for enhanced decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      color: "from-teal-400 to-cyan-400",
    },
    {
      title: "5F-OTR Logistics Platform",
      description: "A logistics domain project focused on web and mobile-based applications for trucking companies and drivers, enabling efficient freight assignment and management.",
      details: "The platform allows shippers to assign freight/loads to drivers via a customer portal, resulting in improved operational efficiency and reduced manual intervention.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      color: "from-violet-400 to-blue-400",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Key Projects</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={`${project.title} interface`}
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2 text-teal-400">{project.title}</h3>
                <span className={`inline-block bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm mb-4`}>
                  Quality Assurance
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-gray-400 text-sm">{project.details}</p>
              
              <div className="mt-6 flex space-x-4">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:to-teal-500 transition-all duration-300">
                  <Code className="w-4 h-4" />
                  <span>View Testing</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
