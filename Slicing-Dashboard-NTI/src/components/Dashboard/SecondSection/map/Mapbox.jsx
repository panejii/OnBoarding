import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { motion, AnimatePresence } from "motion/react";
import { fadeIn } from "../../../../animation";

import { useFilterStore } from "../../../../store/useFilterStore";
import { getMapViewport } from "./mapRegionConfig";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export default function Map({ onLoad }) {
    const containerRef = useRef(null)
    const mapRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)

    const { region } = useFilterStore()

    // Map instance dibuat SEKALI saja. Viewport awal mengikuti region yang aktif saat mount (nilai region berikutnya ditangani oleh effect di bawah).
    useEffect(() => {
        const { center, zoom } = getMapViewport(region)

        const map = new mapboxgl.Map({
            container: containerRef.current,
            center,
            zoom,
        })
        mapRef.current = map

        map.on("load", () => {
            onLoad?.(map);
            setIsLoading(false);
        });

        return () => {
            map.remove()
            mapRef.current = null
        }
    }, [])

    useEffect(() => {
        if (!mapRef.current) return
        const { center, zoom } = getMapViewport(region)
        mapRef.current.flyTo({ center, zoom, essential: true })
    }, [region])

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
                ref={containerRef}
                style={{ width: "100%", height: "100%" }}
                variants={fadeIn}
                initial="hidden"
                animate={isLoading ? "hidden" : "show"}
            />
        </div>
    )
};
