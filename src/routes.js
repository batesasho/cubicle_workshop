const homeController = require("./controllers/homeControllers.js");
const express = require('express');
const router = express.Router();

router.get('/', homeController.index)


module.exports = router;