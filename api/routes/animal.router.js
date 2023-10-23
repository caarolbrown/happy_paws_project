const { getAllAnimals, getOneAnimal, createAnimal, updateAnimal, deleteAnimal } = require('../controllers/animal.controller')

const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', getAllAnimals)
router.get('/:id', getOneAnimal)
router.post('/', createAnimal)
router.put('/:id', updateAnimal)
router.delete('/:id', deleteAnimal)
module.exports = router