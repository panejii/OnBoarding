import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Map from "./Mapbox";
import MapLegend from "./MapLegend";
import ZoomControl from "./ZoomControl";
import PopupInfo from "./PopupInfo";
import BottomPanel from "./BottomPanel";

import { getMapData } from "../../../../services/mapService";
import { useFilterStore } from "../../../../store/useFilterStore";
import ErrorState from "../../../ErrorState";

const MapSection = () => {
  const [map, setMap] = useState(null);

  const { period, region } = useFilterStore();

  const { data, isError } = useQuery({
    queryKey: ["mapData", period, region],
    queryFn: () => getMapData({ period, region }),
  });

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
                  <PopupInfo data={data.popup} />
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
