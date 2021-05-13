require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./src/config/env.dev");

const app = express();
const PORT = process.env.PORT || serverPort;

app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/wandering',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});