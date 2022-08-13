<template>
  <div class="container" v-if="shoes">
    <DisplayShoes :shoes="shoes" :gender="shoes[0].gender" />
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
    async getKidsShoes() {
      const url = "http://localhost:4000/api/shoes/kids";
      const { data } = await axios.get(url);

      this.shoes = data;
    },
  },
  computed: {},
  mounted() {
    this.getKidsShoes();
  },
};
</script>
