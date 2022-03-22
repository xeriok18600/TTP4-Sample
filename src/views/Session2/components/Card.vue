<template>
  <!-- text-opacity-0 -->
  <div
    @click="clickCard"
    class="text-4xl text-white flex flex-col p-2 border justify-center items-center h-96 bg-green-500 cursor-pointer"
  >
    <slot name="default" :isClick="isClick" :text="text"> </slot>
  </div>
</template>

<script>
export default {
  props: {
    text: Number,
  },
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    clickCard() {
      if (this.isClick) {
        return true;
      } else {
        this.$emit("clickCard", this.text);
        this.isClick = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
