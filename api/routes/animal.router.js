const { getAllAnimals, getOneAnimal, createAnimal, updateAnimal, deleteAnimal, setSickness, setTreatment, setCage} = require('../controllers/animal.controller')
const { checkAuth, checkAdmin, checkEmployee } = require('../middleware')

const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', getAllAnimals)
router.get('/:id', getOneAnimal)
router.post('/', checkAuth, checkAdmin, createAnimal)
router.put('/sickness', checkAuth, checkEmployee, setSickness)
router.put('/treatment', checkAuth, checkEmployee, setTreatment)
router.put('/cage', checkAuth, checkEmployee, setCage)
router.put('/:id', checkAuth, checkAdmin, updateAnimal)
router.delete('/:id', checkAuth, checkAdmin, deleteAnimal)

module.exports = router