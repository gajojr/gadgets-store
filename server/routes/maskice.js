require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_PRODUCTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const maskiceSchema = new mongoose.Schema({
    imgSrc: String,
    proizvodjac: String,
    model: String,
    tip: String,
    cena: String
});

const Maskica = mongoose.model('Maskica', maskiceSchema, 'maskice');

router.get('/', async function(req, res) {
    try {
        const result = await Maskica.find();
        if (result) {
            res.json(result);
        } else {
            console.log("no database result found");
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;