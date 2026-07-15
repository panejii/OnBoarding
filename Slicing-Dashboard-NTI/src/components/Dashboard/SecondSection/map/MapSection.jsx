import Mapbox from "./Mapbox";

const MapSection = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-full flex flex-col">

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">
          Regional Map
        </h2>

        <select className="border rounded-lg px-2 py-1 text-sm">
          <option>Indonesia</option>
        </select>
      </div>

      <div className="flex-1">
        <Mapbox />
      </div>

    </div>
  );
};

export default MapSection;