const express = require('express');
const PetRouter = express.Router;
const {cats} = require('./pets');

PetRouter
    .route('/')
    .get((req, res) =>{
        if(_cat === null){
            res.status(404).send('error: no more cats');
        } else {
            res.json(cats.first);
        }
    })
    .delete((req, res) =>{
        cats.dequeue();
        return res.status(204);
    })


module.exports = PetRouter;