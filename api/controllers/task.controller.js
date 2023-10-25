const Task = require('../models/task.model.js') 


async function getAllTasks(req, res){
    try {
        const tasks = await Task.findAll()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneTask(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  
    try {
        const task = await Task.findByPk(req.params.id)
        if (!task){ res.status(500).send('Task not found')}
        return res.status(200).json(task)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createTask(req, res){
    console.log(req.body)
    try {
        const task = await Task.create(req.body)
        return res.status(200).send('Task created')

    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function getAvailability(req, res){
    try {
        const availability = await Task.findAll({
            where: req.body
        }) 
        return res.status(200).json(availability)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function updateTask(req, res){
    try {
        const task = await Task.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(task)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteTask(req, res){
    try {
        const task = await Task.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: 'Task removed', task: task})
    } catch (error) {
        res.status(402).send(error.message)
    }
}



module.exports = { getAllTasks, getOneTask, createTask, updateTask, deleteTask, getAvailability }