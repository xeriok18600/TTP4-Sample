<template>
  <div class="container p-8 mx-auto">
    <h1 class="text-green-500 text-6xl mb-20">Session 2 - 猜猜樂</h1>
    <h3 class="text-xl">{{ finish ? `恭喜猜中${num}` : `請猜出${num}` }}</h3>
    <div class="grid grid-cols-4 gap-4 h-full">
      <!-- 沒有用元件的做法 -->
      <!-- <div
        v-for="item in newArr"
        :key="item.value"
        @click="clickCard(item)"
        :class="[
          'text-4xl',
          'flex',
          'flex-col',
          'p-2',
          'border',
          'justify-center',
          'items-center',
          'h-96',
          'bg-green-500',
          'cursor-pointer',
          item.isClick ? 'text-white' : 'text-black',
        ]"
      >
        {{ item.value }}
      </div> -->

      <card
        @clickCard="clickCard"
        v-for="item in newArr"
        :key="item"
        :text="item"
      >
        <template #default="{ isClick }">
          <transition name="fade" mode="out-in">
            <span :key="isClick">{{ isClick ? item : "請翻牌" }}</span>
          </transition>
        </template>
      </card>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import Card from "../Session2/components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      arr: [1, 2, 3, 4],
      // 沒有用元件得做法
      // arr: [
      //   {
      //     value: 1,
      //     isClick: false,
      //   },
      //   {
      //     value: 2,
      //     isClick: false,
      //   },
      //   {
      //     value: 3,
      //     isClick: false,
      //   },
      //   {
      //     value: 4,
      //     isClick: false,
      //   },
      // ],
      cardValue: "",
    };
  },
  mounted() {},
  computed: {
    newArr() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.arr.sort((x) => Math.random(x.value) - 0.5);
    },
    num() {
      return Math.floor(Math.random() * 3) + 1;
    },
    finish() {
      return this.cardValue === this.num;
    },
  },
  methods: {
    clickCard(v) {
      this.cardValue = v;
    },
  },
};
</script>
