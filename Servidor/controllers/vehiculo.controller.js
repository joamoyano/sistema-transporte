import Vehiculo from "../models/vehiculo.model.js";

export const crearVehiculo = async (req, res) => {
  try {
    const nuevoVehiculo = new Vehiculo(req.body);
    const vehiculoGuardado = await nuevoVehiculo.save();
    res.status(201).json(vehiculoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el vehículo", error });
  }
};

export const obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.status(200).json(vehiculos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los vehículos", error });
  }
};

export const eliminarVehiculo = async (req, res) => {
  try {
    await Vehiculo.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Vehículo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el vehículo", error });
  }
};
