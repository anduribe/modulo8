const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Ruta para registrarse
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await userController.createUser({
      firstName,
      lastName,
      email,
      password, // Asegúrate de manejar la contraseña de manera segura
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error });
  }
});

// Puedes agregar más rutas aquí según sea necesario

module.exports = router;
