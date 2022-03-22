<template>
  <div class="container p-8 mx-auto">
    <h1 class="text-green-500 text-6xl mb-20">Session 1 - 金額計算</h1>
    <div class="max-w-lg mx-auto border">
      <div class="text-left p-4">
        <div class="my-4">
          庫存
          <input class="border" v-model="stock" type="number" />
        </div>
        <hr />
        <h3 class="mt-4">商品名稱: PS5</h3>
        <div class="my-4">
          數量
          <select v-model="num" class="border">
            <option v-for="item in 9" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
          <p
            :class="[
              'text-xs',
              'mt-1',
              text ? 'text-green-500' : 'text-red-600',
            ]"
          >
            {{ text ? "尚有庫存" : "無庫存" }}
          </p>
        </div>

        <div>
          價格
          <input v-model="price" class="border" type="number" />
        </div>
        <h1 class="text-xl mt-4">總價格: {{ sum }}</h1>
        <p class="text-xs mt-1 my-4 text-green-500">
          {{ num >= 3 ? "打九折" : "購買三台以上打九折喔~" }}
        </p>
        <button
          @click="calculate"
          v-if="text"
          class="py-2 block text-white bg-green-500 w-full"
        >
          {{ btnText }}
        </button>
        <div class="text-red-600" v-else>庫存不足，無法結帳</div>
      </div>
    </div>
  </div>
</template>

<script>
// 非同步延遲, 詳細可 google promise setimeout
const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export default {
  data() {
    return {
      num: 1,
      price: 15000,
      stock: 1,
      btnText: "結帳",
    };
  },
  mounted() {
    this.getRandom();
  },
  computed: {
    // 數量大於 3打9折, 不然就原價
    sum() {
      if (this.num >= 3) return this.num * this.price * 0.9;
      else return this.num * this.price;
    },
    text() {
      // 判斷庫存是否大於購買數量
      return this.num <= this.stock;
    },
  },
  methods: {
    async calculate() {
      this.btnText = "付款中....";
      await delay(3000);
      alert("付款完成 !!");
      this.btnText = "結帳";
    },
    getRandom() {
      this.stock = Math.floor(Math.random() * 8) + 1;
    },
  },
};
</script>
