/*importamos el framework express*/

import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes.js";


import clientesRoutes from "./routes/clientes.routes.js";


/*Asignar funcionalidad para mi server web*/
const app = express();

app.use(cors());

app.use(express.json());



/*setear puerto a mi server web*/

app.set("port",5000);


/*rutas*/

app.use("/api/camisetas",categoriasRoutes)
app.use("/api/usuarios", usuariosRoutes)


app.use("/api/clientes", clientesRoutes)


/*hacer disponible a mi server app para toda la aplicacion*/
export default app;
