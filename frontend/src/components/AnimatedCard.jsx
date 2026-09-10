// src/components/AnimatedCard.jsx
import { motion } from "framer-motion";

function AnimatedCard({ task, onDelete, completedTask, completed }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        padding: "10px 20px",
        margin: "10px",
        borderRadius: "12px",
        background: "#ffffff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        cursor: "pointer"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <span style={{ color: completed ? "green" : "inherit" }}>{task}</span>
        <div style={{ display: "flex", gap: "8px" }}>
          <button 
         type="button"
         onClick={completedTask}
         style={{ backgroundColor: "#28a745", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "50%", cursor: "pointer" }}
        >
          ✓
        </button> 
        <button
          type="button"
          onClick={onDelete}
          style={{ backgroundColor: "#dc3545", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "50%", cursor: "pointer" }}
        >
          X
        </button>
        </div>

      </div>
    </motion.div>
  );
}
export default AnimatedCard;