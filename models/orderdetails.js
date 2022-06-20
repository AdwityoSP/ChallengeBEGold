'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderDetails.init({
    IDOrders: DataTypes.INTEGER,
    IDItems: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetails',
  });
  OrderDetails.associate = function(models){
    OrderDetails.belongsTo(models.orders,{foreignKey:'IDOrders'})
    OrderDetails.belongsTo(models.items,{foreignKey:'IDItems'})
  }
  return OrderDetails;
};