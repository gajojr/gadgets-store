const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gadgets_store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const porudzbineSchema = new mongoose.Schema({
    ime: String,
    prezime: String,
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    telefon: String,
    grad: String,
    postanskiBroj: String,
    ulica: String,
    brojUlice: Number,
    porudzbina: {
        maskice: Array,
        narukice: Array,
        slusalice: Array,
        dzojstici: Array,
        punjaci: Array
    }
});

const Porudzbine = mongoose.model('Porudzbine', porudzbineSchema, 'porudzbine');

router.post('/', async function(req, res) {
    try {
        const informacijeOPorudzbini = req.body;

        await Porudzbine.create({...informacijeOPorudzbini });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;