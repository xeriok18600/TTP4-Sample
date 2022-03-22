<template>
  <div>
    <div class="mb-2">
      <label class="mr-1">帳號</label>
      <input type="text" v-model="registerInfo.acc" />
    </div>
    <div class="mb-2">
      <label class="mr-1">密碼</label>
      <input type="password" v-model="registerInfo.passwd" />
    </div>
    <div class="">
      <label class="mr-1">姓名</label>
      <input type="text" v-model="registerInfo.name" />
    </div>
    <button
      class="py-2 w-full border text-white bg-green-500 mt-10"
      @click="doSomething"
    >
      註冊
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerInfo: {
        acc: "",
        passwd: "",
        name: "",
      },
    };
  },
  methods: {
    doSomething() {
      this.$emit("register", this.registerInfo);
    },
  },
};
</script>
