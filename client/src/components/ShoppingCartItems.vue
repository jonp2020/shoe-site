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

    <button class="checkout-btn">Checkout Now</button>

    <div class="cart-item-info-container">
      <!-- <img class="shoe-img-for-cart" :src="" alt="" /> -->
      <div class="cart-item-info-text">
        <p class="cart-info-shoe-name">
          <strong>Name</strong>
        </p>
        <p style="text-transform: capitalize">Colour: <strong></strong></p>
        <p>Size: <strong></strong></p>
        <p>
          Price:
          <strong>£</strong>
        </p>
        <p>Quantity: <strong></strong></p>
      </div>
    </div>

    <p class="cart-info-total-price">
      Total:
      <strong>£</strong>
    </p>
    <router-link to="/checkout"
      ><button class="checkout-btn">Checkout Now</button></router-link
    >
  </section>
</template>

<script>
export default {
  props: [""],
  data() {
    return {
      cartItems: ["check"],
    };
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

.checkout-btn {
  padding: 1rem;
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
</style>
