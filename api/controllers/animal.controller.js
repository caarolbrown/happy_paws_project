const Animal = require('../models/animal.model')

async function getAllAnimals(req, res){
    try {
        const animals = await Animal.findAll()
        res.status(200).json(animals)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneAnimal(req, res){
    try {
        const animal = await Animal.findByPk(req.params.id)
        if (!animal) { res.status(500).send('Animal not found')}
        res.status(200).json(animal)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//cuando se utilice el postman para crear un animal importante poner body y JSON
async function createAnimal(req, res){
    try {
        const animal = await Animal.create(req.body)
        res.status(200).send('Animal created')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateAnimal(req, res){
    try {
        const animal = await Animal.update(req.body, {
            where: {
                id: req.params.id
            },
        })
        res.status(200).json(animal)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteAnimal(req, res){
    try {
        const animal = await Animal.destroy({
            where: {
                id: req.params.id
            },
        })
        res.status(500).json({ text: 'Animal removed', animal: animal })
    } catch (error) {
        
    }
}

module.exports = { getAllAnimals, getOneAnimal, createAnimal, updateAnimal, deleteAnimal }