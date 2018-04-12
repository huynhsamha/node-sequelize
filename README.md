# node-sequelize

RESTful API with NodeJS and Sequelize (PostgreSQL, MySQL)


## Tutorial Quickstart
[Getting Started with Node, Express and Postgres Using Sequelize](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)


## Document Sequelize
[Document Sequelize](http://docs.sequelizejs.com/manual/installation/getting-started.html)


## Environment Variables - Using with `dotenv`
```
yarn add dotenv
```

File `.env` in root of project, such as:

```
DEV_DB_HOST=localhost
DEV_DB_PORT=5432
DEV_DB_NAME=node_sequelize
DEV_DB_USERNAME=[your username]
DEV_DB_PASSWORD=[your password]

TEST_DB_HOST=localhost
TEST_DB_PORT=[port]
TEST_DB_NAME=[db name test]
TEST_DB_USERNAME=[your username]
TEST_DB_PASSWORD=[your password]

PROD_DB_HOST=localhost
PROD_DB_PORT=[port]
PROD_DB_NAME=[db name]
PROD_DB_USERNAME=[your username]
PROD_DB_PASSWORD=[your password]
```

File `.env` is ignored in `.gitignore`


## Instruction
In this project, I don't use `sequelize-cli`.

### Using with ES7 syntax
Using package `babel` (`babel-*` in dependencies) to compile ES7 syntax

### Before start Express
`node index.js`

File `index.js`: config `babel` and `dotenv`

### Structure project

In `server`:

+ `config/db.js`: to export database connect string

```js
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
```


+ `config/sequelize.js`: export `sequelize` instance of `Sequelize` after connected to database

```js
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('./db')[env];

const { database, username, password } = config;

const sequelize = new Sequelize(
  database, username, password,
  config,
  {
    timezone: '+07:00'
  }
);

export default sequelize;
```


+ `models/*`
+ `controllers/*`
+ `routes/*`
