import app from "./app.js";
import { sequelize } from "./database/database.js";

const main = async () => {
  try {
    await sequelize.authenticate();
    app.listen(app.get("port"));
    console.log("Connection has been established successfully.");
    console.log(`Server on port ${app.get("port")}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
