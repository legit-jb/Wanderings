import axios from "axios";

export default {
  // get all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // get user by mongoDB id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // get user by auth0 id(aka sub)
  getUserSub: function (sub) {
    return axios.get("/api/users/sub/" + sub);
  },
  // delete user from mongoDB by mongoDB id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  //create a user in mongoDB by adding their sub value from auth0
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // get all markers in mongoDB
  getMarkers: function () {
    return axios.get("/api/markers");
  },
  //get marker by marker id
  getMarker: function (id) {
    return axios.get("/api/markers/" + id);
  },
  //delete a marker from mongoDB by marker id
  deleteMarker: function (id) {
    return axios.delete("/api/markers/" + id);
  },
  //update a marker by marker id
  updateMarker: function (id) {
    return axios.delete("/api/markers/" + id);
  },
  // posts a marker to mongoDB
  saveMarker: function (markerData) {
    return axios.post("/api/markers", markerData);
  },
};
