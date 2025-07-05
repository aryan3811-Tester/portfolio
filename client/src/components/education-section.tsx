import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "MMDU, Mullana (Ambala)",
      period: "2018 - 2022",
      grade: "82%",
      color: "from-teal-400 to-cyan-400",
      icon: GraduationCap,
    },
    {
      degree: "Senior Secondary Education",
      institution: "Dyal Singh Public School",
      period: "2017 - 2018",
      grade: "65%",
      color: "from-violet-400 to-blue-400",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Education</h2>
        </motion.div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${edu.color}`}>
                    <edu.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-teal-400 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-300">{edu.institution}</p>
                    <p className="text-gray-400">Grade: {edu.grade}</p>
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <span className={`bg-gradient-to-r ${edu.color} text-white px-4 py-2 rounded-full text-sm`}>
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
