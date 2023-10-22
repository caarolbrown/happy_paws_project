const User = require('../models/user.model') //nos importamos el modelo de usuario


async function getAllUsers(req, res){
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneUser(req, res) {
    console.log({body: req.body, params: req.params, query: req.query})  
    try {
        const user = await User.findByPk(req.params.id)
        if (!user){ res.status(500).send('User not found')}
        res.status(200).json(user)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getProfile(req, res) {
    console.log(res.locals.user)
    try {
        const user = await User.findByPk(res.locals.user.id)
        if (!user) { res.status(500).send('User not found') }
        res.status(200).json(user)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createUser(req, res){
    console.log(req.body)
    try {
        const user = await User.create(req.body)
        res.status(200).send('User created')

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateUser(req, res){
    try {
        const user = await User.update(req.body, {
            where: {id: req.params.id},
        })
        res.status(200).json(user)//({text: 'User updated'})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteUser(req, res){
    try {
        const user = await User.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: 'User removed', user: user})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile}