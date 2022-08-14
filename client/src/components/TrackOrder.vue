<template>
  <section v-if="!orderDetails">
    <h3>Track Your Order</h3>
    <div class="form-container">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="inputAddress">Order Reference</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Enter your order reference"
            v-model="orderRef"
            required
          />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="inputName">Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Enter your name"
              v-model="name"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Enter your email"
              v-model="email"
              required
            />
          </div>
        </div>

        <button type="submit" class="track-order-btn">Submit</button>

        <div v-if="errorMessage" class="error-message">
          <p>There was an error finding your items.</p>
          <p>Please check your order details and try again.</p>
          <p>
            If you continue to have an issue finding your order, please contact
            our customer service team.
          </p>
        </div>
      </form>

      <div></div>
    </div>
  </section>
  <section v-else>
    <div>
      <div>
        <h4>
          Estimated delivery date:
          {{
            orderDetails.deliveryStatus &&
            orderDetails.deliveryStatus === "pending"
              ? "4 working days"
              : "2 working days"
          }}
        </h4>
      </div>
      <p>Order Ref: {{ orderDetails.refId }}</p>
      <hr />
      <p>Delivery Address:</p>
      <ul class="delivery-address-container">
        <li>{{ orderDetails.name }}</li>
        <li>{{ orderDetails.addressLine1 }}</li>
        <li v-if="orderDetails.addressLine2">
          {{ orderDetails.addressLine2 }}
        </li>
        <li v-if="orderDetails.city">{{ orderDetails.city }}</li>
        <li v-if="orderDetails.county">{{ orderDetails.county }}</li>
        <li>{{ orderDetails.postCode }}</li>
      </ul>
    </div>

    <hr />

    <div class="cart-item-info-container">
      <h5>Your order:</h5>
      <div
        class="cart-item-info-text"
        v-for="(item, index) in itemsOrdered"
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
  </section>
</template>

<script>
import axios from "axios";
export default {
  props: [""],
  data() {
    return {
      orderRef: null,
      name: null,
      email: null,
      orderDetails: null,
      itemsOrdered: null,
      errorMessage: false,
    };
  },
  methods: {
    async onSubmit() {
      this.errorMessage = false;
      const url = "http://localhost:4000/api/track-orders";

      const dataObj = {};
      dataObj.orderRef = this.orderRef;
      dataObj.name = this.name;
      dataObj.email = this.email;

      const data = await axios.post(url, dataObj);

      if (data.status === 200) {
        this.orderDetails = data.data[0];
        this.itemsOrdered = JSON.parse(this.orderDetails.itemsOrdered);
      } else {
        this.errorMessage = true;
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.form-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex;
}
form {
  width: 50%;
}

.form-group {
  text-align: left;
  margin: 0.5rem 0;
}

label {
  text-align: left;
  margin: 1rem 0 0.5rem 0;
}

.track-order-btn {
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: orange;
  border: 1px solid orange;
  color: #000;
  cursor: pointer;
}

.error-message {
  margin-top: 2rem;
}

.delivery-address-container {
  list-style: none;
  padding: 0;
}

.shoe-cart-img {
  width: 15%;
  height: auto;
}

hr {
  width: 50%;
  margin: 1rem auto;
}
</style>
