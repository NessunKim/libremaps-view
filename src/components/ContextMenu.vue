<template>
  <div
    class="context-menu"
    v-show="state.show"
    :style="state.style"
    ref="context"
    tabindex="0"
    @blur="close"
  >
    <slot></slot>
  </div>
</template>

<script>
import { nextTick, computed, reactive, ref } from "vue";

export default {
  setup() {
    const context = ref(null);

    const state = reactive({
      left: 0,
      top: 0,
      show: false,
      style: computed(() => ({
        top: state.top + "px",
        left: state.left + "px",
      })),
    });
    const close = () => {
      state.show = false;
      state.left = 0;
      state.top = 0;
    };
    const open = async ({ x, y }) => {
      state.left = x;
      state.top = y;
      await nextTick();
      context.value.focus();
      state.show = true;
    };
    return { state, close, open, context };
  },
};
</script>

<style lang="scss" scoped>
.context-menu {
  position: fixed;
  background: white;
  z-index: 999;
  outline: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  ::v-deep ul {
    padding: 1rem;
    margin: 0;
    list-style-type: none;
  }
}
</style>