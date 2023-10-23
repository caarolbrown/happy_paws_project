//const User = require('../api/models/user.model.js')
const AdoptiveFamily = require('../api/models/adoptiveFamily.model');
//const Payroll = require('../models/payroll.model.js');
//const HostFamily = require('../models/hostFamily.model.js');
//const Task = require('../models/task.model.js');
function setRelations(){
    try {
        console.log('Done')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { setRelations }

/*function setRelations() {
    try {
        //relaciones
        User.hasOne(Payroll);
        User.hasOne(HostFamily);
        User.hasOne(AdoptiveFamily);
        User.belongsToMany(Task, { through: 'UserTasks' });
        Task.belongsToMany(User, { through: 'UserTasks' });
        console.log('Relations added to all models')
    }   catch (error) {
        console.log(error)
    }

module.exports = {setRelations}}*/