<template>
  <div class="home">
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
        <button class="shop-cta-btn">Shop now</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Calligraffitti&display=swap");
.home {
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
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
  border: 1px solid grey;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 2rem;
  margin-top: 4rem;
  cursor: pointer;
}

.header-banner-text {
  font-family: "Calligraffitti", cursive;
  font-size: 3rem;
  font-weight: 500;
  transform: rotate(-20deg);
}
</style>
