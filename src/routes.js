const homeController = require("./controllers/homeControllers");
const express = require('express');
const router = express.Router();
const cubeController = require('./controllers/cubeController')

router.use('/', homeController);
router.use('/cube', cubeController);


module.exports = router;