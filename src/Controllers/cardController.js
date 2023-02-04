const Card = require("../Models/card");

const cardController = {
  create: async (req, res) => {
    try {
      const card = {
        name: req.body.name,
        kanji: req.body.kanji,
        katakana: req.body.katakana,
        clowCardUrl: req.body.clowCardUrl,
        sakuraCardUrl: req.body.sakuraCardUrl,
        sign: req.body.sign,
        hierarchy: req.body.hierarchy,
        magicType: req.body.magicType,
        temperament: req.body.temperament,
        appearance: req.body.appearance,
        personality: req.body.personality,
        abilities: req.body.abilities,
        trivia: req.body.trivia,
      };
      const response = await Card.create(card);
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = cardController;
