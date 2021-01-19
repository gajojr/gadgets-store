const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gadgets_store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const slusaliceSchema = new mongoose.Schema({
    imgSrc: String,
    proizvodjac: String,
    model: Number,
    tip: String,
    trajanjeBaterije: Number,
    cena: Number
});

const Slusalice = mongoose.model('Slusalice', slusaliceSchema, 'slusalice');

router.get('/', async function(req, res) {
    try {
        const result = await Slusalice.find();
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