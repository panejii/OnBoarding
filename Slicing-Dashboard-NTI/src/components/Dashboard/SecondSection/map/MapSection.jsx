import { useState } from "react";

import Map from "./Mapbox";
import MapLegend from "./MapLegend";
import ZoomControl from "./ZoomControl";
import PopupInfo from "./PopupInfo";
import BottomPanel from "./BottomPanel";

const MapSection = () => {
  const [map, setMap] = useState(null);

  return (
    <div className="bg-white rounded-2xl ml-3 shadow-sm h-full flex flex-col">
      <div className="relative flex-1 overflow-hidden rounded-xl">
        <Map onLoad={setMap} />

        {map && (
          <>
            <MapLegend />
            <ZoomControl map={map} />
            <PopupInfo map={map} />
            <BottomPanel map={map} />
          </>
        )}
      </div>
    </div>
  );
};

export default MapSection;