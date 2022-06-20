'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    IDUsers: DataTypes.INTEGER,
    Status: DataTypes.BOOLEAN,
    Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Orders',
  });
  Orders.associate = function(models){
    Orders.belongsTo(models.Users, {foreignKey:'IDUser'
  })
  Orders.belongsToMany(models.Users, {
    through:'orderdetails',foreignKey:'IDOrders',
    as:'users'
  })
  };
  return Orders;
};