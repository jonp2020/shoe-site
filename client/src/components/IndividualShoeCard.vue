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
              parsedShoe.imageURL[selectedColour.toLowerCase()][index]
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
        <p class="price">£{{ parsedShoe.price }}</p>
      </div>
      <div>
        <ul class="sizes-info">
          <li class="size-header">Select colour:</li>
        </ul>
        <ul class="sizes-list">
          <li
            class="colour-item"
            v-for="(colour, colour_index) in shoeColours"
            :key="'colour_' + colour_index"
            :class="{
              selectedItem: selectedColour === colour.toLowerCase(),
            }"
            @click="
              (selectedColour = colour.toLowerCase()),
                (shoeImageToDisplay =
                  parsedShoe.imageURL[selectedColour.toLowerCase()][0])
            "
          >
            {{ colour }}
          </li>
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
            :class="{
              outOfStock: !size[1],
              selectedItem: selectedSize === size[0],
            }"
            :title="!size[1] ? 'Out of stock' : `Size ${size[0]}`"
            @click="selectSize(size)"
          >
            {{ size[0].replace(/_/, ".") }}
          </li>
        </ul>
      </div>

      <div class="quantity-container">
        <ul class="sizes-info">
          <li class="size-header">Quantity:</li>
          <li class="size-quantity-header">
            <span @click="minusQuantity"
              ><i class="fa-solid fa-square-minus"></i
            ></span>
            {{ selectedQuantity }}
            <span @click="addQuantity"
              ><i class="fa-solid fa-square-plus"></i
            ></span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="add-to-cart-btn"
      :class="{
        addToCartBtnActive:
          selectedSize && selectedColour && selectedQuantity > 0,
      }"
    >
      <p v-if="selectionMessage">{{ selectionMessage }}</p>
      <button class="" @click="addToCart">Add to shopping cart</button>
    </div>

    <transition name="cartModal">
      <div class="added-to-cart-modal-outer" v-if="updatedCart">
        <div class="added-to-cart-modal-inner">
          <p class="update-cart-header">Your shopping cart has been updated</p>
          <div class="cart-item-info-container">
            <img class="shoe-img-for-cart" :src="basketItem.shoeImage" alt="" />
            <div class="cart-item-info-text">
              <p class="cart-info-shoe-name">
                <strong>{{ basketItem.shoeName }}</strong>
              </p>
              <p style="text-transform: capitalize">
                Colour: <strong>{{ basketItem.selectedColour }}</strong>
              </p>
              <p>
                Size:
                <strong>{{ basketItem.selectedSize.replace(/_/, ".") }}</strong>
              </p>
              <p>
                Price:
                <strong>£{{ basketItem.pricePerPair }}</strong>
              </p>
              <p>
                Quantity: <strong>{{ basketItem.quantity }}</strong>
              </p>
              <p class="cart-info-total-price">
                Total:
                <strong
                  >£{{
                    this.basketItem.pricePerPair * this.basketItem.quantity
                  }}</strong
                >
              </p>
            </div>
          </div>
          <button class="close-modal-btn" title="Close" @click="closeModal">
            <i class="fa-solid fa-square-xmark"></i>
          </button>
          <router-link to="/cart"
            ><button class="continue-to-cart-btn">
              Continue to cart
            </button></router-link
          >
        </div>
      </div>
    </transition>
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
      selectedSize: null,
      selectionMessage: null,
      selectedQuantity: 0,
      basketItem: {},
      updatedCart: false,
    };
  },
  methods: {
    selectSize(size) {
      if (size[1]) {
        this.selectedSize = size[0];
      }
    },
    addToCart() {
      this.selectionMessage = null;
      if (!this.selectedColour)
        return (this.selectionMessage = "Please choose a colour.");
      if (!this.selectedSize)
        return (this.selectionMessage = "Please choose a size.");

      const basket = {};

      basket.shoeId = this.parsedShoe._id;
      basket.shoeName = this.parsedShoe.name;
      basket.shoeBrand = this.parsedShoe.brand;
      basket.selectedColour = this.selectedColour;
      basket.selectedSize = this.selectedSize;
      basket.pricePerPair = this.parsedShoe.price;
      basket.quantity = this.selectedQuantity;
      basket.shoeImage = this.parsedShoe.imageURL[this.selectedColour][0];
      basket.total = this.parsedShoe.price * this.selectedQuantity;

      this.basketItem = basket;
      this.$store.commit("addToBasket", basket);

      this.updatedCart = true;
    },
    minusQuantity() {
      console.warn("here in minus");
      if (this.selectedQuantity === 0) return;
      if (!this.quantityAvailable) return;

      return this.selectedQuantity--;
    },
    addQuantity() {
      if (this.selectedQuantity >= this.quantityAvailable) return;
      if (!this.quantityAvailable) return;

      return this.selectedQuantity++;
    },
    closeModal() {
      this.updatedCart = false;
      this.selectedSize = null;
      this.selectionMessage = null;
      this.selectedQuantity = 0;
      this.basketItem = {};
    },
  },
  computed: {
    quantityAvailable() {
      if (!this.parsedShoe) return 0;

      if (!this.selectedSize && !this.selectedColour) return 0;

      return this.parsedShoe.sizes_availability[this.selectedColour][
        this.selectedSize
      ];
    },
    smallImagesToDisplay() {
      if (!this.shoeColours) return;

      return this.parsedShoe.imageURL[this.selectedColour.toLowerCase()];
    },
    getSizes() {
      if (!this.parsedShoe) return;

      const sizes = Object.entries(
        this.parsedShoe.sizes_availability[this.selectedColour.toLowerCase()]
      );

      return sizes.sort((a, b) => {
        let prevVal = a[0];
        let currentVal = b[0];
        if (prevVal.indexOf("_") !== -1) {
          prevVal = prevVal.replace(/_/g, ".");
        }
        if (currentVal.indexOf("_") !== -1) {
          currentVal = currentVal.replace(/_/g, ".");
        }
        return prevVal - currentVal;
      });
    },
  },
  mounted() {
    if (this.shoe) {
      this.parsedShoe = JSON.parse(this.shoe);
      const colourKeys = Object.keys(this.parsedShoe.imageURL);
      this.shoeColours = colourKeys;
      this.selectedColour = this.shoeColours[0];
      this.shoeImageToDisplay =
        this.parsedShoe.imageURL[this.selectedColour][0];
      this.$store.commit("addToIndividualShoe", this.parsedShoe);
    } else {
      this.parsedShoe = this.$store.getters.getIndividualShoe[0];
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
  justify-content: flex-start;
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

.price {
  font-size: 1.3rem;
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
.size-quantity-header {
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.7rem;
  font-weight: 700;
}

.size-guide {
  color: rgb(55, 55, 224);
  margin-left: 0.5rem;
  cursor: pointer;
}
.size-item {
  padding: 0.5rem;
  width: 4rem;
  background-color: rgb(250, 183, 57);
  margin: 0.5rem;
  font-size: 1.2rem;
  border: 2px solid transparent;
  cursor: pointer;
}

.size-item:hover {
  border: 2px solid blue;
}

.colour-item {
  margin: 0.5rem;
  background-color: rgb(250, 183, 57);
  padding: 1rem;
  text-transform: capitalize;
  cursor: pointer;
}

.selectedItem {
  border: 2px solid blue;
}

.outOfStock {
  text-decoration: line-through;
  background-color: rgb(246, 227, 192);
  cursor: default;
}
.outOfStock:hover {
  border: 2px solid transparent;
}

.size-guide {
  color: rgb(63, 63, 170);
}

.add-to-cart-btn {
  grid-column: 3;
}
.add-to-cart-btn button {
  grid-column: 3;
  padding: 2rem;
  font-size: 1.5rem;
  background-color: rgb(240, 240, 246);
  border: 1px solid rgb(224, 224, 234);
  color: rgb(72, 72, 74);
}

.addToCartBtnActive button {
  padding: 2rem;
  font-size: 1.5rem;
  background-color: orange;
  border: 1px solid orange;
  color: #000;
  cursor: pointer;
}

.fa-square-minus,
.fa-square-plus {
  color: orange;
  font-size: 1.5rem;
  cursor: pointer;
}

.fa-square-minus {
  margin-right: 2rem;
}
.fa-square-plus {
  margin: 0 2rem;
}

.quantity-container {
  user-select: none;
}

.added-to-cart-modal-outer {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.added-to-cart-modal-inner {
  position: relative;
  background-color: #fefefe;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.update-cart-header {
  margin-bottom: 2.5rem;
}

.close-modal-btn {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
}

.continue-to-cart-btn {
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  font-size: 1.5rem;
  background-color: orange;
  border: 1px solid orange;
  color: #000;
  cursor: pointer;
}

.continue-to-cart-btn:hover {
  background-color: #a7a5a1;
  border: 1px solid #a7a5a1;
  transition: 0.3s;
}

.cart-item-info-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.cart-info-shoe-name {
  margin-top: 0;
}

.shoe-img-for-cart {
  width: 20%;
  height: auto;
}

.cart-item-info-text {
  text-align: left;
}

.cart-info-total-price {
  font-size: 1.5rem;
}

.cartModal-enter-from,
.cartModal-leave-to {
  opacity: 0;
}

.cartModal-enter-active,
.cartModal-leave-to {
  transition: opacity 0.75s ease;
}

@media only screen and (max-width: 900px) {
  .cart-item-info-container {
    flex-direction: column;
    align-items: center;
  }
  .cart-item-info-text {
    text-align: center;
  }
  .continue-to-cart-btn {
    padding: 0.5rem;
  }
}

@media only screen and (max-width: 800px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .small-img-container {
    flex-direction: row;
    justify-content: center;
  }
  .small-shoe-img {
    width: 20%;
  }
  .main-img {
    width: 50%;
  }
  .main-images-container {
    order: 2;
    margin: 1rem 0;
  }
  .sizes-container {
    order: 3;
  }
  .add-to-cart-btn {
    order: 4;
  }
}
</style>
