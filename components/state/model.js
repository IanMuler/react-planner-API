const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  state: Object,
});

const State = mongoose.model("State", mySchema);

module.exports = State;
