<template>
  <div class="">
    <DisplayShoes :shoes="shoes" :gender="gender" />
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
    async getMensShoes() {
      const url = "http://localhost:4000/api/shoes/mens";
      const { data } = await axios.get(url);

      this.shoes = data;
    },
  },
  computed: {},
  mounted() {
    this.getMensShoes();
  },
};
</script>
