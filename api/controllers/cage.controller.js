const Cage = require('../models/cage.model')

async function getAllCages(req, res) {
    try {
        const cages = await Cage.findAll()
        res.status(200).json(cages)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getOneCage(req, res) {
    try {
        const cage = await Cage.findByPk(req.params.id)
        if (!cage) { res.status(500).send('Cage not found') }
        return res.status(200).json(cage)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//cuando se utilice el postman para crear una cage importante poner body y JSON
async function createCage(req, res) {
    try {
        const cage = await Cage.create(req.body)
        res.status(200).send('Cage created')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateCage(req, res) {
    try {
        const cage = await Cage.update(req.body, {
            where: {
                id: req.params.id
            },
        })
        res.status(200).json(cage)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function cageStatus(req, res) {
    try {
        const cage = await Cage.findByPk(req.params.id)

        if (cage.availability === 'occupied') {
            return res.status(500).send('This cage is occupied')
        }
        return res.status(200).send('This cage is free')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteCage(req, res) {
    try {
        const cage = await Cage.destroy({
            where: {
                id: req.params.id
            },
        })
        res.status(500).json({ text: 'Cage removed', cage: cage })
    } catch (error) {

    }
}

module.exports = {
    getAllCages,
    getOneCage,
    createCage,
    updateCage,
    deleteCage,
    cageStatus
}