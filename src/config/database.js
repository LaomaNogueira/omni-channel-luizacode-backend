const dotEnv = require('dotenv');
dotEnv.config();

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false 
      }
  }
}



