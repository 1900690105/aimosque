// models/Donate.js
module.exports = (sequelize, DataTypes) => {
  const Donate = sequelize.define("Donate", {
    mosque_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    donor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    donor_mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_id: {
      type: DataTypes.STRING, // 👈 changed to STRING
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    payment_id: {
      type: DataTypes.STRING, // 👈 changed to STRING
      allowNull: false,
    },
  });
  return Donate;
};
