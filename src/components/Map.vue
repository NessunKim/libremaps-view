<template>
  <div class="wrapper">
    <div id="map"></div>
    <context-menu ref="menu">
      <ul>
        <li>Add new marker here</li>
      </ul>
    </context-menu>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import { onMounted, reactive, ref } from "vue";
import * as axios from "axios";
import ContextMenu from "./ContextMenu";

const useMap = () => {
  let map = null;
  const markers = [];
  const menu = ref(null);

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
      markers.push(
        L.marker([attributes.latitude, attributes.longitude]).addTo(map)
      );
    });
  };

  onMounted(async () => {
    map = L.map("map").setView([37.7, 126.7], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    await updateMarkers();
    map.on("contextmenu", (e) => {
      console.log(e);
      menu.value.open({
        x: e.originalEvent.clientX,
        y: e.originalEvent.clientY,
      });
    });
    map.on("moveend", updateMarkers);
  });
  return { menu };
};

export default {
  components: {
    ContextMenu,
  },
  setup() {
    const state = reactive({
      showContextMenu: false,
    });

    return { ...useMap(), state };
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 80%;
  height: 80vh;
}
</style>