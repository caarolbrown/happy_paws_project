const User = require('../api/models/user.model.js')
const Task = require('../api/models/task.model.js')

function setRelations(){
    try {
        console.log('Done')
    } catch (error) {
          //relaciones
          /*User.hasOne(Payroll);
          User.hasOne(HostFamily);
          User.hasOne(AdoptiveFamily);
          User.belongsToMany(Task, { through: 'UserTasks' });
          Task.belongsToMany(User, { through: 'UserTasks' });*/
        console.log(error)
    }
}

module.exports = { setRelations }