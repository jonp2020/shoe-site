<template>
  <section class="loader-section" v-if="loading">
    <div class="loader"></div>
  </section>
  <section v-else>
    <div class="filters-container">
      <p>Filters <i class="fa-solid fa-arrow-down-wide-short"></i></p>
      <select
        class="custom-select custom-select-lg mb-3 select-items"
        v-model="selectedBrand"
        @change="sortByBrand"
      >
        <option selected>Brand</option>
        <option value="all">All</option>
        <option v-for="brand in brands" :key="brand" :value="brand">
          {{ brand }}
        </option>
      </select>
      <select
        class="custom-select custom-select-lg mb-3"
        v-model="selectedPrice"
        @change="sortByPrice"
      >
        <option selected>Price</option>
        <option value="highest">Highest</option>
        <option value="lowest">Lowest</option>
      </select>
    </div>
    <div class="shoes-container">
      <ShoeCard
        v-for="(shoe, index) in sortedShoes"
        :key="'shoe_' + shoe.brand + '_' + shoe.price + '_' + index"
        :shoe="shoe"
        class="shoe-comp"
      />
    </div>
  </section>
</template>

<script>
import ShoeCard from "./ShoeCard";
export default {
  components: { ShoeCard },
  props: ["shoes"],
  data() {
    return {
      selectedBrand: "Brand",
      selectedPrice: "Price",
      brands: null,
      categories: null,
      sortedShoes: null,
      loading: false,
    };
  },
  methods: {
    getBrands() {
      if (!this.shoes) return;
      const brands = this.shoes.map((item) => item.brand.toLowerCase());
      const uniqueBrands = [...new Set(brands)];
      this.brands = uniqueBrands;
    },
    getCategories() {
      if (!this.shoes) return;
      const categories = this.shoes.map((item) => item.category.toLowerCase());
      const uniqueCategories = [...new Set(categories)];
      this.categories = uniqueCategories;
    },
    sortByBrand() {
      if (
        this.selectedBrand.toLowerCase() === "brand" ||
        this.selectedBrand.toLowerCase() === "all"
      ) {
        return (this.sortedShoes = this.shoes);
      }

      const filteredBrands = this.shoes.filter((item) => {
        return item.brand.toLowerCase() === this.selectedBrand.toLowerCase();
      });
      this.sortedShoes = filteredBrands;
    },
    sortByPrice() {
      if (this.selectedPrice === "Price") return;

      if (this.selectedPrice === "lowest") {
        return this.sortedShoes.sort((a, b) => a.price - b.price);
      } else {
        return this.sortedShoes.sort((a, b) => b.price - a.price);
      }
    },
  },
  computed: {},
  mounted() {
    this.loading = true;

    if (this.shoes) {
      this.getBrands();
      this.getCategories();
      this.sortedShoes = this.shoes;
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.shoes-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

.shoe-comp {
  width: 20rem;
}

.filters-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

select {
  width: 7.5rem;
}

.select-items {
  text-transform: capitalize;
}

.loader-section {
  /* height: 50rem; */
}

.loader {
  border: 0.5rem solid #f3f3f3; /* Light grey */
  border-top: 0.5rem solid orange; /* Blue */
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  animation: spin 2s linear infinite;
  margin: 1rem auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
