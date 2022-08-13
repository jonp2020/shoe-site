<template>
  <div class="">
    <ShoppingCartItems />
  </div>
</template>

<script>
// @ is an alias to /src
import ShoppingCartItems from "@/components/ShoppingCartItems.vue";

export default {
  name: "shoppingCart",
  components: {
    ShoppingCartItems,
  },
};
</script>
