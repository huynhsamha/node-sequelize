module.exports = {
  development: {
    dialect: 'postgres',
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || '5432',
    database: process.env.DEV_DB_NAME || 'node_sequelize',
    username: process.env.DEV_DB_USER || 'localuser',
    password: process.env.DEV_DB_PASSWD || '98054'
  },
  test: {
    dialect: 'postgres',
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    database: process.env.TEST_DB_NAME,
    username: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWD
  },
  production: {
    dialect: 'postgres',
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT,
    database: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWD
  }
};
