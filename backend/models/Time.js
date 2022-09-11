const mongoose = require("mongoose");

const TimeSchema = new mongoose.Schema({
  playgroundId: {
    type: mongoose.Schema.ObjectId,
    ref: "PlayGround",
    required: true,
  },
  day: {
    type: Date,
    required: [true, "provide date"],
  },
  startTime: {
    type: String,
    required: [true, "provide starting hour"],
  },
  endTime: {
    type: String,
    required: [true, "provide Ending time"],
  },
});

module.exports = mongoose.model("Time", TimeSchema);
