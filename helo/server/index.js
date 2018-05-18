const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
require('dotenv').config()

const app = express();
const port = 3451;

const {
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then((db)=>{
    console.log('DataBase Connected!');
    app.set('db', db)
})

app.get('/auth/users', (req, res)=>{
    const dbInstance = req.app.get('db');
    dbInstance.getUser().then(
        users => {
            res.status(200).send(users)
        }
    )
})

app.get('/auth/posts', (req, res)=>{
    const dbInstance = req.app.get('db');
    dbInstance.post_user_join().then(
        posts => {
            res.status(200).send(posts)
        }
    )
})

app.post('/auth/users', (req, res)=>{
    req.app.get('db').insertUser([req.body, req.body]).then(users => res.status(200).send(users)).catch(err => console.log(err))
})

app.get('/auth/users', (req, res)=>{
    let {username, password} = req.body;

    req.app.get('db').insertUser([username, password])
    .then(users => res.status(200).send(users)
    ).catch(err => console.log(err))
})

app.listen(port, ()=>{
    console.log(`Party on port: ${port}!`)
})