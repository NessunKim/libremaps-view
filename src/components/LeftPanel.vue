<template>
  <div
    class="top-0 z-50 bg-white float-left shadow-2xl h-screen relative"
    :class="{ 'lg:w-4/12 w-11/12': open, 'w-0': !open }"
  >
    <iframe :src="url" class="w-full h-full" />
    <button
      class="bg-white absolute z-50 top-1/2 left-full shadow-2xl rounded-r-md w-7"
      @click="onClick"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        v-if="open"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        v-else
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const open = ref(false);

    const onClick = () => {
      open.value = !open.value;
      setTimeout(() => {
        window.map.invalidateSize();
      }, 200);
    };

    watch(
      () => props.url,
      () => {
        open.value = true;
      }
    );
    return { onClick, open };
  },
};
</script>
