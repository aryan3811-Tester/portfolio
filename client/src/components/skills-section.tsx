import { motion } from "framer-motion";
import { TestTube, Bot, Wrench, Users, Code, Database } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Testing & QA",
      icon: TestTube,
      color: "text-teal-400",
      skills: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "API Testing",
        "Database Testing",
        "Security Testing",
      ],
    },
    {
      title: "Automation Frameworks",
      icon: Bot,
      color: "text-violet-400",
      skills: [
        "Playwright with JavaScript",
        "Playwright with TypeScript",
        "Selenium WebDriver",
        "API Automation",
        "Test Framework Design",
        "CI/CD Integration",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "text-cyan-400",
      skills: [
        "Docker",
        "Jenkins",
        "GitHub",
        "JIRA & Bugzilla",
        "Postman",
        "SQL Databases",
      ],
    },
  ];

  const additionalSkills = [
    {
      title: "Project Management",
      icon: Users,
      color: "text-teal-400",
      description: "Agile Methodologies, Scrum, SDLC, Sprint Planning, UAT",
    },
    {
      title: "Technical Skills",
      icon: Code,
      color: "text-violet-400",
      description: "Python, HTML/CSS/JavaScript, Data Analysis, Tableau",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Expertise</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <category.icon className={`w-12 h-12 mx-auto mb-4 ${category.color}`} />
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-violet-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="glassmorphism p-8 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gradient">Additional Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalSkills.map((skill, index) => (
              <div key={skill.title} className="flex items-start space-x-4">
                <skill.icon className={`w-8 h-8 mt-1 ${skill.color}`} />
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${skill.color}`}>{skill.title}</h4>
                  <p className="text-gray-300">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
