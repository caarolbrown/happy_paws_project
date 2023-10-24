const User = require('../models/user.model.js') //nos importamos el modelo de usuario
const Task = require('../models/task.model.js')
const AdoptiveFamily = require('../models/adoptiveFamily.model.js')

async function getAllUsers(req, res){
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
        if (!user){ res.status(500).send('User not found')}
        return res.status(200).json(user)
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function getProfile(req, res) {
    try {
    
        const user = await User.findByPk(res.locals.user.id)
        if (!user) {{ res.status(500).send('User not found') }
        return res.status(200).json(user)
    }
    }   catch (error) {
        return res.status(402).send(error.message)
    }
}

async function createUser(req, res){
    try {
        const user = await User.create(req.body)
        return res.status(200).send('User created')

    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function updateUser(req, res){
    try {
        const user = await User.update(req.body, {
            where: { id: req.params.id },
        })
        return res.status(200).json(user)//({text: 'User updated'})
    } catch (error) {
        return res.status(402).send(error.message)
    }
}

async function deleteUser(req, res){
    try {
        const user = await User.destroy({
            where: { id: req.params.id },
        })
       return res.status(200).json({ text: 'User removed', user: user })
    } catch (error) {
       return res.status(500).send(error.message)
    }
}

async function setTask(req, res) {
    try {
        const task = await Task.findByPk(req.body.taskId)
        const user = await User.findByPk(req.body.voluntarioId, {
            include: Task
        })

        if (user.role != 'volunteer'){
            return res.status(501).send("This is not volunteer")
        }
        if (user.tasks.length >= 2){
            return res.status(501).send("Este Voluntario tiene demasiadas tareas")
        }
        await task.setUser(user)
        return res.status(200).send("Tarea añadida")
    } catch (error) {
        return res.status(500).send(error.message)

    }
}


async function getPayroll(req, res) {
    try {
        const user = await User.findByPk(req.body.userId, {
            include: Payroll
        })
        if(!user) {
            return res.status(404).json({ error: 'Usuario no encontrado.'})    
        }
        if (user.role !== 'employee' || user.role !== 'admin') {
            return res.status(403).json({ error: 'Solo el personal autorizado puede acceder a payroll'})
        }
        return res.status(200).json(user.payroll)
     } catch (error) {
        return res.status(500).send(error.message)
        
    }
}

// async function getAdoptiveFamilies(req, res) {
//     try {
//         const user = await User.findByPk(req.body.userId, {
//             include: AdoptiveFamily
//         })
//         if (!user) {
//             return res.status(404).json({ error: 'Usuario no encontrado.' })
//         }
//         if (user.role !== 'employee' || user.role !== 'admin') {
//             return res.status(403).json({ error: 'Solo el personal autorizado puede acceder a payroll' })
//         }
//         return res.status(200).json(user.payroll)
//     } catch (error) {
//         return res.status(500).send(error.message)

//     }
// }

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser, getProfile, setTask, getPayroll }