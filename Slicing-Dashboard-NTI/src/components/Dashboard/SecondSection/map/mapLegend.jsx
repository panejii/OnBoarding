const MapLegend = () => {
  return (
    <div className="absolute top-4 left-4 z-10 bg-white rounded-full shadow-md px-2 py-1 flex gap-2 text-[6px] lg:text-[8px]">
      <div className="flex items-center gap-0.5">
        <span className="w-1 h-1 rounded-full bg-red-500"></span>
        Critical
      </div>

      <div className="flex items-center gap-0.5">
        <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
        Warning
      </div>

      <div className="flex items-center gap-0.5">
        <span className="w-1 h-1 rounded-full bg-green-500"></span>
        Good
      </div>
    </div>
  );
};

export default MapLegend;