<template>
  <section class="shoes-container">
    <ShoeCard
      v-for="(shoe, index) in sortedShoes"
      :key="'shoe_' + index"
      :shoe="shoe"
      class="shoe-comp"
    />
  </section>
</template>

<script>
import ShoeCard from "./ShoeCard";
export default {
  components: { ShoeCard },
  props: ["shoes"],
  computed: {
    sortedShoes() {
      if (!this.shoes) return;

      return this.shoes;
    },
  },
};
</script>

<style scoped>
.shoes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.shoe-comp {
  width: 20rem;
}
</style>
