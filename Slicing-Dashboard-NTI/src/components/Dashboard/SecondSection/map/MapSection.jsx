import { useState } from "react";
import { useMapData } from "../../../../hooks/useMapData";

import Map from "./Mapbox";
import MapLegend from "./MapLegend";
import ZoomControl from "./ZoomControl";
import PopupInfo from "./PopupInfo";
import BottomPanel from "./BottomPanel";

import { useFilterStore } from "../../../../store/useFilterStore";
import ErrorState from "../../../ErrorState";

const MapSection = () => {
  const [map, setMap] = useState(null);

  const { period, region } = useFilterStore();

  const { data, isError } = useMapData({period, region})

  return (
    <div className="bg-white rounded-2xl ml-3 shadow-sm h-full flex flex-col">
      <div className="relative flex-1 overflow-hidden rounded-xl">
        <Map onLoad={setMap} />

        {map && (
          <>
            <MapLegend />
            <ZoomControl map={map} />

            {isError ? (
              <div className="absolute top-20 right-4 z-10 w-32">
                <ErrorState message="Gagal memuat data grid" />
              </div>
            ) : (
              data && (
                <>
                  <PopupInfo data={data.popup} title="popupInfo" />
                  <PopupInfo data={data.popup} title="2" />
                  <BottomPanel grids={data.grids} />
                </>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MapSection;
