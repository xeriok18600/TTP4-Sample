<template>
  <div class="container p-8 mx-auto">
    <h1 class="text-green-500 text-6xl my-20">課程範例</h1>
    <button
      class="mx-2 border py-1 px-3 text-xl hover:bg-green-500 hover:text-white"
      v-for="(item, key) in routerArr"
      :key="key"
      @click="goRouter(item)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      routerArr: ["Session1", "Session2", "Session3", "Session4"],
    };
  },
  methods: {
    goRouter(v) {
      // 跳頁
      this.$router.push({ name: v });
    },
  },
};
</script>
