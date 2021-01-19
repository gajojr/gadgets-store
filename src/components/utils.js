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
        if (JSON.stringify(details) === JSON.stringify(artikal)) {
            alert('Ovaj artikal je vec dodat u korpu, ako zelite da kupite vise od 1 mozete podesiti kolicinu pri narucivanju.');
            vecUbacen = true;
        }
    }

    // ako artikal nije u nizu ubacujemo ga u niz zeljenih artikala te vrste
    if (!vecUbacen) {
        let arr = [details];
        if (localStorage.getItem(vrsta)) {
            arr = [...JSON.parse(localStorage.getItem(vrsta)), details];
            localStorage.setItem(vrsta, JSON.stringify(arr));
        } else {
            localStorage.setItem(vrsta, JSON.stringify(arr));
        }
    }
}

export default storeInLocalStorage;