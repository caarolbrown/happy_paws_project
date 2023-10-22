const HostFamily = require('../models/hostFamily.model') //nos importamos el modelo de usuario


async function getAllHostFamily(req, res){
    try {
        const hostFamily = await HostFamily.findAll()
        res.status(200).json(hostFamily)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneHostFamily(req, res) {
    console.log({body: req.body, params: req.params, query: req.query})  
    try {
        const hostFamily = await HostFamily.findByPk(req.params.id)
        if (!hostFamily){ res.status(500).send('HostFamily not found')}
        res.status(200).json(hostFamily)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getProfile(req, res) {
    console.log(res.locals.hostFamily)
    try {
        const hostFamily = await HostFamily.findByPk(res.locals.hostFamily.id)
        if (!hostFamily) { res.status(500).send('HostFamily not found') }
        res.status(200).json(hostFamily)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createHostFamily(req, res){
    console.log(req.body)
    try {
        const hostFamily = await HostFamily.create(req.body)
        res.status(200).send('HostFamily created')

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateHostFamily(req, res){
    try {
        const hostFamily = await HostFamily.update(req.body, {
            where: {id: req.params.id},
        })
        res.status(200).json(hostFamily)//({text: 'HostFamily updated'})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteHostFamily(req, res){
    try {
        const hostFamily = await HostFamily.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: 'HostFamily removed', hostFamily: hostFamily})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllHostFamily, getOneHostFamily, createHostFamily, updateHostFamily, deleteHostFamily, getHostFamily}