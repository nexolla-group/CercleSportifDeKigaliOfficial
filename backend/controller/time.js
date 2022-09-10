const Category = require("../models/PCategory");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Time = require("../models/Time");

// @desc    Get all time
// @route   GET /api/time
// @access   public
exports.getTime = asyncHandler(async (req, res, next) => {
  const time = await Time.find();
  res.status(200).json({ success: true, data: time });
});

// // @desc    Get single category
// // @route   GET /api/v1/category/:id
// // @acess   public
// exports.getSingleCategory = asyncHandler(async (req, res, next) => {
//   const category = await Category.findById(req.params.id);
//   if (!category) {
//     return next(
//       new ErrorResponse(`category with id: ${req.params.id} not found`, 404)
//     );
//   }
//   res.status(200).json({ success: true, data: category });
// });

// @desc Create time
// POST /api/time
// access private
exports.createTime = asyncHandler(async (req, res, next) => {
  const time = await Time.create(req.body);
  res.status(201).json({ success: true, data: time });
});

// exports.updateCategory = asyncHandler(async (req, res, next) => {
//   const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });
//   if (!category) {
//     return next(
//       new ErrorResponse(`category with id: ${req.params.id} not found`, 404)
//     );
//   }
//   res.status(200).json({
//     success: true,
//     data: {
//       msg: `category with id: ${req.params.id} has already updated`,
//       updated_data: category,
//     },
//   });
// });

// exports.deleteCategory = asyncHandler(async (req, res, next) => {
//   const category = await Category.findByIdAndDelete(req.params.id);
//   if (!category) {
//     return next(
//       new ErrorResponse(`category with id: ${req.params.id} not found`, 404)
//     );
//   }
//   res.status(200).json({
//     success: true,
//     data: {
//       msg: "Category with id: " + req.params.id + " Has already deleted",
//     },
//   });
// });
