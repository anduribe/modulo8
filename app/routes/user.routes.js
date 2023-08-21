const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken } = require('../middleware/auth');

router.post('/login', userController.login);
// Aquí puedes agregar otras rutas relacionadas con los usuarios, como la creación de usuarios, actualización, etc.

module.exports = router;
