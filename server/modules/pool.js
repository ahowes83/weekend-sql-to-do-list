const pg = require('pg');
const pool = new pg.Pool({
  host: 'localhost',
  database: 'andyhowes',
  port: 5432,
  max: 12,
  idTimeoutMillis: 15000
});

module.exports = pool;