<template>
  <LeftPanel :url="url" />
  <Map @update-panel="onUpdatePanel" />
</template>

<script>
import Map from "./components/Map";
import LeftPanel from "./components/LeftPanel";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    Map,
    LeftPanel,
  },
  setup() {
    const url = ref("https://librewiki.net");
    const onUpdatePanel = (id) => {
      url.value = id;
    };
    return { url, onUpdatePanel };
  },
};
</script>
