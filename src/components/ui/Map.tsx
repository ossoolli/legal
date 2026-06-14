"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  useEffect(() => {
    // Zarqa Coordinates: 32.0722, 36.0872 (approx center of Zarqa town center / Al-Sa'ada Street area)
    const map = L.map("contact-map", {
      center: [32.0722, 36.0872],
      zoom: 15,
      scrollWheelZoom: false,
    });

    // Leaflet base tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
    }).addTo(map);

    // Custom Pin shape 'م'
    const customIcon = L.divIcon({
      html: `
        <div class="w-10 h-10 rounded bg-[#4A1528] border-2 border-white flex items-center justify-center text-white font-cairo font-black text-lg shadow-lg">
          م
        </div>
      `,
      className: "custom-leaflet-marker",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    L.marker([32.0722, 36.0872], { icon: customIcon })
      .addTo(map)
      .bindPopup(
        `<div class="font-cairo text-charcoal text-center p-1.5" style="direction: rtl;">
          <h4 class="font-bold text-[#4A1528] text-sm">المركز القانوني العربي</h4>
          <p class="text-xs text-charcoal/70 mt-1">شارع السعادة — مجمع أبو دواس — مكتب 501</p>
        </div>`
      )
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="contact-map"
      className="w-full h-full rounded shadow-inner"
      style={{ minHeight: "350px" }}
    />
  );
}
