const MapLegend = () => {
  return (
    <div className="absolute top-4 left-4 z-10 bg-white rounded-full shadow-md px-4 py-2 flex gap-5 text-xs">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        Critical
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        Warning
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        Good
      </div>
    </div>
  );
};

export default MapLegend;