const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
  eventId: {
    type: Number,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  eventDescription: {
    type: String,
    required: true
  }
});

module.exports = Event = mongoose.model("events", EventSchema);
