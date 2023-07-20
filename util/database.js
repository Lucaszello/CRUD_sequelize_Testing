const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('blog',"ptyk","paingpaing",{
    host : "localhost",
    dialect : "mysql",
    
})
module.exports = sequelize;