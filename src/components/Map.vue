<template>
  <div id="map"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import { onMounted } from "vue";
import * as axios from "axios";

const useMap = () => {
  let map = null;
  const markers = [];

  const updateMarkers = async () => {
    const bounds = map.getBounds();
    const zoom = map.getZoom();
    const params = {
      north: bounds.getNorth(),
      south: bounds.getSouth(),
      west: bounds.getWest(),
      east: bounds.getEast(),
      zoom,
    };
    const { data } = await axios.get("http://localhost:8081/markers", {
      params,
    });
    markers.map((m) => m.remove());
    markers.length = 0;
    data.data.map(({ attributes }) => {
      console.log(attributes);
      markers.push(
        L.marker([attributes.latitude, attributes.longitude]).addTo(map)
      );
    });
  };

  onMounted(async () => {
    map = L.map("map").setView([37.7, 126.7], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    await updateMarkers();
    map.on("moveend", updateMarkers);
  });
  return {};
};

export default {
  setup() {
    return { ...useMap() };
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 80%;
  height: 80vh;
}
</style>