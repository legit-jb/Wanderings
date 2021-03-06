const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/wandering"
);

const markerSeed = [
  {
    id: "15572374ghg",
    owner: "kasdfkjj",
    image:
      "https://maps.googleapis.com/maps/api/streetview?channel=mb-pdp-publicrecord&location=601+N+4th+St%2C+Philadelphia%2C+PA+19123&size=665x441&source=outdoor&client=gme-redfin&signature=-r9bhng_XkHepi3-Gqgy10icm0E=",
    name: "my old apt",
    lat: 39.96184,
    long: -75.14462,
    comments: "I really miss this place",
    tags: ["hipster", "home"],
  },
  {
    id: "155723342ghg",
    owner: "kasdfkjj",
    image:
      "https://www.highergroundscafe.com/uploads/b/0b694f4168c9c89c234c7495918c3b129a228aa6a0a1a6bac5a7c8aa673599ac/Screenshot_20200508-204218_Facebook_1588985171.jpg?width=400",
    name: "higher grounds cafe",
    lat: 39.96206,
    long: -75.14293,
    comments: "one of my best friends",
    tags: ["coffee", "hipster", "food"],
  },
  {
    id: "1455723342ghg",
    owner: "kasdfkjj",
    image: "https://theabbaye.net/wp-content/uploads/2020/08/abstract-1.jpg",
    name: "The Abbaye",
    lat: 39.96223,
    long: -75.14298,
    tags: ["hipster", "beer", "food", "dating"],
  },
];

const fakeUser = [{
  _id: "kasdfkjj",
  username: "J Brennan",
  email: "nonya@biz.com",
  usertags: ["hipster", "beer", "food", "dating", "coffee", "home"],
  notes: []
}];

db.User.remove({})
  .then(() => db.User.collection.insertMany(fakeUser))
  .then(() => db.Marker.collection.insertMany(markerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
