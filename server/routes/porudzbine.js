require('dotenv').config();
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const { sendWelcomeEmail } = require('../emails/account');

mongoose.connect(process.env.MONGODB_PRODUCTION_URL, {
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
        sendWelcomeEmail(informacijeOPorudzbini.email, informacijeOPorudzbini.ime);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports = router;