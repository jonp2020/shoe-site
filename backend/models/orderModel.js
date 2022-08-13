const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    uuid: {
      type: String,
      required: true,
    },
    refId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    county: {
      type: String,
      required: false,
    },
    postCode: {
      type: String,
      required: true,
    },
    paymentConfirmed: {
      type: Boolean,
      required: true,
    },
    paymentRecord: {
      type: Number,
      required: true,
    },
    nameOnCard: {
      type: String,
      required: true,
    },
    selectedPaymentOption: {
      type: String,
      required: true,
    },
    itemsOrdered: {
      type: Object,
      required: true,
    },
    deliveryStatus: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
