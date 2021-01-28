function storeInLocalStorage(vrsta, details) {
    /*
        -- Struktura --
        localStorage
            --> dzojstici (niz)
                --> dzojstik (objekat)
    */

    // proverava da li su vec skladisteni u localStorage
    const artikli = JSON.parse(localStorage.getItem(vrsta)) || [];
    let vecUbacen = false;

    // prolazi kroz niz artikala da bi uporedio da li je zeljeni artikal(objekat) vec ubacen u niz
    for (const artikal of artikli) {
        if (JSON.stringify({...details, kolicina: 1 }) === JSON.stringify(artikal)) {
            alert('Ovaj artikal je vec dodat u korpu, ako zelite da kupite vise od 1 mozete podesiti kolicinu pri narucivanju.');
            vecUbacen = true;
        }
    }

    // ako artikal nije u nizu ubacujemo ga u niz zeljenih artikala te vrste
    if (!vecUbacen) {
        let arr = [{...details, kolicina: 1 }];
        if (localStorage.getItem(vrsta)) {
            arr = [...JSON.parse(localStorage.getItem(vrsta)), details];
            localStorage.setItem(vrsta, JSON.stringify(arr));
        } else {
            localStorage.setItem(vrsta, JSON.stringify(arr));
        }

        // pokazi notifikaciju korisniku kad kupi artikal
        document.getElementById('alert').style.display = 'flex';
        setTimeout(notificationMove, 2000);
    }
}

export function modifyLocalStorage(details, vrsta, znakOperacije) {
    // niz koji sadrzi sve artikle osim onog koji sadrzi trazeni model
    const notForChange = JSON.parse(localStorage.getItem(vrsta)).filter(article => article.model !== details.model);
    // niz koji sadrze sve artikle ove vrste
    const articles = JSON.parse(localStorage.getItem(vrsta));
    console.log("OVo sto sam sad napravio", articles);
    for (const article of articles) {
        if (article.model === details.model) {
            // sklonimo ga iz localStorage
            localStorage.removeItem(vrsta);
            // za ovu vrstu postavimo ceo prethodni niz bez trazenog artikla i na
            // kraju ubacimo trazeni artikal sa kolicinom povecanom ili smanjenom za 1
            // u zavisnosnti od znakaOperacije
            localStorage.setItem(vrsta, JSON.stringify([...notForChange, {...article, kolicina: znakOperacije === '+' ? article.kolicina + 1 : article.kolicina - 1 }]));
        }
    }
}

function notificationMove() {
    const elem = document.getElementById('alert');
    const currentPos = elem.getBoundingClientRect().left;
    const elemWidth = elem.offsetWidth;
    const id = setInterval(frame, 10);
    let pos = currentPos;

    function frame() {
        if (pos > currentPos + elemWidth) {
            clearInterval(id);
            // potrebno da notification div ne bi ostao na kraju stranice, tj. prosirio stranicu
            document.getElementById('alert').style.display = 'none';
        } else {
            pos += 5;
            elem.style.left = pos + 'px';
        }
    }
}

export default storeInLocalStorage;