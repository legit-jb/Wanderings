const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
    usertags: [String],
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Marker"
      }
    ],
  },{
    timestamps: true,
    collection: 'users'
 });
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
  