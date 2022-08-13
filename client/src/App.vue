<template>
  <div class="top-level-nav">
    <router-link to="/track-orders" class="track-items-link">
      <i class="fa-solid fa-truck"></i> Track Orders</router-link
    >
  </div>
  <nav class="nav-bar">
    <router-link to="/">
      <div class="brand_name_text">Golden <br />Shoe</div>
    </router-link>
    <router-link to="/womens">Womens</router-link>
    <router-link to="/mens">Mens</router-link>
    <router-link to="/kids">Kids</router-link>
    <router-link to="/cart"
      ><i class="fa-solid fa-cart-shopping"></i
      ><span :class="{ numOfCartItems: numOfCartItems > 0 }">{{
        numOfCartItems > 0 ? numOfCartItems : null
      }}</span></router-link
    >
  </nav>
  <router-view />
</template>

<script>
export default {
  computed: {
    numOfCartItems() {
      return this.$store.getters.getBasketItems
        ? this.$store.getters.getBasketItems.length
        : null;
    },
  },
};
</script>

<style>
body {
  width: calc(100vw - 34px);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding: calc(100vw - 100%); */
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

.nav-bar {
  /* width: 1400px; */
  /* width: 100%; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
nav a:hover {
  color: orangered;
}

nav a.router-link-exact-active {
  color: orangered;
}

.brand_name_text {
  text-align: left;
  font-style: italic;
  color: orange;
  font-weight: 900;
  font-size: 1.5rem;
}

.numOfCartItems {
  border-radius: 32px;
  font-size: 0.8rem;
  padding: 0.2rem;
  margin-left: 0.3rem;
}

.top-level-nav {
  margin-top: 0.5rem;
  padding: 0.5rem 0 0 0;
  text-align: center;
}
.top-level-nav a {
  color: black;
  text-decoration: none;
}
.top-level-nav a:hover {
  color: orangered;
  text-decoration: none;
}

.track-items-list {
  color: black;
}
</style>
