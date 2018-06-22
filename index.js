const toDo = require('./db');

const express = require('express');
const app = express();



app.get('/', (req, res) => {
    toDo.getAll()
        .then((data) => {
            res.send(data)})
        .catch((error) => {
            console.log(error)
        })            
});

app.get('/:id', (req, res) => {
    toDo.getOne(req.params.id)
        .then ((data) => {
            res.send(data)})
        .catch((error) => {
            console.log(error)
        })
});


app.listen(5000, () => {
    console.log('Someones here');
});