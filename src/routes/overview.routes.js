import express from "express";
import { getOverviewMetrics } from "../controllers/overview.controller.js";
const router = express.Router();
router.get("/", getOverviewMetrics);
export default router;
