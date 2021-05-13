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
  //Save a user to mongoDB by adding their sub value from auth0
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },
  // get all markers in mongoDB
  getMarkers: function () {
    return axios.get("/api/users");
  },
  //get all markers by mongoDB user id
  getMarker: function (id) {
    return axios.get("/api/users/" + id);
  },
  //get all markers by auth0 user sub
  getMarker: function (id) {
    return axios.get("/api/users/" + id);
  },
  //get all markers by tag
  getMarkersTag: function (sub) {
    return axios.get("/api/users/sub/" + sub);
  },
  //delete a marker from mongoDB
  deleteMarker: function (id) {
    return axios.delete("/api/users/" + id);
  },
  //update a marker by userid, should usually only take in tags
  updateMarker: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // posts a marker to mongoDB
  saveMarker: function (userData) {
    return axios.post("/api/users", userData);
  },
};
