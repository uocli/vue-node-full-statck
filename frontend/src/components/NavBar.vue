<template>
  <router-link to="/products" class="products-link">
    <div class="nar-bar">
      <div class="logo-wrap">
        <img :src="logo" />
      </div>
    </div>
  </router-link>
  <router-link to="/cart" class="cart-link">
    <button class="cart">Shopping Cart</button>
  </router-link>
</template>

<script>
import logo from "@/assets/logo-hexagon.svg";
export default {
  name: "NavBar",
  data() {
    return {
      logo,
    };
  },
};
</script>
