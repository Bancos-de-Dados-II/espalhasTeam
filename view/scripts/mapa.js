let marker;

export function iniciarMapa(elementId, coordenadasIniciais) {
  const map = L.map(elementId).setView(coordenadasIniciais, 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  marker = L.marker(coordenadasIniciais, {
    draggable: true,
    icon: L.icon({
      iconUrl: "https://cdn-icons-png.freepik.com/256/3661/3661280.png",
      iconSize: [24, 24],
    }),
  }).addTo(map);

  map.on("click", (e) => marker.setLatLng(e.latlng));

  return map;
}

export function getLocalizacaoMarker() {
  if (!marker) return null;
  const latlng = marker.getLatLng();
  return {
    type: "Point",
    coordinates: [latlng.lng, latlng.lat],
  };
}

export function setLocalizacaoMarker(coordenadas) {
  if (!marker) return;
  marker.setLatLng([coordenadas[1], coordenadas[0]]);
}
