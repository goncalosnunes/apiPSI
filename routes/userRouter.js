// import controller users
const userController = require('../controllers/userController.js')


// router
const router = require('express').Router()


// user routers

router.get('/allUsers', userController.getAllUsers)

router.post('/addUser', userController.upload , userController.addUser)

router.get('/:id', userController.getOneUser)

router.get('/name/:username', userController.getOneByName)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)



module.exports = router