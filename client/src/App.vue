<template>
  <main class="main-container">
    <div class="top-level-nav">
      <router-link
        to="/"
        @click="linkClicked"
        class="brand-name-text-wrapper_small"
      >
        <div class="brand_name_text_small">Golden Shoe</div>
      </router-link>
      <router-link
        to="/track-orders"
        class="track-items-link"
        @click="linkClicked"
      >
        <i class="fa-solid fa-truck"></i> Track Orders</router-link
      >
    </div>
    <nav class="nav-bar">
      <router-link
        to="/"
        @click="linkClicked"
        class="brand-name-text_large_screen"
      >
        <div class="brand_name_text">Golden <br />Shoe</div>
      </router-link>
      <router-link to="/womens" @click="linkClicked">Womens</router-link>
      <router-link to="/mens" @click="linkClicked">Mens</router-link>
      <router-link to="/kids" @click="linkClicked">Kids</router-link>
      <router-link to="/cart" @click="linkClicked"
        ><i class="fa-solid fa-cart-shopping"></i
        ><span :class="{ numOfCartItems: numOfCartItems > 0 }">{{
          numOfCartItems > 0 ? numOfCartItems : null
        }}</span></router-link
      >
    </nav>
    <router-view />
    <footer :class="{ hideFooter: pageLoading }">
      <div>
        <router-link to="/" class="brand_name_text_footer" @click="linkClicked">
          <p class="brand_name_text_footer">Golden Shoe</p>
        </router-link>
        <div class="social-media-links">
          <a href="https://www.facebook.com/" target="_blank"
            ><i class="fa-brands fa-square-facebook"></i
          ></a>
          <a href="https://www.twitter.com/" target="_blank"
            ><i class="fa-brands fa-square-twitter"></i
          ></a>
          <a href="https://www.instagram.com/" target="_blank"
            ><i class="fa-brands fa-square-instagram"></i
          ></a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      pageLoading: false,
    };
  },
  methods: {
    linkClicked() {
      this.pageLoading = true;

      setTimeout(() => {
        this.pageLoading = false;
      }, 500);
    },
  },
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
  overflow-y: scroll;
}

.main-container {
  display: grid;
  height: 100vh;
  grid-template-rows: 5% 20% 1fr 5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  margin-bottom: 2rem;
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

.brand_name_text_small {
  text-align: left;
  font-style: italic;
  color: orange;
  font-weight: 900;
  font-size: 1rem;
}

.brand_name_text_footer {
  text-align: left;
  font-style: italic;
  color: orange;
  font-weight: 900;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  margin: 0;
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
  display: flex;
  justify-content: center;
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
footer {
  margin-top: 2rem;
  border-top: 1px solid grey;
  width: 80%;
  margin: 2rem auto;
  height: 2rem;
}

.social-media-links {
  display: flex;
  gap: 0.5rem;
  font-size: 2rem;
  justify-content: center;
  cursor: pointer;
}
.social-media-links a {
  color: inherit;
}

.hideFooter {
  display: none;
}

@media only screen and (min-width: 550px) {
  .brand-name-text-wrapper_small {
    display: none;
  }
}
@media only screen and (max-width: 550px) {
  .main-container {
    grid-template-rows: 5% 15% 1fr 5%;
  }
  .brand-name-text_large_screen {
    display: none;
  }

  .top-level-nav {
    justify-content: space-between;
    margin: 0.5rem 1rem;
  }
}
</style>
