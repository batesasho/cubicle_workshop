const router = require('express').Router();
const cubeService = require('../services/cubeService.js')


router.get('/create', (req, res) => {
    res.render('create')
});


router.post('/create', (req, res) => {
    const cubeData = req.body;
    //some validation...
    if (cubeData.name.length < 1) {
        return res.status(400).send("Invalid data");
    }
    //save data
    cubeService.save(cubeData)
        .then(() => res.redirect('/'))
        .catch(err => res.status(400).send(err));

})

router.get('/details/:id', (req, res) => {
    const cube = cubeService.cubeById(req.params.id)
    res.render('details', {cube})
})

module.exports = router;