module.exports = (sequelize, DataTypes) => {
  const PrayerTiming = sequelize.define(
    "PrayerTiming",
    {
      admin_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fajr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dhuhr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      asr: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maghrib: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jummah: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "prayer_timings",
      timestamps: false,
    }
  );

  // ✅ Association
  PrayerTiming.associate = (models) => {
    PrayerTiming.belongsTo(models.Registration, {
      foreignKey: "admin_id",
      targetKey: "admin_id",
      onDelete: "CASCADE",
    });
  };

  return PrayerTiming;
};
