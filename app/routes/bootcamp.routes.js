const express = require('express');
const router = express.Router();
const bootcampController = require('../controllers/bootcamp.controller');
const { verifyToken } = require('../middleware/auth');

// Crea un bootcamp (acceso con token)
router.post('/api/bootcamp', verifyToken, bootcampController.createBootcamp);

// Agrega usuarios previamente registrados al bootcamp (acceso con token)
router.post('/api/bootcamp/adduser', verifyToken, bootcampController.addUser);

// Obtiene información de un bootcamp según ID (acceso con token)
router.get('/api/bootcamp/:id', verifyToken, bootcampController.findById);

// Lista todos los bootcamps (acceso público)
router.get('/api/bootcamp', bootcampController.findAll);

module.exports = router;
