const express = require('express');
const PetRouter = express.Router();
const {dogs, reloadDogs} = require('./pets');

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
        if(dogs.first === null){
            reloadDogs();
        }
        return res.status(204).json(dogs.first);
    })


module.exports = PetRouter;