const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    trype: Number,
    required: true,
  },
  launchDate: {
    trype: Date,
    required: true,
  },
  mission: {
    trype: String,
    required: true,
  },
  rocket: {
    trype: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    required: true,
  },
  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});
