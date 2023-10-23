const Animal = require('../models/animal.model')
const Sickness = require('../models/sickness.model')
const Treatment = require('../models/treatment.model')
const Cage = require('../models/cage.model')

async function getAllAnimals(req, res) {
    try {
        const animals = await Animal.findAll()
        return res.status(200).json(animals)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneAnimal(req, res) {
    try {
        const animal = await Animal.findByPk(req.params.id)
        if (!animal) { res.status(500).send('Animal not found') }
        return res.status(200).json(animal)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function setSickness(req, res) {
    try {
        const animal = await Animal.findByPk(req.body.animalId)
        await animal.addSickness(req.body.sicknessId)
        res.status(200).json(animal)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function setTreatment(req, res) {
    try {
        const animal = await Animal.findByPk(req.body.animalId)
        await animal.addTreatment(req.body.treatmentId)
        return res.status(200).json(animal)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function setCage(req, res) {
    try {
        const animal = await Animal.findByPk(req.body.animalId)
        let cageSize

        if (animal.weigth < 10) {
            cageSize = 'small'
        } else if (animal.weigth >= 10 && animal.weigth <= 25) {
            cageSize = 'medium'
        } else {
            cageSize = 'large'
        }
        const cage = await Cage.findByPk(req.body.cageId)
        if (cage.availability === 'occupied') {
            return res.status(404).send('This cage is occupied')
        }
        if (cage.size === cageSize) {
            await animal.setCage(cage)
            const cageUpdate = await Cage.update({ availability: "occupied" }, {
                where: {
                    id: req.body.cageId
                }
            })
            return res.status(200).json(animal)
        } 
        return res.status(500).send('This cage is not accurated for this animal')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//cuando se utilice el postman para crear un animal importante poner body y JSON
async function createAnimal(req, res) {
    try {
        const animal = await Animal.create(req.body)
        return res.status(200).send('Animal created')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateAnimal(req, res) {
    try {
        const animal = await Animal.update(req.body, {
            where: {
                id: req.params.id
            },
        })
        return res.status(200).json(animal)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteAnimal(req, res) {
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

module.exports = {
    getAllAnimals,
    getOneAnimal,
    createAnimal,
    updateAnimal,
    deleteAnimal,
    setSickness,
    setTreatment,
    setCage
}