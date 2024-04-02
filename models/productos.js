import mongoose from "mongoose";

const productosSchema = new mongoose.Schema(
  {
    idInterno: {
      type: String,
      trim: true,
    },
    nombreProducto: {
      type: String,
      trim: true,
    },
    submarca: {
      type: String,
      trim: true,
    },
    numeroInterno: {
      type: Number,
      trim: true,
    },
    zona: {
      type: String,
      trim: true,
    },
    fechaAlta: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Productos = mongoose.model("Productos", productosSchema);
export default Productos;
