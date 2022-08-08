<template>
  <section v-if="parsedShoe" class="container">
    <div class="main-images-container">
      <div class="small-img-container">
        <img
          v-for="(img, index) in smallImagesToDisplay"
          class="small-shoe-img"
          :src="img"
          alt="Shoe"
          :key="'smallImages_' + index"
          @click="
            shoeImageToDisplay =
              shoe.imageURL[selectedColour.toLowerCase()][index]
          "
        />
      </div>
    </div>

    <div>
      <img :src="shoeImageToDisplay" :alt="parsedShoe.name" class="main-img" />
    </div>

    <div class="sizes-container">
      <div class="shoe-name-price-container">
        <h1 class="shoe-name">{{ parsedShoe.name }}</h1>
        <p>£{{ parsedShoe.price }}</p>
      </div>
      <div>
        <ul class="sizes-info">
          <li class="size-header">Select colour:</li>
        </ul>
      </div>
      <div class="sizes-container">
        <ul class="sizes-info">
          <li class="size-guide">Size guide</li>
          <li class="size-header">Select size:</li>
        </ul>
        <ul class="sizes-list">
          <li
            class="size-item"
            v-for="(size, index) in getSizes"
            :key="'sizes_' + index"
            :class="{ outOfStock: !size[1] }"
            :title="!size[1] ? 'Out of stock' : `Size ${size[1]}`"
          >
            {{ size[0] }}
          </li>
        </ul>
      </div>
    </div>
    <div class="add-to-cart-btn">
      <button>Add to shopping cart</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["shoe"],
  data() {
    return {
      parsedShoe: null,
      shoeImageToDisplay: null,
      shoeColours: null,
      selectedColour: null,
    };
  },
  computed: {
    smallImagesToDisplay() {
      if (!this.shoeColours) return;

      return this.parsedShoe.imageURL[this.selectedColour.toLowerCase()];
    },
    getSizes() {
      if (!this.parsedShoe) return;

      const sizes = Object.entries(
        this.parsedShoe.sizes_availability[this.selectedColour.toLowerCase()]
      );

      return sizes;
    },
  },
  mounted() {
    console.warn(this.shoe);
    if (this.shoe) {
      this.parsedShoe = JSON.parse(this.shoe);
      const colourKeys = Object.keys(this.parsedShoe.imageURL);
      this.shoeColours = colourKeys;
      this.selectedColour = this.shoeColours[0];
      this.shoeImageToDisplay =
        this.parsedShoe.imageURL[this.selectedColour][0];
    }
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 20% 35% 45%;
}
.main-images-container {
  display: flex;
}

.small-img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-img {
  width: 100%;
  height: auto;
}

.small-shoe-img {
  width: 40%;
  height: auto;
  margin: 0 0.2rem;
  border: 1px solid #d8d4d4;
  cursor: pointer;
  margin: 0.3rem;
}

.shoe-name-price-container {
}

.sizes-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.sizes-info {
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}

.size-header {
  margin-left: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
}

.size-guide {
  color: rgb(55, 55, 224);
  margin-left: 0.5rem;
  cursor: pointer;
}
.size-item {
  padding: 2rem;
  width: 2rem;
  background-color: rgb(250, 183, 57);
  margin: 0.5rem;
  font-size: 1.2rem;
  cursor: pointer;
}

.outOfStock {
  text-decoration: line-through;
  background-color: rgb(246, 227, 192);
  cursor: default;
}

.size-guide {
  color: rgb(63, 63, 170);
}

.add-to-cart-btn {
  grid-column: 3;
}

.add-to-cart-btn button {
  padding: 2rem;
  font-size: 1.5rem;
  background-color: orange;
  border: 1px solid orange;
}
</style>
