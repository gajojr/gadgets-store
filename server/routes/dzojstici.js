const express = require('express');
const router = express.Router();
const { Schema } = require('mongoose');

const dzojsticiSchema = new Schema({
    proizvodjac: String,
    model: String,
    tip: String,
    cena: Number
});

const Dzojstik = mongoose.model('Dzojstik', dzojsticiSchema);

router.get('/', function(req, res) {
    res.json('Welcome To Dzojstici');
});

module.exports = router;