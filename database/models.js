const User = require('../api/models/user.model.js')
const Task = require('../api/models/task.model.js')
const Treatment = require('../api/models/treatment.model')
const Sickness = require('../api/models/sickness.model')
const Animal = require('../api/models/animal.model')
const Cage = require('../api/models/cage.model')
const Payroll = require('../api/models/payroll.model.js')
const HostFamily = require('../api/models/hostfamily.model.js')
const AdoptiveFamily = require('../api/models/adoptiveFamily.model.js')

function setRelations(){
    try {
        //One to one 
        Animal.hasOne(Cage)
        Cage.belongsTo(Animal)

        User.hasOne(Payroll)
        Payroll.belongsTo(User)

        User.hasOne(HostFamily)
        HostFamily.belongsTo(User)

        User.hasOne(AdoptiveFamily)
        AdoptiveFamily.belongsTo(User)

        //One to Many 
        User.hasMany(Task)
        Task.belongsTo(User)

        Animal.hasMany(AdoptiveFamily)
        AdoptiveFamily.belongsTo(Animal)

        //Many to many
        Animal.belongsToMany(Treatment, { through: 'animal_treatment' })
        Treatment.belongsToMany(Animal, { through: 'animal_treatment' })

        Animal.belongsToMany(Sickness, { through: 'animal_sickness' })
        Sickness.belongsToMany(Animal, { through: 'animal_sickness' })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }