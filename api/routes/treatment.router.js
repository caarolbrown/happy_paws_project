const { getAllTreatments, getOneTreatment, createTreatment, updateTreatment, deleteTreatment} = require('../controllers/treatment.controller')
const { checkAuth, checkAdmin, checkEmployee} = require('../middleware')
const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', checkAuth, checkAdmin, checkEmployee, getAllTreatments)
router.get('/:id', checkAuth, checkAdmin, checkEmployee, getOneTreatment)
router.post('/', checkAuth, checkAdmin, checkEmployee, createTreatment)
router.put('/:id', checkAuth, checkAdmin, checkEmployee, updateTreatment)
router.delete('/:id', checkAuth, checkAdmin, checkEmployee, deleteTreatment)

module.exports = router