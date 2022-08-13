<template>
  <div v-if="shoe" class="shoe-card-container">
    <transition name="mainShoeImg" appear>
      <div class="img-container">
        <router-link
          :to="{
            name: 'individualShoeCard',
            params: {
              slug: `${getSlug}`,
              shoe: JSON.stringify(shoe),
            },
          }"
          :shoe="shoe"
          ><img
            class="main-shoe-img"
            :src="shoeImageToDisplay"
            alt="Main picture of shoe"
        /></router-link>
      </div>
    </transition>
    <div>
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
    <p>{{ shoe.name }}</p>
    <p>£{{ shoe.price }}</p>
    <p>
      Colours:
      <span
        v-for="(colour, colourIndex) in displayShoeColours"
        :key="'colours_' + colourIndex"
        @click="
          (selectedColour = colour), setImageToDisplay(colour.toLowerCase())
        "
        class="shoe-colour-list-item"
        :class="{
          highlightColour:
            selectedColour.toLowerCase() === colour.toLowerCase(),
        }"
        >{{ colour }}
        {{ colourIndex === displayShoeColours.length - 1 ? "" : " | " }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["shoe", "gender"],
  data() {
    return {
      shoeImageToDisplay: null,
      shoeColours: null,
      selectedColour: null,
    };
  },
  methods: {
    setImageToDisplay(colour) {
      this.shoeImageToDisplay = this.shoe.imageURL[colour][0];
    },
  },
  computed: {
    getSlug() {
      if (!this.shoeColours) return;

      if (this.shoe.slug) {
        return this.shoe.slug;
      } else {
        return this.shoe.name.toLowerCase().split(" ").join("-");
      }
    },
    displayShoeColours() {
      if (!this.shoeColours) return;

      return this.shoeColours.map(
        (item) => item[0].toUpperCase() + item.slice(1)
      );
    },
    smallImagesToDisplay() {
      if (!this.shoeColours) return;

      return this.shoe.imageURL[this.selectedColour.toLowerCase()];
    },
  },
  mounted() {
    if (this.shoe) {
      const colourKeys = Object.keys(this.shoe.imageURL);
      this.shoeColours = colourKeys;
      this.selectedColour = this.shoeColours[0];
      this.shoeImageToDisplay = this.shoe.imageURL[this.selectedColour][0];
    }
  },
};
</script>

<style scoped>
.main-shoe-img {
  width: 90%;
  height: auto;
  cursor: pointer;
  border: 1px solid #d8d4d4;
}

.shoe-card-container {
  /* background-color: grey; */
}

.img-container {
}

.shoe-colour-list-item {
  cursor: pointer;
}

.highlightColour {
  font-weight: 900;
}

.small-shoe-img {
  width: 15%;
  height: auto;
  margin: 0 0.2rem;
  border: 1px solid #d8d4d4;
  cursor: pointer;
}
</style>
