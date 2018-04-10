# node-sequelize

RESTful API with NodeJS and Sequelize (PostgreSQL, MySQL)

## `sequelize` - connect to PostgreSQL or MySQL

```
yarn add sequelize
```

## `dotenv` - config environment variables

```
yarn add dotenv
```

### Config file `.env`
File `.env` in root of project, standing along with package.json
```
DB_USER=[username of your database (PostgreSQL or MySQL)]
DB_PASSWD=[password for the above user]
```

File `.env` is ignored in `.gitignore`

### Config file `config/db.js`
This file to export the username and password of your database oracle
```js
module.exports = {
  user: process.env.DB_USER || 'YOUR DATABASE USER',
  password: process.env.DB_PASSWD || 'YOUR DATABASE PASSWORD',
  connectString: process.env.DB_HOST || 'YOUR DATABASE HOST'
};
```


## Config connect to database
In file `server/config/db.js`:
```js
```
