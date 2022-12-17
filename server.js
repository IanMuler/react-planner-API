const express = require("express");
const router = require("./network/routes");
const port = process.env.PORT || 3000;
const db = require("./db");
var cors = require("cors");
require("dotenv").config({ path: ".env" });

const app = express(); // create express app
app.use(express.json()); // recieves json data
app.use(express.urlencoded({ extended: true })); // accepts form data
app.use(cors()); // allows cross-origin requests

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router(app); // register routes

db(process.env.DB_CONNECT); // connect to db

app.listen(port, () => {
  console.log("Example app listening on port!");
});
