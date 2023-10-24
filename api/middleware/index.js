const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

//function para chequear la autenticación y si el usuario está logueado y tiene token 
function checkAuth(req, res, next){
    if (!req.headers.authorization) return res.status(404).send('Token not found')

    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
        if (err) return res.status(401).send('Token not valid')

        const user = await User.findOne({ where: { email: result.email } })
        if (!user) return res.status(404).send('User not found')

        res.locals.user = user

        next()
    })
}

function checkAdmin(req, res, next){

}

function checkEmployee(req, res, next) {

}

function checkVolunteer(req, res, next) {

}

function checkUser(req, res, next){

}