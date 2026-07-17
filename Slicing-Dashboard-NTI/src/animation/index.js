// src/animation/index.js
// Barrel export, supaya import di komponen lain cukup 1 baris:
// import { AnimatedCard, StaggerContainer, StaggerItem, SkeletonBox, fadeInUp } from "../animation";

export { default as AnimatedCard } from "./AnimatedCard";
export { default as StaggerContainer } from "./StaggerContainer";
export { default as StaggerItem } from "./StaggerItem";
export {
  SkeletonBox,
  SkeletonCircle,
  SkeletonText,
  SkeletonHeaderStat,
  SkeletonChart,
  SkeletonList,
} from "./Skeleton";
export { fadeInUp, fadeIn, staggerContainer, staggerItem } from "./variants";
