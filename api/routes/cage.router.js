const { getAllCages, getOneCage, createCage, updateCage, deleteCage } = require('../controllers/cage.controller')

const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', getAllCages)
router.get('/:id', getOneCage)
router.post('/', createCage)
router.put('/:id', updateCage)
router.delete('/:id', deleteCage)

module.exports = router