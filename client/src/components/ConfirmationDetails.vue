<template>
  <section>
    <h3>Order Successful!</h3>
    <h4>Thank you very much for your order.</h4>
    <p>
      Your order reference is: <strong class="order-ref">{{ orderRef }}</strong>
    </p>
    <p>
      Use this reference to track your order and for any communication with our
      team.
    </p>
    <p>
      <i class="fa-solid fa-truck"></i>Your estimated delivery date will be in
      <strong>4 working days</strong>.<i class="fa-solid fa-truck"></i>
    </p>
    <p>Track your order <router-link to="/track-orders">here</router-link></p>

    <router-link to="/"
      ><button class="continue-shopping-btn">
        Continue Shopping
      </button></router-link
    >
  </section>
</template>

<script>
export default {
  props: ["orderRef"],
  data() {
    return {};
  },
  methods: {
    onSubmit() {},
  },
  computed: {},
};
</script>

<style scoped>
.continue-shopping-btn {
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: orange;
  border: 1px solid orange;
  color: #000;
  cursor: pointer;
}

h4 {
  margin: 1.5rem 0;
}

.fa-truck {
  margin: 0 0.5rem;
  color: coral;
}

.order-ref {
  font-size: 1.3rem;
}
</style>
