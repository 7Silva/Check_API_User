'use strict';

import auth from './auth.js';
import express from 'express';
import chalk from 'chalk';
import routers from './src/routers.js';

const app = express(),  
    port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(routers);

app.listen(port, function() {
    console.clear();
    console.log(`[${chalk.green('-')}] Server running in port ${port}`);
});