if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_PRODUCTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dzojsticiSchema = new mongoose.Schema({
    imgSrc: String,
    proizvodjac: String,
    model: String,
    tip: String,
    cena: Number
});

const Dzojstik = mongoose.model('Dzojstik', dzojsticiSchema, 'dzojstici');

router.get('/', async function(req, res) {
    try {
        const result = await Dzojstik.find();
        if (result) {
            res.json(result);
        } else {
            console.log("no database result found");
            res.sendStatus(404);
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;