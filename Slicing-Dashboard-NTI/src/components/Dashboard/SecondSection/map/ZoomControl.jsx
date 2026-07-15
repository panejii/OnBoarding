import { Plus, Minus } from "lucide-react";

const ZoomControl = () => {
  return (
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
      <button
        className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
      >
        <Plus size={18} />
      </button>

      <button
        className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
      >
        <Minus size={18} />
      </button>
    </div>
  );
};

export default ZoomControl;