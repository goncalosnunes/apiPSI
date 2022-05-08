// import controller users
const utenteController = require('../controllers/utenteController.js')
const userController = require('../controllers/userController.js')


// router
const router = require('express').Router()


// user routers

router.get('/allUtentes', utenteController.getAllUtentes)

router.post('/addUtente', utenteController.upload, utenteController.addUtente)

router.get('/:id', utenteController.getOneUtente)

router.put('/:id', utenteController.updateUtente)

router.delete('/:id', utenteController.deleteUtente)


module.exports = router