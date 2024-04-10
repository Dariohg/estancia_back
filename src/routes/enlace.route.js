const express = require('express');
const router = express.Router();
const enlaceController = require('../controllers/enlaceController');

// Ruta para obtener todos los enlaces
router.get('/enlaces', enlaceController.obtenerTodosEnlaces);

// Ruta para obtener un enlace específico por su ID
router.get('/enlaces/:id', enlaceController.obtenerEnlacePorId);

// Ruta para crear un nuevo enlace
router.post('/enlaces', enlaceController.crearEnlace);

// Ruta para actualizar un enlace existente
router.put('/enlaces/:id', enlaceController.actualizarEnlace);

// Ruta para eliminar un enlace (marcar como inhabilitado)
router.delete('/enlaces/:id', enlaceController.eliminarEnlace);

module.exports = router;
