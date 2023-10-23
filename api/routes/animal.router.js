const { getAllAnimals, getOneAnimal, createAnimal, updateAnimal, deleteAnimal, setSickness, setTreatment} = require('../controllers/animal.controller')

const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', getAllAnimals)
router.get('/:id', getOneAnimal)
router.post('/', createAnimal)
router.put('/sickness', setSickness)
router.put('/treatment', setTreatment)
router.put('/:id', updateAnimal)
router.delete('/:id', deleteAnimal)
module.exports = router