const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    sub: { type: String, required: true },
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Marker"
      }
    ],
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
  