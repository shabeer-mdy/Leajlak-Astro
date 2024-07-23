var map = L.map("map").setView([24.751625802269142, 46.67100477958491], 15);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([24.751625802269142, 46.67100477958491])
  .addTo(map)
  .bindPopup("Leajlak's office.")
  .openPopup();
