const express = require("express");
const {
  getTime,
  createTime,
  getSingleTime,
  updateTime,
  deleteTime,
} = require("../controller/time");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getTime).post(protect, authorize("admin"), createTime);
router
  .route("/:id")
  .get(getSingleTime)
  .put(protect, authorize("admin"), updateTime)
  .delete(protect, authorize("admin"), deleteTime);

module.exports = router;
