'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    Name: DataTypes.STRING,
    Password: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  Users.associate = function(models){
    Users.hasMany(models.Orders,{
      foreignKey:'IDUsers',
      as:'orders'
  })
  };
  return Users;
};