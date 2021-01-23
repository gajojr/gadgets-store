const FormHandle = () => {
    const ime = document.getElementById('ime');
    const prezime = document.getElementById('prezime');
    const email = document.getElementById('email');
    const telefon = document.getElementById('telefon');
    const grad = document.getElementById('grad');
    const postanskiBroj = document.getElementById('postanskiBroj');
    const ulica = document.getElementById('ulica');
    const brojUlice = document.getElementById('brojUlice');

    const humanVerificationSelect = document.getElementById('humanVerification');
    const humanVerificationAnswer = humanVerificationSelect.options[humanVerificationSelect.selectedIndex].text;

    if (!ime.value || !prezime.value || !email.value || !telefon.value || !grad.value || !postanskiBroj.value ||
        !ulica.value || !brojUlice.value) {
        return alert('Sva polja moraju biti popunjena');
    }

    console.log(humanVerification(humanVerificationAnswer));
    if (!humanVerification(humanVerificationAnswer)) {
        return alert('Potvrda neuspesna');
    }

    fetch('http://localhost:3001/porudzbine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ime: ime.value,
            prezime: prezime.value,
            email: email.value,
            telefon: telefon.value,
            grad: grad.value,
            postanskiBroj: postanskiBroj.value,
            ulica: ulica.value,
            brojUlice: brojUlice.value
        }),
    });

    window.location.reload();
}

const humanVerification = humanVerificationAnswer => {
    const verificationPicture = document.getElementById('verification-picture');
    const src = verificationPicture.getAttribute('src');

    let tipSlike;

    if (src.includes('ball')) {
        tipSlike = 'lopta';
    } else if (src.includes('car')) {
        tipSlike = 'automobil';
    } else if (src.includes('cat')) {
        tipSlike = 'macka';
    } else {
        tipSlike = 'pas';
    }

    return humanVerificationAnswer === tipSlike;
}

export default FormHandle;