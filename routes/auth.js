import express from "express";
import { login, user } from "../controllers/auth.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", login);

router.get("/user", authMiddleware, user);

export default router;
