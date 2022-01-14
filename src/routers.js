'use strict';

import express from 'express';
import { db } from './structures/db.js';
import encrypt from './structures/encrypt.js';

const router = express.Router(),
    dirname = import.meta.url.slice(8, import.meta.url.lastIndexOf('/'));

// 404 Error
router.get('/', (req, res) => {
    res.sendFile('html/404.html', { root: dirname });
});
router.get('/img/404.png', (req, res) => {
    res.sendFile('html/img/404.png', { root: dirname });
});
router.get('/css/style.css', (req, res) => {
    res.sendFile('html/css/style.css', { root: dirname});
});

// Api Check
router.post('/', async function(req, res) {
    const user = req.body.user,
        email = req.body.email, 
        password = encrypt(req.body.password);

    if (req.body.token == process.env.TOKEN) {
        const select = await db.query(`SELECT * FROM users WHERE user = "${user}" AND email = "${email}"`),
            selecJson = select[0][0];

        if (!selecJson) {
            res.status(406).json({ status: 'Incorrect Information' });
        } else {
            if (selecJson.user == user && selecJson.email == email && selecJson.password == password) {
                res.status(200).json({ status: 'Correct Username and Password' });
            } else {
                res.status(406).json({ status: 'Incorrect Information' });
            }
        }
    } else {
        res.sendStatus(401);
    }
})

export default router;