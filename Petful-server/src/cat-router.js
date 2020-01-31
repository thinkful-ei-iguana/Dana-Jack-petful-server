const express = require('express');
const PetRouter = express.Router;
const {cats} = require('./pets');
let _cat = cats.dequeue();

PetRouter
    .route('/')
    .get((req, res) =>{
        if(_cat === null){
            res.status(404).send('error: no more cats');
        } else {
            res.json(_cat);
        }
    })
    .delete((req, res) =>{
        _cat = cats.dequeue();
        return res.status(204).json(_cat);
    })


module.exports = PetRouter;