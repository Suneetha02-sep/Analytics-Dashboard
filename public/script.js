async function fetchAnalytics() {

  // REGION SALES
  const regionResponse =
    await fetch("/api/analytics/region-sales");

  const regionData =
    await regionResponse.json();

  // TOP PRODUCTS
  const topResponse =
    await fetch("/api/analytics/top-products");

  const topProducts =
    await topResponse.json();

  // MONTHLY GROWTH
  const growthResponse =
    await fetch("/api/analytics/monthly-growth");

  const growthData =
    await growthResponse.json();

  // DISPLAY
  document.getElementById("output").innerHTML = `

    <h2>Region Sales</h2>
    <pre>${JSON.stringify(regionData, null, 2)}</pre>

    <h2>Top Products</h2>
    <pre>${JSON.stringify(topProducts, null, 2)}</pre>

    <h2>Monthly Growth</h2>
    <pre>${JSON.stringify(growthData, null, 2)}</pre>
  `;
}

fetchAnalytics();