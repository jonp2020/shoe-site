<template>
  <section v-if="!cartItems.length" class="main-container">
    <h1 class="header-title">Your Cart is Empty</h1>
    <div class="shop-links-container">
      <div class="empty-cart-image-container">
        <router-link to="/womens">
          <img
            class="empty-cart-banner-img"
            src="../assets/walking-small.jpg"
            alt=""
          />
        </router-link>

        <router-link to="/womens" class="shopping-link">
          <button class="shop-links-btn">Shop Womens</button>
        </router-link>
      </div>

      <div class="empty-cart-image-container">
        <router-link to="/mens">
          <img
            class="empty-cart-banner-img"
            src="../assets/mountain-small.jpg"
            alt=""
          />
        </router-link>

        <router-link to="/mens" class="shopping-link">
          <button class="shop-links-btn">Shop Mens</button>
        </router-link>
      </div>

      <div class="empty-cart-image-container">
        <router-link to="/kids">
          <img
            class="empty-cart-banner-img"
            src="../assets/children-small.jpg"
            alt=""
          />
        </router-link>

        <router-link to="/kids" class="shopping-link">
          <button class="shop-links-btn">Shop Kids</button>
        </router-link>
      </div>
    </div>
  </section>
  <section v-else>
    <h1 class="header-title">Your Items</h1>
    <h4>Total: £{{ getTotalAmount }}</h4>

    <router-link to="/checkout">
      <button class="checkout-btn">Checkout Now</button>
    </router-link>

    <div class="cart-item-info-container">
      <div
        class="cart-item-info-text"
        v-for="(item, index) in cartItems"
        :key="'shoeItem_' + index"
      >
        <div>
          <img :src="item.shoeImage" alt="" class="shoe-cart-img" />
        </div>
        <div>
          <p class="cart-info-shoe-name">
            <strong>{{ item.shoeName }}</strong>
          </p>
          <p style="text-transform: capitalize">
            Colour: <strong>{{ item.selectedColour }}</strong>
          </p>
          <p>
            Size: <strong>{{ item.selectedSize.replace(/_/, ".") }}</strong>
          </p>
          <p>
            Price:
            <strong>£{{ item.pricePerPair }}</strong>
          </p>
          <p>
            Quantity: <strong>{{ item.quantity }}</strong>
          </p>
        </div>
      </div>
    </div>

    <h4 class="cart-info-total-price">
      Total:
      <strong>£{{ getTotalAmount }}</strong>
    </h4>
    <router-link to="/checkout">
      <button class="checkout-btn">Checkout Now</button>
    </router-link>
  </section>
</template>

<script>
export default {
  props: [""],
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    getTotalAmount() {
      if (!this.cartItems.length) return;

      return this.cartItems.reduce((a, b) => a + b.total, 0);
    },
  },
  mounted() {
    this.cartItems = this.$store.getters.getBasketItems
      ? this.$store.getters.getBasketItems
      : [];
  },
};
</script>

<style scoped>
.main-container {
  width: 90%;
  margin: 0 auto;
}
.header-title {
  font-size: 2rem;
}

.shop-links-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.shop-links-btn {
  padding: 1rem;
  font-size: 1.5rem;
  background-color: orange;
  border: 1px solid orange;
  color: #000;
  cursor: pointer;
  width: 100%;
}

.empty-cart-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-top: 2rem;
  gap: 0.5rem;
  flex: 1;
}

.empty-cart-banner-img {
  width: 80%;
  height: auto;
}

.shopping-link {
  width: 80%;
}

.cart-item-info-text {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1rem auto;
  border: 1px solid #000;
}

.checkout-btn {
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: orange;
  border: 1px solid orange;
  color: #000;
  cursor: pointer;
  width: 50%;
}

.checkout-btn:hover {
  background-color: #a7a5a1;
  border: 1px solid #a7a5a1;
  transition: 0.3s;
}

.shoe-cart-img {
  width: 100%;
  height: auto;
}
</style>
