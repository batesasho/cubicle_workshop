const cubeService = require('../services/cubeService.js')
const router = require('express').Router();
const cubes = require('../db.json')

router.get('/', (req, res) => {
    const {search, from, to} = req.query;
    const cubes = cubeService.getAll(search, from, to);

    res.render('index', {cubes,search, from, to});
});

router.get('/about', (req, res) => {

    res.render('about');
});


module.exports = router;