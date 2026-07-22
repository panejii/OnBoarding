import { motion } from "motion/react";
import { staggerItem } from "./variants";

const StaggerItem = ({ children, className = "" }) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);

export default StaggerItem;
