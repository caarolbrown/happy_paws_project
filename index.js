const { checkDB, syncModels } = require('./database/index.js')
//falta anadir aqui la function de setear relaciones pero mas adelante
const express = require ('express')
const cors = require ('cors')
const morgan = require ('morgan')

require ('dotenv').config()

async function connectDB(){
    await checkDB() 
    await syncModels() 
}

function launchServer(){
    const app = express()
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    //.use('/api', require('./api/routes.index.js'))
    .listen(process.env.SRV_PORT, () => { console.log ('Express server listening on port 3000')})
}

async function startAPI(){
    connectDB()
    launchServer()
}

startAPI()