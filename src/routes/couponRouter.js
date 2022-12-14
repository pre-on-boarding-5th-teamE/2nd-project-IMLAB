const express = require("express");
const couponController = require("../controllers/couponController");
const errorHandler = require("../middlewares/errorHandler");

const router = express.Router();

router.post("/", errorHandler(couponController.createCoupon));

router.post(
  "/:couponid/user/:userid",
  errorHandler(couponController.giveCoupon)
);

router.get(
  "/:couponid/statistics",
  errorHandler(couponController.getCouponStatistics)
);

module.exports = {
  router,
};
