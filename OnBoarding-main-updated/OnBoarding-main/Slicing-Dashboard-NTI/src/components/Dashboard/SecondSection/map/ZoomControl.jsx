import { Plus, Minus } from "lucide-react";

const ZoomControl = ({ map }) => {
  return (
    <div className="absolute  top-4 right-2 xl:top-4 xl:right-4 z-10 flex flex-col gap-1">
      <button
        onClick={() => map?.zoomIn()}
        className="w-3 h-3  lg:w-5 lg:h-5  bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100"
      >
        <Plus size={18} color="#64748B" />
      </button>

      <button
        onClick={() => map?.zoomOut()}
        className="w-3 h-3  lg:w-5 lg:h-5 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-100"
      >
        <Minus size={18} color="#64748B" />
      </button>
    </div>
  );
};

export default ZoomControl;
