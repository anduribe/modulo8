const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken } = require('../middleware/auth');

router.post('/login', userController.login);

router.post('/signin', userController.login);

// para listar a todos los usuarios con sus bootcamps
router.get('/users', userController.findAll);
// lista usuarios por id
router.get('/user/:id', userController.findUserById);

//actualizar usuario po ID
router.put('/user/:id', userController.updateUserById);

//eliminar usuario por id
router.delete('/user/:id', userController.deleteUserById);


module.exports = router;