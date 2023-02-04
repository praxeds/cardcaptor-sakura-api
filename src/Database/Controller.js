const Card = require("./Card");

class CardController {
  async create(req, res) {
    const {
      name,
      kanji,
      katakana,
      clowCardUrl,
      sakuraCardUrl,
      sign,
      hierarchy,
      magicType,
      temperament,
      appearance,
      personality,
      abilities,
      trivia,
    } = req.body;

    try {
      const card = await Card.create({
        name,
        kanji,
        katakana,
        clowCardUrl,
        sakuraCardUrl,
        sign,
        hierarchy,
        magicType,
        temperament,
        appearance,
        personality,
        abilities,
        trivia,
      });
      return res.json(card);
    } catch (error) {
      return res.status(500).send({
        error: "Something went wrong while creating a new card.",
        message: error.message,
      });
    }
  }
}

export default new CardController();