// src/animation/StaggerItem.jsx
// Dipasang di tiap child langsung di dalam <StaggerContainer>.
// Wajib pakai motion.div (bukan div biasa) supaya variant "hidden"/"show"
// dari parent bisa diwariskan otomatis oleh motion.

import { motion } from "motion/react";
import { staggerItem } from "./variants";

const StaggerItem = ({ children, className = "" }) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);

export default StaggerItem;
