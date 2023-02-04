const Card = require("../Models/card");

const cardController = {
  getAll: async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (error) {
      console.log(error);
    }
  },
  random: async (req, res) => {
    try {
      const cards = await Card.find();
      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      res.json(randomCard);
    } catch (error) {
      console.log(error);
    }
  },
  pagination: async (req, res) => {
    try {
      const cards = await Card.find();
      const page = req.query.page;
      const limit = req.query.limit;

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const resultCards = cards.slice(startIndex, endIndex);
      res.json(resultCards);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = cardController;
