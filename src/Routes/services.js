const router = require('express').Router();

const cardController = require('../Controllers/cardController');

// no need for this route, since all canon cards have been added
// router
//     .route('/cards/addcard')
//     .post((req, res) => cardController.create(req, res));

router.route('/cards').get((req, res) => cardController.getAll(req, res));
router.route('/cards/random').get((req, res) => cardController.random(req, res));

module.exports = router;