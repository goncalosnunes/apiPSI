const db = require('../models')


// image Upload
const multer = require('multer')
const path = require('path')

// create main Model
const Utente = db.utentes

// main work

// 1. create utente

const addUtente = async (req, res) => {

    let info = {
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
        sitUtente: req.body.sitUtente,
        dAlteraSit: req.body.dAlteraSit,
        estadoCivil: req.body.estadoCivil,
        nacionalidade: req.body.nacionalidade,
        morada: req.body.morada,
        codigoPostal: req.body.codigoPostal,
        contacto: req.body.contacto,
        contacEmergencia: req.body.contacEmergencia,
        foto: req.file.path,
        notas: req.body.notas,
    }

    const utente = await Utente.create(info)
    res.status(200).send(utente)
    console.log(utente)

}

// 2. get all utentes
const getAllUtentes = async(req, res) => {

    let utentes = await Utente.findAll({})
    res.status(200).send(utentes)
}

// 3. get single utente

const getOneUtente = async (req, res) => {

    let id = req.params.id
    let utente = await Utente.findOne({ where: { id: id }})
    res.status(200).send(utente)

}

// 4. update utente

const updateUtente = async (req, res) => {

    let id = req.params.id

    const utente = await Utente.update(req.body, { where: { id: id }})

    res.status(200).send(utente)
   

}

// 5. delete utente by id

const deleteUtente = async (req, res) => {

    let id = req.params.id
    
    await Utente.destroy({ where: { id: id }} )

    res.status(200).send('Utente is deleted !')

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
    getAllUtentes,
    addUtente,
    getOneUtente,
    updateUtente,
    deleteUtente,
    storage,
    upload
}