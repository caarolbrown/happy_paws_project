const AdoptiveFamily = require('../models/adoptiveFamily.model') //nos importamos el modelo de adpotivefamilies


async function getAllAdoptiveFamily(req, res){
    try {
        const adoptiveFamily = await AdoptiveFamily.findAll()
        res.status(200).json(adoptiveFamily)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneAdoptiveFamily(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  
    try {
        const adoptiveFamily = await AdoptiveFamily.findByPk(req.params.id)
        if (!adoptiveFamily){ res.status(500).send('AdoptiveFamily not found')}
        res.status(200).json(adoptiveFamily)
    } catch (error) {
        res.status(402).send(error.message)
    }
}
async function createAdoptiveFamily(req, res){
    console.log(req.body)
    try {
        const adoptiveFamily = await AdoptiveFamily.create(req.body)
        res.status(200).send('AdoptiveFamily created')

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateAdoptiveFamily(req, res){
    try {
        const adoptiveFamily = await AdoptiveFamily.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(adoptiveFamily)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteAdoptiveFamily(req, res){
    try {
        const adoptiveFamily = await AdoptiveFamily.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: 'AdoptiveFamily removed', adoptiveFamily: adoptiveFamily})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllAdoptiveFamily, getOneAdoptiveFamily, createAdoptiveFamily, updateAdoptiveFamily, deleteAdoptiveFamily }