<template>
  <div
    class="context-menu bg-white shadow-xl p-5"
    v-show="show"
    :style="style"
    ref="menu"
    tabindex="0"
    @blur="close"
  >
    <slot></slot>
  </div>
</template>

<script>
import { nextTick, computed, reactive, ref, toRefs } from "vue";

export default {
  setup(props, { emit }) {
    const menu = ref(null);

    const state = reactive({
      left: 0,
      top: 0,
      show: false,
      style: computed(() => ({
        top: state.top + "px",
        left: state.left + "px",
      })),
    });
    const close = (event) => {
      if (event.currentTarget.contains(event.relatedTarget)) {
        return;
      }
      state.show = false;
      state.left = 0;
      state.top = 0;
      emit("closed");
    };
    const open = async ({ x, y }) => {
      state.left = x;
      state.top = y;
      state.show = true;
      await nextTick();
      if (menu.value.offsetTop + menu.value.offsetHeight > window.innerHeight) {
        state.top = window.innerHeight - menu.value.offsetHeight;
        state.left += 30;
      }
      if (menu.value.offsetLeft + menu.value.offsetWidth > window.innerWidth) {
        state.left = x - menu.value.offsetWidth - 30;
      }
      menu.value.focus();
    };
    return { ...toRefs(state), close, open, menu };
  },
};
</script>

<style lang="scss" scoped>
.context-menu {
  position: fixed;
  z-index: 9999;
  outline: none;
}
</style>