const { getAllCages, getOneCage, createCage, updateCage, deleteCage, cageStatus } = require('../controllers/cage.controller')

const router = require('express').Router()

//definimos CRUD basico de cage
router.get('/', getAllCages)
router.get('/availability', cageStatus)
router.get('/:id', getOneCage)
router.post('/', createCage)
router.put('/:id', updateCage)
router.delete('/:id', deleteCage)

module.exports = router