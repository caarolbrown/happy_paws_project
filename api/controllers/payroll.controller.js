const Payroll = require('../models/payroll.model') //nos importamos el modelo de adpotivefamilies


async function getAllPayroll(req, res){
    try {
        const payroll = await Payroll.findAll()
        res.status(200).json(payroll)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOnePayroll(req, res) {
    console.log({body: req.body, params: req.params, query: req.query})  
    try {
        const payroll = await Payroll.findByPk(req.params.id)
        if (!payroll){ res.status(500).send('Payroll not found')}
        res.status(200).json(payroll)
    } catch (error) {
        res.status(402).send(error.message)
    }
}
async function createPayroll(req, res){
    console.log(req.body)
    try {
        const payroll = await Payroll.create(req.body)
        res.status(200).send('Payroll created')

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updatePayroll(req, res){
    try {
        const payroll = await Payroll.update(req.body, {
            where: {id: req.params.id},
        })
        res.status(200).json(payroll)//({text: 'Payroll updated'})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deletePayroll(req, res){
    try {
        const payroll = await Payroll.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: 'Payroll removed', payroll: payroll})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllPayroll, getOnePayroll, createPayroll, updatePayroll, deletePayroll }