import express from "express";
const router = express.Router();
router.get("/", (_, res) => res.json({ status: "OK" }));
export default router;
