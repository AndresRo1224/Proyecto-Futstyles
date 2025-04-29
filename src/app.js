/*importamos el framework express*/

import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.routes.js";
<<<<<<< HEAD:src/app.js
=======
import clientesRoutes from "./routes/clientes.routes.js";
>>>>>>> 88b0daa (Avance proyecto-Registro de Usuarios):backend/src/app.js

/*Asignar funcionalidad para mi server web*/
const app = express();

app.use(cors());
<<<<<<< HEAD:src/app.js
=======
app.use(express.json());

>>>>>>> 88b0daa (Avance proyecto-Registro de Usuarios):backend/src/app.js

/*setear puerto a mi server web*/

app.set("port",5000);


/*rutas*/

app.use("/api/camisetas",categoriasRoutes)
app.use("/api/usuarios", usuariosRoutes)
<<<<<<< HEAD:src/app.js
=======
app.use("/api/clientes", clientesRoutes)
>>>>>>> 88b0daa (Avance proyecto-Registro de Usuarios):backend/src/app.js

/*hacer disponible a mi server app para toda la aplicacion*/
export default app;
