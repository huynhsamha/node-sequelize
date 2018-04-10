# node-sequelize

RESTful API with NodeJS and Sequelize (PostgreSQL, MySQL)

## Tutorial

+ [Sequelize](http://docs.sequelizejs.com/manual/installation/getting-started.html)

+ [Getting Started with Node, Express and Postgres Using Sequelize](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)


## `dotenv` - config environment variables

```
yarn add dotenv
```

### Config file `.env`
File `.env` in root of project, standing along with package.json
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


## sequelize-cli
```
yarn add sequelize-cli
```

In file `package.json`
```json
{
	"scripts": {
    "sequelize init": "node_modules/.bin/sequelize init",
    "sequelize db:migrate": "node_modules/.bin/sequelize db:migrate",
    "sequelize db:migrate:undo": "node_modules/.bin/sequelize db:migrate:undo"
  },
}
```
