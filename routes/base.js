const express = require('express');
const router = express.Router();


const {people} = require('../data.js');

const postController = require('../controllers/base.js');

router.post('/',postController);

module.exports = router;