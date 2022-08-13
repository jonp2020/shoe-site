<template>
  <div class="shoe-display-container" v-if="shoes">
    <transition name="displayShoes">
      <DisplayShoes :shoes="shoes" :gender="shoes[0].gender" />
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import DisplayShoes from "../components/DisplayShoes";

export default {
  name: "womensShoes",
  components: { DisplayShoes },
  data() {
    return {
      shoes: null,
    };
  },
  methods: {
    async getWomensShoes() {
      const url = "http://localhost:4000/api/shoes/womens";
      const { data } = await axios.get(url);

      this.shoes = data;
    },
  },
  computed: {
    check() {
      return "Checking";
    },
  },
  mounted() {
    this.getWomensShoes();
  },
};
</script>

<style scoped>
.shoe-display-container {
}
</style>
