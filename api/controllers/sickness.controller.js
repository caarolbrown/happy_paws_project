const Sickness = require('../models/sickness.model')

async function getAllSickness(req, res){
    try {
        const sickness = await Sickness.findAll()
        res.status(200).json(sickness)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneSickness(req, res){
    try {
        const sickness = await Sickness.findByPk(req.params.id)
        if (!sickness) { res.status(500).send('Sickness not found')}
        res.status(200).json(sickness)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//cuando se utilice el postman para crear una sickness importante poner body y JSON
async function createSickness(req, res){
    try {
        const sickness = await Sickness.create(req.body)
        res.status(200).send('Sickness created')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateSickness(req, res){
    try {
        const sickness = await Sickness.update(req.body, {
            where: {
                id: req.params.id
            },
        })
        res.status(200).json(sickness)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteSickness(req, res){
    try {
        const sickness = await Sickness.destroy({
            where: {
                id: req.params.id
            },
        })
        res.status(500).json({ text: 'Sickness removed', sickness: sickness })
    } catch (error) {
        
    }
}

module.exports = { 
    getAllSickness, 
    getOneSickness, 
    createSickness, 
    updateSickness, 
    deleteSickness 
}