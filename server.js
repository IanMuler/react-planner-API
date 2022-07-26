const express = require("express");
const router = require("./network/routes");
const db = require("./db");
require("dotenv").config({ path: ".env" });

const app = express(); // create express app
app.use(express.json()); // recieves json data
app.use(express.urlencoded({ extended: true })); // accepts form data

router(app); // register routes

db(process.env.DB_CONNECT); // connect to db

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
