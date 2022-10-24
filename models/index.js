const Task = require("./Task")
const User = require("./User")

User.hasMany(Task, {
foreignKey: "User_id",
onDelete: "CASCADE",
});

Task.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = {User, Task}