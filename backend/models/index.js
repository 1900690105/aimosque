const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Initialize db object with sequelize instance
const db = {
  sequelize,
  Sequelize,
};

// db.Mosque = require("./mosque")(sequelize, DataTypes);
db.Donate = require("./Donate")(sequelize, DataTypes);
db.Registration = require("./Registration")(sequelize, DataTypes);
db.PrayerTiming = require("./PrayerTiming")(sequelize, DataTypes);
db.MosqueDetail = require("./MosqueDetail")(sequelize, DataTypes);
db.FinancialDetail = require("./FinancialDetail")(sequelize, DataTypes);

// Set up associations
Object.values(db).forEach((model) => {
  if (model && typeof model.associate === "function") {
    model.associate(db);
  }
});

module.exports = db;
