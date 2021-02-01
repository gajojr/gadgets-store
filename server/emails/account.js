require('dotenv').config()
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'andreccccc12@gmail.com',
        subject: 'Gadgets store dobrodoslica',
        text: `Zdravo ${name}, dobrodosli u gadgets store`
    }

    sgMail
        .send(msg)
        .then(() => {}, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
}

module.exports = {
    sendWelcomeEmail
}