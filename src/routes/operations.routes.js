import express from "express";
import { getOperations } from "../controllers/operations.controller.js";
const router = express.Router();
router.get("/", getOperations);
export default router;
