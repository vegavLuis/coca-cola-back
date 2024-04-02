import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { db } from "./config/db.js";
import dotenv from "dotenv";

//Importacion de rutas
import productos from "./routes/productos.js";
import usuarios from "./routes/usuarios.js";
import auth from "./routes/auth.js";

dotenv.config();

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Rutas
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use("/api/productos", productos);
app.use("/api/usuarios", usuarios);
app.use("/api/auth", auth);

// Middleware para Vue.js router modo history
app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
  console.log("Example app listening on port" + app.get("puerto"));
  //   Conexcion a la db
  db();
});
