const Treatment = require('../models/treatment.model')

async function getAllTreatments(req, res){
    try {
        const treatments = await Treatment.findAll()
        res.status(200).json(treatments)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneTreatment(req, res){
    try {
        const treatment = await Treatment.findByPk(req.params.id)
        if (!treatment) { res.status(500).send('Treatment not found')}
        res.status(200).json(treatment)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//cuando se utilice el postman para crear un treatment importante poner body y JSON
async function createTreatment(req, res){
    try {
        const treatment = await Treatment.create(req.body)
        res.status(200).send('Treatment created')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateTreatment(req, res){
    try {
        const treatment = await Treatment.update(req.body, {
            where: {
                id: req.params.id
            },
        })
        res.status(200).json(treatment)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteTreatment(req, res){
    try {
        const treatment = await Treatment.destroy({
            where: {
                id: req.params.id
            },
        })
        res.status(500).json({ text: 'Treatment removed', treatment: treatment })
    } catch (error) {
        
    }
}

module.exports = { 
    getAllTreatments, 
    getOneTreatment, 
    createTreatment, 
    updateTreatment, 
    deleteTreatment 
}