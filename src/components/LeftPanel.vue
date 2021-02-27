<template>
  <div class="top-0 z-50 bg-white float-left shadow-xl h-screen relative">
    <iframe :src="url" class="w-full h-full" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
  },
};
</script>
