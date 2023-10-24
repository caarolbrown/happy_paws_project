const { getAllSickness, getOneSickness, createSickness, updateSickness, deleteSickness} = require('../controllers/sickness.controller')
const { getAllUsers } = require('../controllers/user.controller')
const { checkAuth, checkAdmin, checkEmployee }  = require('../middleware')
const router = require('express').Router()

//definimos CRUD basico de animal
router.get('/', checkAuth, checkAdmin, checkEmployee, getAllSickness)
router.get('/:id',checkAuth, checkAdmin, checkEmployee, getOneSickness)
router.post('/', checkAuth, checkAdmin, checkEmployee, createSickness)
router.put('/:id', checkAuth, checkAdmin, checkEmployee, updateSickness)
router.delete('/:id', checkAuth, checkAdmin, checkEmployee, deleteSickness)

module.exports = router