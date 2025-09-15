"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    static associate(models) {
      Registration.hasOne(models.MosqueDetail, {
        foreignKey: "admin_id",
        sourceKey: "admin_id",
        onDelete: "CASCADE",
      });
      Registration.hasOne(models.FinancialDetail, {
        foreignKey: "admin_id",
        sourceKey: "admin_id",
        onDelete: "CASCADE",
      });
    }
  }
  Registration.init(
    {
      admin_id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: DataTypes.STRING,
      full_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Registration",
      tableName: "registration",
      timestamps: false,
    }
  );
  return Registration;
};
