<template>
  <div id="map"></div>
  <context-menu ref="menu" @closed="onContextMenuClosed">
    <div>
      <p class="mb-2">이 위치에 마커를 추가합니다.</p>
      <label class="new-marker-label" for="page-name">연결할 문서</label>
      <input
        name="page-name"
        type="text"
        class="new-marker-input"
        :class="{ 'new-marker-input-invalid': newMarkerForm.invalidPageName }"
        placeholder="연결할 문서"
        v-model="newMarkerForm.pageName"
        @input="() => (newMarkerForm.markerName = newMarkerForm.pageName)"
      />
      <label class="new-marker-label" for="marker-name">마커의 이름</label>
      <input
        name="marker-name"
        type="text"
        class="new-marker-input"
        :class="{
          'new-marker-input-invalid': newMarkerForm.invalidMarkerName,
        }"
        placeholder="마커의 이름"
        v-model="newMarkerForm.markerName"
      />
      <label class="new-marker-label" for="latitude">위도</label>
      <input
        name="latitude"
        type="text"
        class="new-marker-input"
        placeholder="위도"
        v-model="newMarkerForm.latitude"
      />
      <label class="new-marker-label" for="longitude">경도</label>
      <input
        name="longitude"
        type="text"
        class="new-marker-input"
        placeholder="경도"
        v-model="newMarkerForm.longitude"
      />
      <label class="new-marker-label" for="zoom"
        >확대 수준(이 수준보다 축소시 숨김)</label
      >
      <vue-slider
        name="zoom"
        class="mb-3"
        v-model="newMarkerForm.zoom"
        :max="18"
        :min="0"
      />
      <button class="new-marker-submit" @click="onSubmit">
        추가 (위키로 이동)
      </button>
    </div>
  </context-menu>
</template>

<script>
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import { onMounted, reactive, ref } from "vue";
import * as axios from "axios";
import ContextMenu from "./ContextMenu";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";

const useMap = ({ emit }) => {
  let map = null;
  let newMarkerDummy = null;

  const newMarkerForm = reactive({
    pageName: "",
    invalidPageName: false,
    markerName: "",
    invalidMarkerName: false,
    latitude: 0,
    longitude: 0,
    zoom: 0,
  });

  const menu = ref(null);
  const markers = [];

  const updateMarkers = async () => {
    const bounds = map.getBounds();
    const zoom = map.getZoom();
    const nw = bounds.getNorthWest().wrap();
    const se = bounds.getSouthEast().wrap();
    const params = {
      north: nw.lat,
      south: se.lat,
      west: nw.lng,
      east: se.lng,
      zoom,
    };
    const { data } = await axios.get("//api.maps.librewiki.net/markers", {
      params,
    });
    markers.map((m) => m.remove());
    markers.length = 0;
    data.data.map(({ attributes: { latitude, longitude, name, page_id } }) => {
      const unwrap = Math.ceil((bounds.getWest() - longitude) / 360) * 360;
      const marker = L.marker([latitude, longitude + unwrap]);
      marker.addTo(map).bindTooltip(name, { permanent: true }).openTooltip();
      marker.on("click", () => {
        emit("updatePanel", `https://librewiki.net/index.php?curid=${page_id}`);
      });
      markers.push(marker);
    });
  };

  const onContextMenu = (e) => {
    if (newMarkerDummy) {
      newMarkerDummy.remove();
    }
    newMarkerDummy = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    newMarkerForm.latitude = e.latlng.lat;
    newMarkerForm.longitude = e.latlng.wrap().lng;
    newMarkerForm.zoom = map.getZoom();
    menu.value.open({
      x: e.originalEvent.clientX,
      y: e.originalEvent.clientY,
    });
  };

  const onContextMenuClosed = () => {
    if (newMarkerDummy) {
      newMarkerDummy.remove();
      newMarkerDummy = null;
    }
  };

  const onSubmit = (e) => {
    if (!newMarkerForm.pageName.trim()) {
      newMarkerForm.invalidPageName = true;
      return;
    }
    if (!newMarkerForm.markerName.trim()) {
      newMarkerForm.invalidMarkerName = true;
      return;
    }
    window.open(
      `https://librewiki.net/index.php?action=edit&preload=%ED%8B%80:%EB%A6%AC%EB%B8%8C%EB%A0%88_%EB%A7%B5%EC%8A%A4_%EB%A7%88%EC%BB%A4/%ED%85%9C%ED%94%8C%EB%A6%BF&preloadparams[]=${newMarkerForm.latitude}&preloadparams[]=${newMarkerForm.longitude}&preloadparams[]=${newMarkerForm.zoom}&preloadparams[]=${newMarkerForm.markerName}&title=${newMarkerForm.pageName}&section=new&nosummary=true&editintro=%ED%8B%80:%EB%A6%AC%EB%B8%8C%EB%A0%88%20%EB%A7%B5%EC%8A%A4%20%EB%A7%88%EC%BB%A4/%ED%8E%B8%EC%A7%91%EC%B0%BD%20%EC%95%88%EB%82%B4`,
      "_blank"
    );
    newMarkerForm.pageName = "";
    newMarkerForm.markerName = "";
    newMarkerForm.invalidPageName = false;
    newMarkerForm.invalidMarkerName = false;
    menu.value.close(e);
  };

  onMounted(async () => {
    map = L.map("map").setView([37.7, 126.7], 7);
    window.map = map;
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://librewiki.net">Libre Wiki</a> contributors',
    }).addTo(map);
    await updateMarkers();
    map.on("zoomend", () => {
      newMarkerForm.zoom = map.getZoom();
    });
    map.on("contextmenu", onContextMenu);
    map.on("moveend", updateMarkers);
  });

  return {
    menu,
    onSubmit,
    onContextMenuClosed,
    newMarkerForm,
  };
};

export default {
  emits: ["updatePanel"],
  components: {
    ContextMenu,
    VueSlider,
  },
  setup(props, { emit }) {
    return { ...useMap({ emit }) };
  },
};
</script>

<style lang="scss" scoped>
#map {
  @apply h-screen z-0;
}

.new-marker-label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}

.new-marker-input {
  @apply block px-4 py-3 leading-5 border rounded-md mb-2 outline-none;
}

.new-marker-input-invalid {
  @apply border-red-500;
}

.new-marker-submit {
  @apply block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center outline-none w-full;
}
</style>