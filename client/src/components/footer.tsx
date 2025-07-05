import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-8 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">© 2024 Aryan Garg. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
