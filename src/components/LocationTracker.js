"use client";

import { useEffect } from "react";

const LocationTracker = () => {
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        // Send to your API
        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country_name,
            time: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Location tracking failed", err);
      }
    };

    fetchLocation();
  }, []);

  return null;
};

export default LocationTracker;
