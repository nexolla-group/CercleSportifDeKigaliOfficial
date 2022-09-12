const express = require("express");

const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");
const BookedTime = require("../models/BookedTime");

const router = express.Router();

router.route("/").get(getTime).post(protect, authorize("admin"), createTime);
router
  .route("/:id")
  .get(
    advancedResults(BookedTime, { path: "playground", select: "name" }),
    getSingleTime
  )
  .put(protect, authorize("admin"), updateTime)
  .delete(protect, authorize("admin"), deleteTime);

module.exports = router;
