const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route (for browser / health check)
app.get("/", (req, res) => {
  res.json({
    message: "QuantOps Backend API is running",
    status: "OK",
    time: new Date().toISOString(),
  });
});

// API route used by frontend
app.get("/api/status", (req, res) => {
  res.json({
    status: "Backend running",
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
