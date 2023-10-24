const { getAllCages, getOneCage, createCage, updateCage, deleteCage } = require('../controllers/cage.controller')
const { checkAuth, checkAdmin, checkEmployee } = require('../middleware')
const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', checkAuth, checkAdmin, checkEmployee, getAllCages)
router.get('/:id', checkAuth, checkAdmin, checkEmployee, getOneCage)
router.post('/', checkAuth, checkAdmin, checkEmployee, createCage)
router.put('/:id', checkAuth, checkAdmin, checkEmployee, updateCage)
router.delete('/:id', checkAuth, checkAdmin, checkEmployee, deleteCage)

module.exports = router