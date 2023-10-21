const Animal = require('../api/models/animal.model')
const Cage = require('../api/models/cage.model')

function setRelations(){
    try {
        console.log('Done')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }