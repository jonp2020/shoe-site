<template>
  <section>
    <h3>Enter your Delivery and Contact Details</h3>

    <div class="form-container">
      <form @submit.prevent="onSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="inputEmail">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
              v-model="email"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputPhone">Phone</label>
            <input
              type="tel"
              class="form-control"
              id="inputName"
              placeholder="Phone number"
              v-model="phone"
              required
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="inputName">Name</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="Name"
              v-model="name"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Address Line 1"
            v-model="addressLine1"
            required
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Address Line 2"
            v-model="addressLine2"
          />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="inputCity">City</label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              v-model="city"
            />
          </div>
          <div class="form-group">
            <label for="inputCity">County</label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              v-model="county"
            />
          </div>
          <div class="form-group col-md-2">
            <label for="inputPostCode">Post Code</label>
            <input
              type="text"
              class="form-control"
              id="inputPostCode"
              v-model="postCode"
              required
            />
          </div>
        </div>

        <button type="submit" class="continue-btn">Continue to Payment</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: [""],
  data() {
    return {
      name: null,
      addressLine1: null,
      addressLine2: null,
      city: null,
      county: null,
      postCode: null,
      email: null,
      phone: null,
    };
  },
  methods: {
    onSubmit() {
      const addressDetails = {};
      addressDetails.name = this.name;
      addressDetails.addressLine1 = this.addressLine1;
      addressDetails.addressLine2 = this.addressLine2;
      addressDetails.city = this.city;
      addressDetails.county = this.county;
      addressDetails.postCode = this.postCode;
      addressDetails.email = this.email;
      addressDetails.phone = this.phone;

      this.$emit("deliveryAddress", addressDetails);
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

.continue-btn {
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: orange;
  border: 1px solid orange;
  color: #000;
  cursor: pointer;
}
</style>
