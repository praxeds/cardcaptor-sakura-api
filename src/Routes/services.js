const router = require('express').Router();

const cardController = require('../Controllers/cardController');

router
    .route('/cards/addcard')
    .post((req, res) => cardController.create(req, res));

router
    .route('/cards').get((req, res) => cardController.getAll(req, res));

module.exports = router;