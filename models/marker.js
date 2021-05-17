const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const markerSchema = new Schema({
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  image: { type: String, required: true },
  tags: [String],
  lat: Number,
  long: Number,
  comments: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Marker = mongoose.model("Marker", markerSchema);

module.exports = Marker;
