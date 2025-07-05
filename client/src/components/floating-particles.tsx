import { motion } from "framer-motion";

export default function FloatingParticles() {
  const particles = [
    { size: 8, color: "bg-teal-500", top: "10%", left: "10%", delay: 0 },
    { size: 12, color: "bg-violet-500", top: "20%", left: "80%", delay: 1 },
    { size: 4, color: "bg-cyan-500", top: "40%", left: "60%", delay: 2 },
    { size: 8, color: "bg-blue-500", top: "60%", left: "20%", delay: 3 },
    { size: 16, color: "bg-teal-500", top: "70%", left: "90%", delay: 4 },
    { size: 4, color: "bg-violet-500", top: "80%", left: "40%", delay: 5 },
    { size: 6, color: "bg-cyan-500", top: "30%", left: "30%", delay: 6 },
    { size: 10, color: "bg-blue-500", top: "50%", left: "70%", delay: 7 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full opacity-30 ${particle.color}`}
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-32 h-32 border-2 border-teal-500 rounded-full opacity-20"
        style={{ top: "20%", left: "20%" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 border-2 border-violet-500 opacity-20"
        style={{ top: "40%", right: "32%" }}
        animate={{
          rotate: [0, 45, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-16 h-16 bg-blue-500 rounded-full opacity-20"
        style={{ bottom: "32%", left: "32%" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
