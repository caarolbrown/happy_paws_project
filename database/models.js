const User = require('../api/models/user.model.js')
const Task = require('../api/models/task.model.js')
const Treatment = require('../api/models/treatment.model')
const Sickness = require('../api/models/sickness.model')
const Animal = require('../api/models/animal.model')
const Cage = require('../api/models/cage.model')

function setRelations(){
    try {
        //One to one 
        Animal.hasOne(Cage)
        Cage.belongsTo(Animal)

        //Many to many
        Animal.belongsToMany(Treatment, { through: 'animal_treatment' })
        Treatment.belongsToMany(Animal, { through: 'animal_treatment' })

        Animal.belongsToMany(Sickness, { through: 'animal_sickness' })
        Sickness.belongsToMany(Animal, { through: 'animal_sickness' })

        console.log('Done')
        User.hasMany(Task);
        Task.belongsTo(User);
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }