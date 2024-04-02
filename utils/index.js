import mongoose from "mongoose";
import jwt from "jsonwebtoken";

function validetObjectId(id, res) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("El ID no es valido");
    return res.status(400).json({
      msg: error.message,
    });
  }
}

const generarJWT = (id) => {
  // console.log("desde generarJWT", id);
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};

export { validetObjectId, generarJWT };
