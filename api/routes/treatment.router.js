const { getAllTreatments, getOneTreatment, createTreatment, updateTreatment, deleteTreatment} = require('../controllers/treatment.controller')
const { checkAuth, checkEmployee, checkVolunteer } = require('../middleware')

const router = require('express').Router()

//definimos CRUD basico de treatment
router.get('/', checkAuth, checkVolunteer, getAllTreatments)
router.get('/:id', checkAuth, checkVolunteer, getOneTreatment)
router.post('/', checkAuth, checkEmployee, createTreatment)
router.put('/:id', checkAuth, checkEmployee, updateTreatment)
router.delete('/:id', checkAuth, checkEmployee, deleteTreatment)

module.exports = router