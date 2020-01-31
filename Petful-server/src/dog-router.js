const express = require('express');
const PetRouter = express.Router();
const {dogs} = require('./pets');

PetRouter
    .route('/')
    .get((req, res) =>{
        if(dogs.first === null){
            return res.status(404).send('error: no more dogs');
        } else {
            return res.json(dogs.first.value);
        }
    })
    .delete((req, res) =>{
        dogs.dequeue();
        return res.status(204);
    })


module.exports = PetRouter;