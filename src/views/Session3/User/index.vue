<template>
  <div>
    <h1>哈囉 {{ acc }} 歡迎登入</h1>
    <h1>哈囉 {{ $route.path }} 歡迎登入</h1>
  </div>
</template>

<script>
export default {
  props: ["acc"],
};
</script>
