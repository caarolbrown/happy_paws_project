const Animal = require('../api/models/animal.model')
const Cage = require('../api/models/cage.model')
const Treatment = require('../api/models/treatment.model')
const Sickness = require('../api/models/sickness.model')

function setRelations(){
    try {
        Animal.belongsToMany(Treatment, { through: 'animal_treatment' })
        Treatment.belongsToMany(Animal, { through: 'animal_treatment' })

        Animal.belongsToMany(Sickness, { through: 'animal_sickness' })
        Sickness.belongsToMany(Animal, { through: 'animal_sickness' })

        console.log('Done')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }