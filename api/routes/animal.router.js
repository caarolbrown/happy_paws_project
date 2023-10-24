const { getAllAnimals, getOneAnimal, createAnimal, updateAnimal, deleteAnimal, setSickness, setTreatment, setCage} = require('../controllers/animal.controller')
const { checkAuth, checkAdmin, checkEmployee } = require('../middleware')
const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', getAllAnimals)
router.get('/:id', getOneAnimal)
router.post('/', checkAuth, checkAdmin, checkEmployee, createAnimal)
router.put('/sickness', checkAuth, checkAdmin, checkEmployee, setSickness)
router.put('/treatment', checkAuth, checkAdmin, checkEmployee, setTreatment)
router.put('/cage', checkAuth, checkAdmin, checkEmployee, setCage)
router.put('/:id', checkAuth, checkAdmin, checkEmployee, updateAnimal)
router.delete('/:id', checkAuth, checkAdmin, checkEmployee, deleteAnimal)
module.exports = router