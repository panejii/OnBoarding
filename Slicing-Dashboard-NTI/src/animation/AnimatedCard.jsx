// src/animation/AnimatedCard.jsx
// Wrapper reusable untuk pola "tampilkan skeleton selama isLoading,
// lalu fade-in ke konten asli begitu data sudah datang".
// Dipakai di semua card yang fetch API: StatisticCard, CompetitorCard,
// ShareCard, RegionalSection, MigrationSection, dst.

import { motion, AnimatePresence } from "motion/react";
import { fadeInUp } from "./variants";

const AnimatedCard = ({ isLoading, skeleton, children, className = "" }) => {
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div key="skeleton" exit={{ opacity: 0 }} className={className}>
          {skeleton}
        </motion.div>
      ) : (
        <motion.div
          key="content"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedCard;
