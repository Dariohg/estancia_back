const Enlace = require('../models/Enlace');

// Controlador para obtener todos los enlaces
async function obtenerTodosEnlaces(req, res) {
    try {
        const enlaces = await Enlace.findAll();
        res.json(enlaces);
    } catch (error) {
        console.error('Error al obtener los enlaces:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

// Controlador para obtener un enlace por ID
async function obtenerEnlacePorId(req, res) {
    const id = req.params.id;
    try {
        const enlace = await Enlace.findByPk(id);
        if (enlace) {
            res.json(enlace);
        } else {
            res.status(404).json({ mensaje: 'Enlace no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el enlace:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

// Controlador para crear un nuevo enlace
async function crearEnlace(req, res) {
    const datosEnlace = req.body;
    try {
        const nuevoEnlace = await Enlace.create(datosEnlace);
        res.status(201).json(nuevoEnlace);
    } catch (error) {
        console.error('Error al crear el enlace:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

// Controlador para actualizar un enlace
async function actualizarEnlace(req, res) {
    const id = req.params.id;
    const datosActualizados = req.body;
    try {
        const enlace = await Enlace.findByPk(id);
        if (enlace) {
            await enlace.update(datosActualizados);
            res.json(enlace);
        } else {
            res.status(404).json({ mensaje: 'Enlace no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el enlace:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

// Controlador para "eliminar" un enlace (marcar como inhabilitado)
async function inhabilitarEnlace(req, res) {
    const id = req.params.id;
    try {
        const enlace = await Enlace.findByPk(id);
        if (enlace) {
            // Aquí puedes añadir la lógica para marcar el enlace como inhabilitado
            // en lugar de eliminarlo físicamente de la base de datos
            // Por ejemplo:
            enlace.habilitado = false;
            await enlace.save();
            res.json(enlace);
        } else {
            res.status(404).json({ mensaje: 'Enlace no encontrado' });
        }
    } catch (error) {
        console.error('Error al inhabilitar el enlace:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
}

module.exports = {
    obtenerTodosEnlaces,
    obtenerEnlacePorId,
    crearEnlace,
    actualizarEnlace,
    inhabilitarEnlace,
};
