const express = require("express");
const {
  getTransaction,
  createTransaction,
  getSingleTransaction,
} = require("../controller/transaction");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(protect, getTransaction).post(protect, createTransaction);
router.route("/:id").get(getSingleTransaction);

module.exports = router;
