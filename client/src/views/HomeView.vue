<template>
  <section class="home">
    <div>
      <img
        class="header-banner-img"
        src="../assets/walking-large.jpg"
        alt="Couple dressed in wedding clothes, wearing trainers"
      />
      <div class="header-banner-message-container">
        <p class="header-banner-text">
          Good shoes <br />take you <br />good places
        </p>
      </div>

      <div class="home-page-cta-btn-container">
        <router-link to="/womens" class="shop-cta-link">
          <button class="shop-cta-btn">Shop Womens</button>
        </router-link>
        <router-link to="/mens" class="shop-cta-link">
          <button class="shop-cta-btn">Shop Mens</button>
        </router-link>
        <router-link to="/kids" class="shop-cta-link">
          <button class="shop-cta-btn">Shop Kids</button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Calligraffitti&display=swap");
.home {
  position: relative;
  /* max-width: 1500px; */
  /* margin: 0 auto; */
}
.header-banner-img {
  width: 100%;
  height: auto;
}

.header-banner-message-container {
  position: absolute;
  top: 10%;
  left: 20%;
}
.shop-cta-btn {
  text-transform: uppercase;
  font-size: 2rem;
  border: 1px solid #a7a5a1;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 2rem;
  /* margin-top: 4rem; */
  cursor: pointer;
  width: 100%;
}
.shop-cta-btn:hover {
  background-color: #a7a5a1;
  border: 1px solid #a7a5a1;
  transition: 0.3s;
}

.header-banner-text {
  font-family: "Calligraffitti", cursive;
  font-size: 4rem;
  font-weight: 500;
  transform: rotate(-20deg);
}

.home-page-cta-btn-container {
  display: flex;
  flex-direction: column;
}

.shop-cta-link {
  /* width: 100%; */
}

@media only screen and (max-width: 1024px) {
  .shop-cta-btn {
    font-size: 1.3rem;
  }
}
@media only screen and (max-width: 950px) {
  .header-banner-message-container {
    left: 12%;
  }
}
@media only screen and (max-width: 835px) {
  .header-banner-text {
    font-size: 3rem;
  }
  .shop-cta-btn {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 655px) {
  .home-page-cta-btn-container {
  }
}
@media only screen and (max-width: 550px) {
  .header-banner-text {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 390px) {
  .header-banner-message-container {
    top: 5%;
    left: 13%;
  }
}
</style>
