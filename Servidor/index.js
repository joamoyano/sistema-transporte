import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import viajeRoutes from "./routes/viaje.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import vehiculoRoutes from "./routes/vehiculo.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/viajes", viajeRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/vehiculos", vehiculoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))
  )
  .catch((error) => console.log(error));
