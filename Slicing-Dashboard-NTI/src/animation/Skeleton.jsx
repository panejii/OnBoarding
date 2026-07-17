// src/animation/Skeleton.jsx
// Primitive skeleton (pure Tailwind, TANPA motion) untuk disusun ulang
// sesuai bentuk layout tiap card. Motion tidak diperlukan di sini karena
// animate-pulse sudah cukup ringan & tidak butuh state React.

export const SkeletonBox = ({ className = "" }) => (
  <div className={`animate-pulse rounded-xl bg-slate-200 ${className}`} />
);

export const SkeletonCircle = ({ className = "w-10 h-10" }) => (
  <div className={`animate-pulse rounded-full bg-slate-200 ${className}`} />
);

export const SkeletonText = ({ className = "w-24 h-4" }) => (
  <div className={`animate-pulse rounded bg-slate-200 ${className}`} />
);

// Preset siap pakai untuk pola "icon + judul + angka" seperti di StatisticCard
export const SkeletonHeaderStat = () => (
  <div className="flex gap-3 items-center">
    <SkeletonCircle className="w-8 h-8 lg:w-10 lg:h-10" />
    <div className="flex flex-col gap-2">
      <SkeletonText className="w-28 h-3" />
      <SkeletonText className="w-16 h-6" />
    </div>
  </div>
);

// Preset siap pakai untuk area chart (StatisticCard, GroupBarChart, SankeyChart, dll)
export const SkeletonChart = ({ className = "h-48" }) => (
  <SkeletonBox className={`w-full ${className}`} />
);

// Preset siap pakai untuk list/grid singkat (CompetitorSummary, RegionalCard, dll)
export const SkeletonList = ({ rows = 2, className = "" }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: rows }).map((_, i) => (
      <SkeletonText key={i} className="w-full h-4" />
    ))}
  </div>
);
