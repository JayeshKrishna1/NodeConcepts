const express = require('express');
const router = express.Router();


const {people} = require('../data.js');

const {getController,
    putController,
    deleteController} = require('../controllers/people');


router.get('/',getController);

router.put('/:id',putController);

router.delete('/:id',deleteController);


module.exports = router;