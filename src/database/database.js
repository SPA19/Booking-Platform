import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "db_booking_platform",
  "root",
  "santi1234",
  {
    host: "127.0.0.1",
    dialect: "mariadb",
  }
);
