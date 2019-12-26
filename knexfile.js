// Update with your config settings.
require('dotenv').config()

//env for postgres production
const pgUser = process.env.PG_USER || 'russ';
const pgDb = process.env.PG_DB || 'landBE'
const passDb = process.env.PASSWORD_DB;


const prodConnection = `postgres://${pgUser}@localhost/${pgDb}`

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/land.sqlite3"
    },
    useNullAsDefault: true, //prevents bugs and issues

    migrations: {
      directory: "./data/migrations" //to put migrations under folder data
    },
    seeds: {
      directory: "./data/seeds"
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on Foreign Key enforcement
      }
    }
  },

  staging: {
    client: "pg",
    connection: {
      host:'localhost',
      database: "landBE",
      user: "postgres",
      password: passDb,
      host:'localhost',
      port:5432,
    },
    pool: {  //# of connections between api and db server.  Db manager will decide
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations" //to put migrations under folder data
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "./data/seeds"
    }
  }
};
