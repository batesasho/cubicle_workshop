const homeController = require("./controllers/homeControllers.js");
const express = require('express');
const router = express.Router();
const cubeController = require('./controllers/cubeController.js')

router.get('/', homeController.index)
router.get('/about', homeController.about)
router.use('/cube', cubeController)


module.exports = router;