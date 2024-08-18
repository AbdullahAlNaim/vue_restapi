// Update with your config settings.
require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      // filename: './dev.postgresql'
      host: process.env.DB_HOST,
      database: process.env.DB_Name,  // Name of your database
      user: process.env.DB_USER,   // Your PostgreSQL username
      password: process.env.DB_PASSWORD  // Your PostgreSQL password
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_Name,  // Name of your database
      user: process.env.DB_USER,   // Your PostgreSQL username
      password: process.env.DB_PASSWORD  // Your PostgreSQL password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_Name,  // Name of your database
      user: process.env.DB_USER,   // Your PostgreSQL username
      password: process.env.DB_PASSWORD  // Your PostgreSQL password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
