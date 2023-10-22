const Animal = require('../api/models/animal.model')
const Cage = require('../api/models/cage.model')
const Treatment = require('../api/models/treatment.model')
const Sickness = require('../api/models/sickness.model')

function setRelations(){
    try {
        console.log('Done')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }