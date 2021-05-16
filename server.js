require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/');
const { db } = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
app.use('/api', authRoutes);

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