const HostFamily = require('../models/hostfamily.model') //nos importamos el modelo de hostfamily


async function getAllHostFamily(req, res){
    try {
        const hostFamily = await HostFamily.findAll()
        return res.status(200).json(hostFamily)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function getOneHostFamily(req, res) {
    console.log({body: req.body, params: req.params, query: req.query})  
    try {
        const hostFamily = await HostFamily.findByPk(req.params.id)
        if (!hostFamily){ res.status(500).send('HostFamily not found')}
        return res.status(200).json(hostFamily)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}
async function createHostFamily(req, res){
    console.log(req.body)
    try {
        const hostFamily = await HostFamily.create(req.body)
        return res.status(200).send('HostFamily created')

    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function updateHostFamily(req, res){
    try {
        const hostFamily = await HostFamily.update(req.body, {
            where: {id: req.params.id},
        })
        return res.status(200).json(hostFamily)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function deleteHostFamily(req, res){
    try {
        const hostFamily = await HostFamily.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: 'HostFamily removed', hostFamily: hostFamily })
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { 
    getAllHostFamily, 
    getOneHostFamily, 
    createHostFamily, 
    updateHostFamily, 
    deleteHostFamily 
}