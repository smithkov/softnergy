'use strict';
module.exports = (sequelize, DataTypes) => {
  const Career = sequelize.define('Career', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    path: DataTypes.STRING,
    message: DataTypes.STRING,
    position: DataTypes.STRING,
    linkedin: DataTypes.STRING
  }, {});
  Career.associate = function(models) {
    // associations can be defined here
  };
  return Career;
};