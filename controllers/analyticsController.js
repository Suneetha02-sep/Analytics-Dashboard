const sales = require("../models/salesModel");

// TOTAL SALES BY REGION
exports.getRegionSales = (req, res) => {

  const result = {};

  sales.forEach(sale => {

    if (!result[sale.region]) {
      result[sale.region] = 0;
    }

    result[sale.region] += sale.amount;
  });

  res.json(result);
};

// TOP PRODUCTS
exports.getTopProducts = (req, res) => {

  const productTotals = {};

  sales.forEach(sale => {

    if (!productTotals[sale.product]) {
      productTotals[sale.product] = 0;
    }

    productTotals[sale.product] += sale.amount;
  });

  const topProducts = Object.entries(productTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  res.json(topProducts);
};

// MONTHLY GROWTH
exports.getMonthlyGrowth = (req, res) => {

  const monthlyTotals = {};

  sales.forEach(sale => {

    if (!monthlyTotals[sale.month]) {
      monthlyTotals[sale.month] = 0;
    }

    monthlyTotals[sale.month] += sale.amount;
  });

  res.json(monthlyTotals);
};