const express = require('express');
const AdminController = require('./../controllers/AdminController');

const router = express.Router();

//router.get('/create', AdminController.createAdmin);
router.get('', AdminController.getAllAdmins);
router.post('', AdminController.storeAdmin);
router.put('/:id', AdminController.updateAdmin);
//router.get('/:id/edit', AdminController.editAdmin)
router.get('/:id', AdminController.showOneAdmin)
router.patch('/:id', AdminController.patchAdmin)
    // router.delete('/:id', AdminController.deleteAdmin)

module.exports = router;