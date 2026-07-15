import { Plus, Minus } from "lucide-react";

const ZoomControl = () => {
  return (
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
      <button
        className="w-5 h-5 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100"
      >
        <Plus size={18} color="#64748B" />
      </button>

      <button
        className="w-5 h-5 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100"
      >
        <Minus size={18} color="#64748B" />
      </button>
    </div>
  );
};

export default ZoomControl;