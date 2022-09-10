const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema({
  playgroundId: {
    type: mongoose.Schema.ObjectId,
    ref: "PlayGround",
    required: true,
  },
  time: {
    type: Date,
    required: [true, "provide time"],
  },
});

module.exports = mongoose.model("Time", TimeSchema);
