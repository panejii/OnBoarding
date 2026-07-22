import { motion } from "motion/react";
import { staggerContainer } from "./variants";

const StaggerContainer = ({ children, className = "", stagger = 0.12 }) => (
  <motion.div
    className={className}
    variants={staggerContainer(stagger)}
    initial="hidden"
    animate="show"
  >
    {children}
  </motion.div>
);

export default StaggerContainer;
