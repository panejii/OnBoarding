import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Container } from "lucide-react";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export default function Map(){
    const mapRef = useRef(null)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            center: [106.8516,-6.2297], 
            zoom : 9
        })
        return () => map.remove()
    },[])

    return <div ref={mapRef} style={{width:"100%",height:"420px"}}/>
};