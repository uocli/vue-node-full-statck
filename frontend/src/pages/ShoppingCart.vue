<template>
  <h1>Shopping Cart</h1>
  <div v-if="cartItems.length > 0">
    <CartList :cartItems="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0">You currently have no items in your cart!</div>
</template>

<script>
import CartList from "@/components/CartList.vue";
import { cartItems } from "../data";
export default {
  name: "ShoppingCart",
  data() {
    return {
      cartItems,
    };
  },
  components: {
    CartList,
  },
};
</script>
