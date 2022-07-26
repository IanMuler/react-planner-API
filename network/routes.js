const express = require("express");
const state = require("../components/state/network");

const routes = function (server) {
  server.use("/api/state", state);
};

module.exports = routes;
