import Productos from "../models/productos";

const createProducto = async (req, res) => {
  if (Object.values(req.body).includes("")) {
    const error = new Error("Todos los campos son requeridos");
    return res.status(400).json({
      msg: error.message,
    });
  }
  try {
    const produc = new Productos(req.body);
    const data = await produc.save();
    res.json({
      data: data,
      msg: "El producto se creo con exito",
    });
  } catch (error) {
    console.log(error);
  }
};

const findAllProducto = async (req, res) => {
  try {
    const data = await Productos.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateProducto = async (req, res) => {
  const { id } = req.params;
  const data = await Productos.findById(id);
  if (!data) {
    res.json({
      msg: "El id no existe",
    });
  }
  const {
    idInterno,
    nombreProducto,
    submarca,
    numeroInterno,
    zona,
    fechaAlta,
  } = req.body;
  data.idInterno = idInterno;
  data.nombreProducto = nombreProducto;
  data.submarca = submarca;
  data.numeroInterno = numeroInterno;
  data.zona = zona;
  data.fechaAlta = fechaAlta;
  try {
    await data.save();
    res.json({
      msg: "El producto se actualizo con exito",
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteProducto = async (req, res) => {
  const { id } = req.params;
  const data = await Productos.findById(id);
  if (!data) {
    res.json({
      msg: "El id no existe",
    });
  }
  try {
    await data.deleteOne();
    res.json({
      msg: "El producto se elimino correctamente",
    });
  } catch (error) {
    console.log(error);
  }
};

export { createProducto, findAllProducto, updateProducto, deleteProducto };
