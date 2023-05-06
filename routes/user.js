const express = require('express')
const userController = require('../controller/user')

const router = express.Router()

router.get('/all', userController.getAllUsers);

router.post('/newuser', userController.createPost);

router.get('/getUserByField', userController.getUserByField);

router.put('/updateUser', userController.updateUser);

router.delete('/deleteUser', userController.deleteUser);

module.exports = router;

