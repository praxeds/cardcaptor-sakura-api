const router = require('express').Router();

const cardController = require('../Controllers/cardController');

router.route('/cards/all').get((req, res) => cardController.getAll(req, res));
router.route('/cards/random').get((req, res) => cardController.random(req, res));
router.route('/cards').get((req, res) => cardController.pagination(req, res));


module.exports = router;