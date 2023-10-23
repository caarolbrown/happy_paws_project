const { getAllSickness, getOneSickness, createSickness, updateSickness, deleteSickness} = require('../controllers/sickness.controller')

const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', getAllSickness)
router.get('/:id', getOneSickness)
router.post('/', createSickness)
router.put('/:id', updateSickness)
router.delete('/:id', deleteSickness)

module.exports = router