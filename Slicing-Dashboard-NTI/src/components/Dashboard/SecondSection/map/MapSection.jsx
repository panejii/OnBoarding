import Mapbox from "./Mapbox";
import MapLegend from "./mapLegend";
import ZoomControl from "./ZoomControl";
import PopupInfo from "./PopupInfo";
import BottomPanel from "./BottomPanel";

const MapSection = () => {
  return (
    <div className="bg-white rounded-2xl ml-3 shadow-sm h-full flex flex-col">

      
      <div className="relative flex-1 overflow-hidden rounded-xl">
        <Mapbox />

        <MapLegend/>

        <ZoomControl/>

        <PopupInfo/>

        <BottomPanel/>
      </div>

    </div>
  );
};

export default MapSection;