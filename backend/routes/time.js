const express = require("express");
const { getTime, createTime } = require("../controller/time");
const { post } = require("./auth");

const router = express.Router();

router.route("/").get(getTime).post(createTime);

module.exports = router;
