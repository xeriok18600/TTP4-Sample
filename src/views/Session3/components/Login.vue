<template>
  <div>
    <div class="mb-2">
      <label class="mr-1">帳號</label>
      <input v-model="loginInfo.acc" type="text" />
    </div>
    <div class="">
      <label class="mr-1">密碼</label>
      <input v-model="loginInfo.passwd" type="password" />
    </div>
    <button
      class="py-2 w-full border text-white bg-green-500 mt-10"
      @click="doSomething"
    >
      登入
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        acc: "",
        passwd: "",
      },
    };
  },
  props: {
    registerInfo: Object,
  },
  methods: {
    doSomething() {
      this.$router.push({
        name: "User",
        params: { acc: this.loginInfo.acc, info: this.registerInfo },
      });
    },
  },
};
</script>
