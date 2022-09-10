const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
  tx_ref: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
  },
  tx_status: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },

  phone_number: {
    type: String,
    required: true,
  },

  playGroundId: {
    type: mongoose.Schema.ObjectId,
    ref: "PlayGround",
  },
  customer: {
    type: String,
    ref: "User",
  },
  timeTaken: {
    type: Date,
  },
  timeRelease: {
    type: Date,
  },
  cretedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
