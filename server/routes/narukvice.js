require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_PRODUCTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const narukviceSchema = new mongoose.Schema({
    imgSrc: String,
    proizvodjac: String,
    model: String,
    trajanjeBaterije: Number,
    cena: String
});

const Narukvica = mongoose.model('Narukvica', narukviceSchema, 'narukvice');

router.get('/', async function(req, res) {
    try {
        const result = await Narukvica.find();
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