const { getAllCages, getOneCage, createCage, updateCage, deleteCage, cageStatus } = require('../controllers/cage.controller')
const { checkAuth, checkAdmin, checkVolunteer } = require('../middleware')

const router = require('express').Router()

//definimos CRUD basico de cage
router.get('/', checkAuth, checkVolunteer, getAllCages)
router.get('/availability/:id', checkAuth, checkVolunteer, cageStatus)
router.get('/:id', checkAuth, checkVolunteer, getOneCage)
router.post('/', checkAuth, checkAdmin, createCage)
router.put('/:id', checkAuth, checkAdmin, updateCage)
router.delete('/:id', checkAuth, checkAdmin, deleteCage)

module.exports = router