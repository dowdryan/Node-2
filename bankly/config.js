/** Shared config for application; can be req'd many places. */

require('dotenv').config(); // Added .config();

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';
const PORT = +process.env.PORT || 3000;
const BCRYPT_WORK_FACTOR = 10;
const DB_URI = process.env.NODE_ENV === 'test'
  ? "postgres:///bankly_test?host=/var/run/postgresql"
  : "postgres:///bankly?host=/var/run/postgresql";

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
