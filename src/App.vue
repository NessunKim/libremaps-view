<template>
  <LeftPanel />
  <Map />
</template>

<script>
import Map from "./components/Map";
import LeftPanel from "./components/LeftPanel";

export default {
  name: "App",
  components: {
    Map,
    LeftPanel,
  },
};
</script>
