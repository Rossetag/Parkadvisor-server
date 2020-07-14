"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      starts: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  review.associate = function (models) {
    review.belongsTo(models.user);
    review.belongsTo(models.park);
  };
  return review;
};