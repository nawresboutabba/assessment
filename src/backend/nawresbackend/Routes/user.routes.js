const express = require('express')


const router = express.Router()
const userController = require('../Controllers/user.controller');
// Retrieve all users
router.get('/users', userController.findAll);
// Create a new user
router.post('/new', userController.create);
// Update a user with id
router.put('/edit/:id', userController.update);
// get a user with id
router.get('/getuser/:id', userController.findById);
//update a status with id
router.put('/updateStatus/:id', userController.updateStatus);





module.exports = router

