const express = require("express");

const router = express.Router();

const {
  getRegionSales,
  getTopProducts,
  getMonthlyGrowth
} = require("../controllers/analyticsController");

// ROUTES
router.get("/region-sales", getRegionSales);

router.get("/top-products", getTopProducts);

router.get("/monthly-growth", getMonthlyGrowth);

module.exports = router;