"use client";

import { useEffect } from "react";

const LocationTracker = () => {
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // Try to get GPS location
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            await fetch("/api/track", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                latitude,
                longitude,
                source: "gps",
                time: new Date().toISOString(),
              }),
            });
          },
          async (error) => {
            console.warn("GPS location failed, falling back to IP:", error);

            // Fallback to IP-based location
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();

            await fetch("/api/track", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ip: data.ip,
                city: data.city,
                region: data.region,
                country: data.country_name,
                location: `${data.latitude},${data.longitude}`,
                source: "ip",
                time: new Date().toISOString(),
              }),
            });
          },
          { timeout: 10000 } // Optional: Timeout after 10 seconds
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocation();
  }, []);

  return null;
};

export default LocationTracker;
