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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.brand_name_text {
  text-align: left;
  font-style: italic;
  color: orange;
  font-weight: 900;
  font-size: 1.5rem;
}
</style>
