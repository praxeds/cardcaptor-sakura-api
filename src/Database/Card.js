const mongoose = require("mongoose");

const Card = new mongoose.Schema({
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
    Temperament: {
        type: String,
        required: true,
    },
    appearance: {
        type: String,
        required: true,
    },
    personality: {
        type: String,
        required: true,
    },
    abilities: {
        type: String,
        required: true,
    },
    trivia: {
        type: Array,
        required: true,
    }
}
);

module.exports = mongoose.model("Card", Card);