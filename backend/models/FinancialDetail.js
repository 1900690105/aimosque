"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class FinancialDetail extends Model {
    static associate(models) {
      FinancialDetail.belongsTo(models.Registration, {
        foreignKey: "admin_id",
        targetKey: "admin_id",
        onDelete: "CASCADE",
      });
    }
  }
  FinancialDetail.init(
    {
      bank_account_number: DataTypes.STRING,
      bank_ifsc: DataTypes.STRING,
      bank_account_holder: DataTypes.STRING,
      bank_name: DataTypes.STRING,
      upi_id: DataTypes.STRING,
      enable_donation_tracking: DataTypes.BOOLEAN,
      admin_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "FinancialDetail",
      tableName: "financial_details",
      timestamps: false,
    }
  );
  return FinancialDetail;
};
