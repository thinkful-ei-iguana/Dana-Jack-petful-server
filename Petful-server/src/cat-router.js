const express = require('express');
const PetRouter = express.Router();
const {cats} = require('./pets');

PetRouter
    .route('/')
    .get((req, res) =>{
        if(cats.first === null){
            return res.status(404).send('error: no more cats');
        } else {
            return res.json(cats.first.value);
        }
    })
    .delete((req, res) =>{
        cats.dequeue();
        return res.status(204);
    })


module.exports = PetRouter;