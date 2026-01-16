import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "QuantOps Backend API is running",
    status: "OK",
    time: new Date().toISOString(),
  });
});

// ✅ ADD THIS (THIS IS WHAT FRONTEND EXPECTS)
app.get("/api/health", (req, res) => {
  res.json({
    status: "UP",
    service: "QuantOps Backend",
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

