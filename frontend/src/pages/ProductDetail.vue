<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageName" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <button class="add-to-cart">Add to cart</button>
    </div>
  </div>
  <div v-if="!product">
    <NotFound />
  </div>
</template>

<script>
import { products } from "../data";
import NotFound from "./NotFound.vue";
export default {
  name: "PrudctDetail",
  data() {
    return {
      product: products.find((p) => p.id === this.$route.params.productId),
    };
  },
  components: {
    NotFound,
  },
};
</script>
