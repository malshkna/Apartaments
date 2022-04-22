const sequelize = require('../db')
const{DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Apartament = sequelize.define('apartament',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING},
    area: {type: DataTypes.STRING},
    countRooms: {type: DataTypes.STRING},
    floor: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING},
    priceSquareMetr: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING, allowNull: false}
})

module.exports = {
    User,
    Apartament
}