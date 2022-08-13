<template>
  <nav class="nav-bar">
    <router-link to="/">
      <div class="brand_name_text">Golden <br />Shoe</div>
    </router-link>
    <router-link to="/womens">Womens</router-link>
    <router-link to="/mens">Mens</router-link>
    <router-link to="/kids">Kids</router-link>
    <router-link to="/cart"
      ><i class="fa-solid fa-cart-shopping"></i
    ></router-link>
  </nav>
  <router-view />
</template>

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
</style>
