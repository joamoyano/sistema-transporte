import express from "express";
import {
  crearVehiculo,
  obtenerVehiculos,
  eliminarVehiculo,
} from "../controllers/vehiculo.controller.js";

const router = express.Router();

router.post("/", crearVehiculo);
router.get("/", obtenerVehiculos);
router.delete("/:id", eliminarVehiculo);

export default router;
