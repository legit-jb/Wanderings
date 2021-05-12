const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const markerSchema = new Schema({
    title: { type: String, required: true },
  });
  
  const Marker = mongoose.model("Marker", markerSchema);
  
  module.exports = Marker;