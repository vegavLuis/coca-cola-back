import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createProducto,
  findAllProducto,
  updateProducto,
  deleteProducto,
} from "../controllers/productos.js";

const router = express.Router();

router
  .route("/")
  .post(authMiddleware, createProducto)
  .get(authMiddleware, findAllProducto);

router
  .route("/:id")
  .put(authMiddleware, updateProducto)
  .delete(authMiddleware, deleteProducto);

export default router;
