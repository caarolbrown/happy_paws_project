const { getAllSickness, getOneSickness, createSickness, updateSickness, deleteSickness} = require('../controllers/sickness.controller')
const { checkAuth, checkEmployee, checkVolunteer } = require('../middleware')

const router = require('express').Router()

//definimos CRUD basico de sickness
router.get('/', checkAuth, checkVolunteer, getAllSickness)
router.get('/:id', checkAuth, checkVolunteer, getOneSickness)
router.post('/', checkAuth, checkEmployee, createSickness)
router.put('/:id', checkAuth, checkEmployee, updateSickness)
router.delete('/:id', checkAuth, checkEmployee, deleteSickness)

module.exports = router