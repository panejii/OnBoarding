import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { motion, AnimatePresence } from "motion/react";
import { fadeIn } from "../../../../animation";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export default function Map({onLoad}){
    const mapRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapRef.current,
            center: [106.8516,-6.2297],
            zoom : 9
        })

        map.on("load", () => {
            onLoad?.(map);
            setIsLoading(false);
        });

        return () => map.remove()
    },[])

    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="map-skeleton"
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 animate-pulse bg-slate-200 z-10"
                    />
                )}
            </AnimatePresence>

            <motion.div
                ref={mapRef}
                style={{ width: "100%", height: "100%" }}
                variants={fadeIn}
                initial="hidden"
                animate={isLoading ? "hidden" : "show"}
            />
        </div>
    )
};
