// src/components/AnimatedCard.jsx
import { motion } from "framer-motion";

function AnimatedCard({ task, onDelete, completedTask, completed }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`task-card${completed ? " is-complete" : ""}`}
    >
      <div className="task-copy">
        <span className="task-status" aria-hidden="true">{completed ? 'DONE' : 'TODO'}</span>
        <span className="task-text">{task}</span>
      </div>
      <div className="task-actions">
        {!completed && <button className="complete-button" type="button" onClick={completedTask} title="Complete task" aria-label={`Complete ${task}`}>
          ✓
        </button>}
        <button className="delete-button" type="button" onClick={onDelete} title="Delete task" aria-label={`Delete ${task}`}>
          ×
        </button>
      </div>
    </motion.div>
  );
}
export default AnimatedCard;