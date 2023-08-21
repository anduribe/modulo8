const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Ruta para registrar un nuevo usuario
router.post('/signup', (req, res) => {
  userController.createUser({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
  .then(user => res.status(201).send(user))
  .catch(err => res.status(400).send(err));
});

// Puedes agregar aquí otras rutas relacionadas con los usuarios

module.exports = router;
