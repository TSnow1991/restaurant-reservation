/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://dmumvhgg:d4tYSJAQGGK-iVMcQ7ig2TKbrMQW7K2W@peanut.db.elephantsql.com/dmumvhgg",
  DATABASE_URL_DEVELOPMENT = "postgres://czyhiuww:rFis_n5hoC3J5MdI42rsB6DwGU_nlY0E@peanut.db.elephantsql.com/czyhiuww",
  DATABASE_URL_TEST = "postgres://wzasiord:5f1p0bwVl9EyrxqFpRFaeXSbwj8IbNUA@peanut.db.elephantsql.com/wzasiord",
  DATABASE_URL_PREVIEW = "ppostgres://apzuyoqk:Xxmn3Vb7arPImDcGGDRDxRL6dj1XKz1p@peanut.db.elephantsql.com/apzuyoqk",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
