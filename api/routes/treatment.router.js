const { getAllTreatments, getOneTreatment, createTreatment, updateTreatment, deleteTreatment} = require('../controllers/treatment.controller')

const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', getAllTreatments)
router.get('/:id', getOneTreatment)
router.post('/', createTreatment)
router.put('/:id', updateTreatment)
router.delete('/:id', deleteTreatment)

module.exports = router