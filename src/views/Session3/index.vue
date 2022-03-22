<template>
  <div class="container p-8 mx-auto">
    <h1 class="text-green-500 text-6xl mb-20">Session 3 - 登入＆註冊</h1>
    <div class="border w-80 mx-auto">
      <div class="flex justify-center mb-8 pt-0">
        <button
          :class="[
            'py-2',
            'text-center',
            'w-full',
            'border',
            isRegister === 'Login' ? 'text-green-500' : '',
          ]"
          @click="isRegister = 'Login'"
        >
          登入頁
        </button>
        <button
          :class="[
            'py-2',
            'text-center',
            'w-full',
            'border',
            isRegister === 'Register' ? 'text-green-500' : '',
          ]"
          @click="isRegister = 'Register'"
        >
          註冊頁
        </button>
      </div>
      <component
        :is="nowComponent"
        @register="register"
        :registerInfo="registerInfo"
      ></component>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Register from "../Session3/components/Register.vue";
import Login from "../Session3/components/Login.vue";

export default {
  components: {
    Register,
    Login,
  },
  data() {
    return {
      isRegister: "Register",
      registerInfo: {
        acc: "",
        passwd: "",
        name: "",
      },
    };
  },
  computed: {
    nowComponent() {
      return this.isRegister.toLowerCase();
    },
  },
  methods: {
    register(v) {
      this.registerInfo = { ...v };
    },
  },
};
</script>
