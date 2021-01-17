const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gadgets_store', {
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

const Maskica = mongoose.model('maskice', maskiceSchema);

router.get('/', async function(req, res) {
    try {
        const result = await Maskica.find();
        if (result) {
            console.log("Articles:", result);
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