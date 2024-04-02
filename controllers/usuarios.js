import Usuarios from "../models/usuarios";

const createUsuarios = async (req, res) => {
  if (Object.values(req.body).includes("")) {
    const error = new Error("Todos los campos son requeridos");
    return res.status(400).json({
      msg: error.message,
    });
  }
  try {
    const resp = new Usuarios(req.body);
    const data = await resp.save();
    res.json({
      data: data,
      msg: "El usuario se creo con exito",
    });
  } catch (error) {
    console.log(error);
  }
};

const findAllUsuarios = async (req, res) => {
  try {
    const data = await Usuarios.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateUsuarios = async (req, res) => {
  const { id } = req.params;
  const data = await Usuarios.findById(id);
  if (!data) {
    res.json({
      msg: "El usuario no existe",
    });
  }
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    email,
    password,
    idInterno,
    isActivo,
  } = req.body;
  data.nombre = nombre;
  data.apellidoPaterno = apellidoPaterno;
  data.apellidoMaterno = apellidoMaterno;
  data.email = email;
  data.password = password;
  data.idInterno = idInterno;
  data.isActivo = isActivo;
  try {
    await data.save();
    res.json({
      msg: "El usuarios se actualizo con exito",
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteUsuarios = async (req, res) => {
  const { id } = req.params;
  const data = await Usuarios.findById(id);
  if (!data) {
    res.json({
      msg: "El usuarioss no existe",
    });
  }
  try {
    await data.deleteOne();
    res.json({
      msg: "El usuario se elimino con exito",
    });
  } catch (error) {
    console.log(error);
  }
};
export { createUsuarios, findAllUsuarios, updateUsuarios, deleteUsuarios };
