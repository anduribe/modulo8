const express = require('express');
const router = express.Router();
const bootcampController = require('../controllers/bootcamp.controller');
const { verifyToken } = require('../middleware/auth');

/// Crea un bootcamp (acceso con token)
router.post('/bootcamp', verifyToken, (req, res) => {
    bootcampController.createBootcamp(req.body)
      .then(bootcamp => res.send(bootcamp))
      .catch(err => res.status(500).send(err));
  });

// Agrega usuarios previamente registrados al bootcamp (acceso con token)
router.post('/bootcamp/adduser', verifyToken, bootcampController.addUser);

// Obtiene información de un bootcamp según ID (acceso con token)
router.get('/bootcamp/:id', verifyToken, bootcampController.findById);

// Lista todos los bootcamps (acceso público)
router.get('/bootcamp', bootcampController.findAll);

module.exports = router;
