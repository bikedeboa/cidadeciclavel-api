'use strict';
module.exports = (sequelize, DataTypes) => {
  const RequestLocal = sequelize.define('RequestLocal', {
    lat: DataTypes.STRING,
    lng: DataTypes.STRING,
    support: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    description: DataTypes.TEXT,
    photo: DataTypes.STRING,
    views: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    authorIP: DataTypes.STRING,
    isCommerce: DataTypes.BOOLEAN,
    commerceName: DataTypes.STRING,
    commercePhone: DataTypes.STRING,
    commerceRelation: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
  }, {});
  RequestLocal.associate = function(models) {
    // associations can be defined here
    RequestLocal.belongsTo(models.User, {foreignKey: 'user_id', hooks: true});
  };
  console.log(RequestLocal)
  return RequestLocal;
};