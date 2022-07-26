const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", (req, res) => {
  controller
    .createState(req.body.state)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((err) => {
      console.error(err);
      response.error(req, res, err, 500);
    });
});

router.get("/", (req, res) => {
  controller
    .getState()
    .then((state) => {
      response.success(req, res, state, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 500);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .updateState(req.params.id, req.body.state)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, err, 500);
    });
});

module.exports = router;
