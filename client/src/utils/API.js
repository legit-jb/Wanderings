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
  // get user by email
  getEmail: function (email) {
    return axios.get("/api/users/email/" + email);
  },
  // delete user from mongoDB by mongoDB id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
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
  // user logout
  logout: function () {
    return localStorage.removeItem("user");
  },
  // signup a user
  signUp: function (userData) {
    return axios.post("/api/signup", userData)
  },
  // login a user
  signIn: function (userData) {
    return axios.post("/api/signin", userData)
  }
};
