<template>
  <section>
    <h3>Enter your Payment Details</h3>
    <h5>
      Total Amount: <strong>£{{ getTotalAmount }}</strong>
    </h5>
    <div class="form-container">
      <form @submit.prevent="onSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Payment Option</label>

            <select
              class="form-control"
              id="selectPaymentOption"
              v-model="selectedPaymentOption"
              required
            >
              <option>Visa</option>
              <option>Mastercard</option>
              <option>Visa Debit</option>
              <option>Mastercard Debit</option>
              <option>American Express</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="inputNameOnCard">Name on Card</label>
            <input
              type="text"
              class="form-control"
              id="inputNameOnCard"
              placeholder="Name on card"
              v-model="nameOnCard"
              required
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="inputAccountNumber">Account Number</label>
            <input
              type="number"
              class="form-control"
              id="inputAccountNumber"
              placeholder="Account number"
              v-model="accountNumber"
              required
            />
          </div>
          <div class="form-group">
            <label for="inputSortCode">Sort Code</label>
            <input
              type="number"
              class="form-control"
              id="inputSortCode"
              placeholder="Sort code"
              v-model="sortCode"
              required
            />
          </div>
        </div>

        <button type="submit" class="confirm-payment-btn">
          Confirm Payment
        </button>
        <div v-if="orderingLoading" class="loader"></div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: ["orderingLoading"],
  data() {
    return {
      selectedPaymentOption: null,
      nameOnCard: null,
      accountNumber: null,
      sortCode: null,
    };
  },
  methods: {
    onSubmit() {
      const paymentConfirmedDetails = {};

      // Implement secure payment method here

      const paymentConfirmed = true;
      const paymentRecord = Math.ceil((Math.random() * 1000000) / 4 + 3);

      paymentConfirmedDetails.paymentConfirmed = paymentConfirmed;
      paymentConfirmedDetails.paymentRecord = paymentRecord;
      paymentConfirmedDetails.nameOnCard = this.nameOnCard;
      paymentConfirmedDetails.selectedPaymentOption =
        this.selectedPaymentOption;

      this.$emit("paymentConfirmed", paymentConfirmedDetails);
    },
  },
  computed: {
    getTotalAmount() {
      return this.$store.getters.getBasketItems.reduce(
        (a, b) => a + b.total,
        0
      );
    },
  },
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

.confirm-payment-btn {
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: orange;
  border: 1px solid orange;
  color: #000;
  cursor: pointer;
}

.loader {
  border: 0.3rem solid #f3f3f3; /* Light grey */
  border-top: 0.3rem solid orange; /* Blue */
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 2s linear infinite;
  margin: 1rem auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
