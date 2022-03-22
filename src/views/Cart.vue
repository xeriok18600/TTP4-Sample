<template>
  <div class="container mx-auto my-10">
    <h1>購物清單</h1>
    <table class="table-fixed mx-auto mt-4">
      <thead>
        <tr>
          <th class="w-1/3">電影名稱</th>
          <th class="w-1/3">電影類型</th>
          <th class="w-1/3">價格</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },
  },
};
</script>
