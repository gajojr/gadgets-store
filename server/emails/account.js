const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: 'andrijagajicbusiness@gmail.com',
    from: 'andreccccc12@gmail.com',
    subject: 'Gadgets store porudzbina',
    text: 'Porudzbina uspesna'
});