const User = require('../models/user.model.js') //nos importamos el modelo de usuario
const Task = require('../models/task.model.js')
const bcrypt = require('bcrypt')

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll({
            where: req.query
        })
        return res.status(200).json(users)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function getOneUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id)
        if (!user) { res.status(500).send('User not found') }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function getProfile(req, res) {
    try {
        const user = await User.findByPk(res.locals.user.id, {
            include: Task
        })
        if (!user) { res.status(500).send('User not found') }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function createUser(req, res) {
    const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
    const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds)
    req.body.password = hashedPassword
    try {
        const user = await User.create(req.body)
        return res.status(200).send('User created')

    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function updateUser(req, res) {
    try {
        const user = await User.update(req.body, {
            where: { id: req.params.id },
        })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function setTask(req, res) {
    try {
        const task = await Task.findByPk(req.body.taskId)
        const user = await User.findByPk(req.body.userId, {
            include: Task
        })
        if (user.role != 'volunteer') {
            return res.status(501).send("This is not a volunteer")
        }
        if (user.tasks.length >= 2) {
            return res.status(501).send("This volunteer has many of tasks")
        }
        await task.setUser(user)
        return res.status(200).send("Task added")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.destroy({
            where: { id: req.params.id },
        })
        return res.status(200).json({ text: 'User removed', user: user })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile, setTask }