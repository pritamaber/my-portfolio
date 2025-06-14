---
title: "🗺️ GeoTracker – Show Your Live Location on a Map"
date: "2025-06-14"
author: "Pritam Das"
tags: ["React", "Leaflet", "Geolocation", "Custom Hook"]
---

This project demonstrates how to fetch the user's current location using the **Geolocation API** and display it on a map using **Leaflet.js** and **React Leaflet**.

---

## 📍 1. `useGeoLocation` Hook

This hook wraps `navigator.geolocation.watchPosition()` to track and return the user's location.

```
// src/hooks/useGeoLocation.js
import { useEffect, useState } from "react";

function useGeoLocation() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const watcher = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => console.error("Location error:", err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return { position };
}

export default useGeoLocation;
```

## 🗺️ 2. MapProject.jsx Page

This React component fetches the location from the hook and displays it on a **Leaflet map** using react-leaflet.

```
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import useGeoLocation from "../hooks/useGeoLocation";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


function MapProject() {
  const { position } = useGeoLocation();

  if (!position) return <p>Fetching location...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <h2 className="text-2xl font-bold mb-4 text-center">📍 Your Location</h2>

      <p className="text-center mb-4">
        Latitude: {position.latitude} <br />
        Longitude: {position.longitude}
      </p>

      <div className="w-full max-w-3xl mx-auto">
        <MapContainer
          center={[position.latitude, position.longitude]}
          zoom={13}
          style={{ height: "60vh", width: "100%" }}
          className="rounded-xl shadow"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap"
          />
          <Marker position={[position.latitude, position.longitude]} />
        </MapContainer>
      </div>
    </div>
  );
}

export default MapProject;
```

## 💻 Live Demo

👉 [View Project](https://projects.impritam.com/map-project)

👉 [View Code on GitHub](https://github.com/pritamaber/react-mini-projects)
