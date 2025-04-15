import Cliente from "../models/cliente.model.js";

export const crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    const clienteGuardado = await nuevoCliente.save();
    res.status(201).json(clienteGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el cliente", error });
  }
};

export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los clientes", error });
  }
};

export const eliminarCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el cliente", error });
  }
};
