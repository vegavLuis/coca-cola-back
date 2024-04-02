import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import {
  createUsuarios,
  findAllUsuarios,
  updateUsuarios,
  deleteUsuarios,
} from "../controllers/usuarios.js";

const router = express.Router();

router.route("/").post(createUsuarios).get(authMiddleware, findAllUsuarios);

router
  .route("/:id")
  .put(authMiddleware, updateUsuarios)
  .delete(authMiddleware, deleteUsuarios);

export default router;
