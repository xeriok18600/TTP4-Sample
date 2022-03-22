<template>
  <div class="container p-8 mx-auto">
    <h1 class="text-green-500 text-6xl mb-20">Session 4 - 購物車</h1>
    <div class="grid grid-cols-5 gap-2">
      <div class="border rounded-lg bg-green-500" style="height: 300px">
        <div
          class="flex justify-center items-center h-full text-white cursor-pointer"
          @click="$router.push({ name: 'Cart' })"
        >
          購物車
        </div>
      </div>
      <div
        v-for="item in products"
        :key="item.name"
        class="border relative rounded-lg"
        style="height: 300px"
      >
        <img :src="item.cover" class="absolute card-img rounded-lg" />
        <div class="h-full flex flex-col justify-center content-center">
          <h3>{{ item.name }}</h3>
          <span>{{ item.type }}</span>
          <p>{{ item.price }}元</p>
        </div>
        <button
          class="absolute card-btn py-2 bg-green-500 text-white cursor-pointer"
          @click="addCart(item)"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-img {
  width: 128px;
  height: 128px;
  top: -25%;
  left: 50%;
  transform: translate(-50%, 25%);
}

.card-btn {
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>

<script>
// import { mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      products: [],
    };
  },
  computed: {},
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      // async + await + axios
      const { data } = await this.axios(
        "https://awiclass.monoame.com/api/command.php?type=get&name=movies"
      );
      // async + await + fetch
      // const data = await fetch(
      //   "https://awiclass.monoame.com/api/command.php?type=get&name=movies"
      // ).then(async (res) => await res.json());

      // async + await + fetch
      // const res = await fetch(
      //   "https://awiclass.monoame.com/api/command.php?type=get&name=movies"
      // );
      // const data = await res.json();

      this.products = [...data];
    },
    addCart(v) {
      this.$store.commit("cart/addCart", v);
    },
  },
};
</script>
