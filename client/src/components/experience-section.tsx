import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Quality Engineer",
      company: "AGL360 – Hakuhodo International",
      period: "June 2024 - Present",
      color: "from-teal-400 to-cyan-400",
      responsibilities: [
        "Developed and executed comprehensive test plans and strategies for upcoming sprints, resulting in an 80% reduction in post-release bugs through manual testing, significantly enhancing product quality and customer satisfaction.",
        "Streamlined test case execution and processes, increasing testing efficiency by 72%, resulting in faster release cycles. Conducted diverse manual testing types including Functional, Usability, Regression, Integration, Exploratory, and Security Testing to ensure comprehensive coverage.",
        "Leveraged expertise in e-commerce platforms (Zepto, Instamart, Amazon, Flipkart, Blinkit, Myntra), utilizing JIRA and Bugzilla for efficient bug reporting and test management via Excel and Testrail. Conducted SQL-based database testing and API testing with Postman, ensuring seamless integrations and functionality.",
        "Boosted team collaboration by 40% through Agile methodologies, while applying a solid understanding of SDLC and web technologies (HTML, CSS, JavaScript) to drive effective test documentation and reporting for faster, more efficient project completion.",
      ],
    },
    {
      title: "Quality Analyst",
      company: "Mphasis Ltd.",
      period: "April 2023 - May 2024",
      color: "from-violet-400 to-blue-400",
      responsibilities: [
        "Developed and executed comprehensive test cases based on detailed requirements and user stories, covering functional, regression, exploratory, and cross-browser testing. Actively participated in sprint meetings, collaborating with clients and developers to ensure alignment and achieve a 40% increase in sprint efficiency and faster issue resolution.",
        "Streamlined bug tracking and test case management using Jira and TCMS, improving defect detection and reporting accuracy. Contributed to a 60% improvement in overall product quality by identifying critical defects early, minimizing post-release issues, and enhancing the development process.",
        "Performed data validation tasks using Excel and databases, ensuring data integrity across platforms, and conducted thorough API testing with Postman to ensure seamless system integrations and functional correctness. This led to a 30% reduction in integration-related issues during testing phases.",
        "Implemented STLC methodologies across all testing phases, from requirement analysis to defect management, ensuring a 25% improvement in test execution efficiency and effective defect resolution, which reduced release cycle time and improved team collaboration.",
      ],
    },
    {
      title: "Junior QA",
      company: "Bebo Technologies",
      period: "Feb 2022 - March 2023",
      color: "from-cyan-400 to-teal-400",
      responsibilities: [
        "Led testing efforts for a logistics domain project focused on a web and mobile-based application for trucking companies and drivers. The platform enables shippers to efficiently assign freight/loads to drivers via a customer portal, resulting in a 25% improvement in operational efficiency and a significant reduction in manual intervention.",
        "Created and executed automation scripts while performing manual testing for both web and mobile (iOS & Android) applications, ensuring consistent user experiences across all devices, ultimately improving application stability and speeding up release cycles.",
        "Gained hands-on experience running a wide range of tests, including Unit, Functional, Regression, Integration, System, Smoke, Localization, API, Interruption, Load, Database, and OS testing, ensuring 100% test coverage and delivering high-quality releases with minimal defects.",
        "Proficient in using industry-standard tools like Jira, Testrail, and Eclipse to manage projects, track test cases, and streamline test execution, contributing to improved team collaboration and more efficient defect resolution.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Professional Experience</h2>
        </motion.div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="glassmorphism p-8 rounded-xl hover-glow transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-teal-400">{exp.title}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className={`bg-gradient-to-r ${exp.color} text-white px-4 py-2 rounded-full text-sm`}>
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="text-gray-300 space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-violet-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
