<template>
  <h1>Products</h1>
  <ProductList :products="products" />
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import { products } from "../data";

export default {
  name: "Products",
  data() {
    return {
      products,
    };
  },
  components: {
    ProductList,
  },
};
</script>
