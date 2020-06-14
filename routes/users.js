const express = require('express');
const UserController = require('./../controllers/UserController');

const router = express.Router();

//router.get('/create', UserController.createUser);
router.get('', UserController.getAllUsers);
router.post('', UserController.storeUser);
router.put('/:id', UserController.updateUser);
//router.get('/:id/edit', UserController.editUser)
router.get('/:id', UserController.showOneUser)
router.patch('/:id', UserController.patchUser)
    // router.delete('/:id', UserController.deleteUser)

module.exports = router;