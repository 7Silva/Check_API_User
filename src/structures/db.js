'use strict';

import { Sequelize } from 'sequelize';

const database = process.env.DATABASE,
    user = process.env.USER,
    password = process.env.PASSWORD,
    server = process.env.SERVER;

if (!database || !user || !password || !server) throw new TypeError('You must submit all information from your database!');

const db = new Sequelize(`${database}`, `${user}`, `${password}`, {
    host: `${server}`,
    dialect: 'mysql'
});

export { db };