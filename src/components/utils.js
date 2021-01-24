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
        console.log('usao sam');
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

export default storeInLocalStorage;