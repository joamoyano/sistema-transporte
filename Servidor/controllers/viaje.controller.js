import Viaje from "../models/viaje.model.js";

export const crearViaje = async (req, res) => {
  try {
    const nuevoViaje = new Viaje(req.body);
    const viajeGuardado = await nuevoViaje.save();
    res.status(201).json(viajeGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el viaje", error });
  }
};

export const obtenerViajes = async (req, res) => {
  try {
    const viajes = await Viaje.find().populate("cliente vehiculo");
    res.status(200).json(viajes);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los viajes", error });
  }
};

export const eliminarViaje = async (req, res) => {
  try {
    const { id } = req.params;
    await Viaje.findByIdAndDelete(id);
    res.status(200).json({ mensaje: "Viaje eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el viaje", error });
  }
};
