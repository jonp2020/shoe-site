<template>
  <section>
    <ul class="checkout-progressbar">
      <li :class="{ active: deliveryCompleted }" class="list-item-delivery">
        Delivery
      </li>
      <li :class="{ active: paymentCompleted }" class="list-item-payment">
        Payment
      </li>
      <li
        :class="{ active: confirmationCompleted }"
        class="list-item-confirmation"
      >
        <p>Confirmation</p>
      </li>
    </ul>

    <DeliveryDetails v-if="!deliveryCompleted" />
    <PaymentDetails
      v-if="deliveryCompleted && !paymentCompleted && confirmationCompleted"
    />
    <ConfirmationDetails
      v-if="deliveryCompleted && paymentCompleted && !confirmationCompleted"
    />
  </section>
</template>

<script>
import DeliveryDetails from "./DeliveryDetails";
import PaymentDetails from "./PaymentDetails";
import ConfirmationDetails from "./ConfirmationDetails";

export default {
  components: { DeliveryDetails, PaymentDetails, ConfirmationDetails },
  props: [""],
  data() {
    return {
      deliveryCompleted: false,
      paymentCompleted: false,
      confirmationCompleted: false,
    };
  },
};
</script>

<style scoped>
.checkout-progressbar {
  display: flex;
  justify-content: center;
}
.checkout-progressbar li {
  list-style-type: none;
  width: 25%;
  float: left;
  font-size: 12px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: #7d7d7d;
}

.list-item-delivery:before {
  font-family: "FontAwesome";
  content: "\f0d1";
  width: 25px;
  height: 25px;
  font-size: 1.5rem;
  line-height: 30px;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  background-color: white;
}
.list-item-delivery:after {
  width: 80%;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #7d7d7d;
  top: 15px;
  left: -40%;
  z-index: -1;
}
.list-item-payment:before {
  font-family: "FontAwesome";
  content: "\f09d";
  width: 25px;
  height: 25px;
  font-size: 1.5rem;
  line-height: 30px;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  background-color: white;
}
.list-item-payment:after {
  width: 80%;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #7d7d7d;
  top: 15px;
  left: -40%;
  z-index: -1;
}

.list-item-confirmation:before {
  font-family: "Font Awesome 5 Free";
  content: "\f058";
  width: 25px;
  height: 25px;
  font-size: 1.5rem;
  line-height: 30px;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  background-color: white;
}
.list-item-confirmation:after {
  width: 80%;
  height: 2px;
  content: "";
  position: absolute;
  background-color: #7d7d7d;
  top: 15px;
  left: -40%;
  z-index: -1;
}
.checkout-progressbar li:first-child:after {
  content: none;
}
.checkout-progressbar li.active {
  color: coral;
}
.progrcheckout-progressbaressbar li.active:before {
  border-color: coral;
}
.checkout-progressbar li.active + li:after {
  background-color: coral;
}
</style>
