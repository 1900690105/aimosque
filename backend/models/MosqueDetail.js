"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MosqueDetail extends Model {
    static associate(models) {
      MosqueDetail.belongsTo(models.Registration, {
        foreignKey: "admin_id",
        targetKey: "admin_id",
        onDelete: "CASCADE",
      });
    }
  }
  MosqueDetail.init(
    {
      mosque_name: DataTypes.STRING,
      mosque_image: DataTypes.TEXT,
      mosque_history: DataTypes.TEXT,
      mosque_address: DataTypes.STRING,
      admin_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "MosqueDetail",
      tableName: "mosque_details",
      timestamps: false,
    }
  );
  return MosqueDetail;
};
