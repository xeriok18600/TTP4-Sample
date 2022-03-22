<template>
  <div class="mt-60">
    <label for="message">請輸入訊息</label>
    <input type="text" v-model="msg" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue.js!",
    };
  },
  beforeCreate() {
    console.log("=== beforeCreate! === ");
    console.log(`this.msg: ${this.msg}`);
    console.log(`this.$el: ${this.$el.querySelector("h1")}`);
  },
  created() {
    console.log("=== created! === ");
    console.log(`this.msg: ${this.msg}`);
    console.log(`this.$el: ${this.$el.querySelector("h1")}`);
  },
  beforeMount() {
    console.log("=== beforeMount! === ");
    console.log(`this.msg: ${this.msg}`);
    console.log(`this.$el: ${this.$el.querySelector("h1")}`);
  },
  mounted() {
    console.log("=== mounted! === ");
    console.log(`this.msg: ${this.msg}`);
    console.log(`this.$el: ${this.$el.querySelector("h1")}`);
  },
  beforeUpdate() {
    console.log("beforeUpdate called");
  },
  updated() {
    console.log("update called");
  },
};
</script>
