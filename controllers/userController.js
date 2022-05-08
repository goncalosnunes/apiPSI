const db = require('../models')

// image Upload
const multer = require('multer')
const path = require('path')

// create main Model
const User = db.users



// main work

// 1. create user

const addUser = async (req, res) => {

    let info = {
        nome: req.body.nome,
        username: req.body.username,
        password: req.body.password,
        tipoUtilizador: req.body.tipoUtilizador,
        dataNascimento: req.body.dataNascimento,
        foto: req.file.path,
        telemovel: req.body.telemovel,
        email: req.body.email
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}

// 2. get all users
const getAllUsers = async(req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)
}

// 3. get single user

const getOneUser = async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({ where: { id: id }})
    res.status(200).send(user)

}

// 3. get single user

const getOneByName = async (req, res) => {

    let username = req.params.username
    let user = await User.findOne({ where: { username: username }})
    res.status(200).send(user)

}

// 4. update user

const updateUser = async (req, res) => {

    let id = req.params.id

    const user = await User.update(req.body, { where: { id: id }})

    res.status(200).send(user)
   

}

// 5. delete user by id

const deleteUser = async (req, res) => {

    let id = req.params.id
    
    await User.destroy({ where: { id: id }} )

    res.status(200).send('User is deleted !')

}

// 6. Upload Image Controller

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')


module.exports = {
    getAllUsers,
    addUser,
    getOneUser,
    getOneByName,
    updateUser,
    deleteUser,
    upload
}