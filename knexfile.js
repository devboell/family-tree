const development = {
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite3',
  },
  seeds: {
    directory: './src/data/database/seeds',
  },
  migrations: {
    directory: './src/data/database/migrations',
  },
  useNullAsDefault: true,
}

const production = {
  client: 'sqlite3',
  connection: {
    filename: './dist/db.sqlite3',
  },
  seeds: {
    directory: './src/data/database/seeds',
  },
  migrations: {
    directory: './src/data/database/migrations',
  },
  useNullAsDefault: true,
}

const test = {
  client: 'sqlite3',
  connection: {
    filename: ':memory:',
  },
  seeds: {
    directory: './src/data/database/seeds',
  },
  migrations: {
    directory: './src/data/database/migrations',
  },
  useNullAsDefault: true,
}

module.exports = { development, production, test }
