const express = require("express");
const state = require("../components/state/network");

const routes = function (server) {
  server.use("/api/state", state);
  server.get("/", (req, res) => {
    res.send("React-Planner-API");
  });
};

module.exports = routes;
