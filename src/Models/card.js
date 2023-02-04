const mongoose = require("mongoose");

const { Schema } = mongoose;

const cardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    kanji: {
      type: String,
      required: true,
    },
    katakana: {
      type: String,
      required: true,
    },
    clowCardUrl: {
      type: String,
      required: true,
    },
    sakuraCardUrl: {
      type: String,
      required: true,
    },
    sign: {
      type: String,
      required: true,
    },
    hierarchy: {
      type: String,
      required: true,
    },
    magicType: {
      type: String,
      required: true,
    },
    temperament: {
      type: String,
      required: false,
    },
    appearance: {
      type: String,
      required: false,
    },
    personality: {
      type: String,
      required: false,
    },
    abilities: {
      type: Object,
      required: true,
    },
    trivia: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
