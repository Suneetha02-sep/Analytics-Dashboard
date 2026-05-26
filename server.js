const express = require("express");

const app = express();

const analyticsRoutes = require("./routes/analyticsRoutes");

app.use(express.static("public"));

app.use("/api/analytics", analyticsRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});