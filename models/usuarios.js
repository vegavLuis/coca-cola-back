import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuariosSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
    },
    apellidoPaterno: {
      type: String,
      trim: true,
    },
    apellidoMaterno: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    idInterno: {
      type: Number,
      trim: true,
    },
    isActivo: {
      type: Boolean,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

usuariosSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

usuariosSchema.methods.checkPassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

const Usuarios = mongoose.model("Usuarios", usuariosSchema);
export default Usuarios;
