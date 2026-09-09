// src/components/AnimatedCard.jsx
import { motion } from "framer-motion";

export default function AnimatedCard({ title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: "20px",
        margin: "10px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        cursor: "pointer"
      }}
    >
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
}