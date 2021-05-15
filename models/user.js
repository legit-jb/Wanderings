const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: String,
    usertags: [String],
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Marker"
      }
    ],
  });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
  