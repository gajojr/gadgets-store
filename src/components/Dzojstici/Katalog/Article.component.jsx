import React, { useEffect } from 'react';

import { Proizvod, Image, H4, FaShoppingBasketStyled } from '../../KatalogStyles/Katalog.styles';

const Article = ({details}) => {
    useEffect(() => {
        if(!localStorage.getItem('dzojstici')) {
            localStorage.setItem('dzojstici', []);
        }
    }, []);

    return (
        <Proizvod>
            <Image src={details.imgSrc} alt={details.model}/>
            <H4>Proizvodjac: {details.proizvodjac}</H4>
            <H4>Model: {details.model}</H4>
            <H4>Snaga: {details.snaga}</H4>
            <H4>Tip: {details.tip}</H4>
            <H4>Cena: {details.cena}</H4>
            <FaShoppingBasketStyled 
                onClick={() => {
                    const niz = localStorage.getItem('dzojstici') || [];
                    console.log("Niz je ", niz);
                    let vecUbacen = false;
                    niz.map(dzojstik => {
                        if(JSON.stringify(details) === JSON.stringify(dzojstik)) {
                            alert('Ovaj artikal je vec dodat u korpu, ako zelite da kupite vise od 1 mozete podesiti kolicinu pri narucivanju.');
                            vecUbacen = true;
                        }
                    });
                    if(!vecUbacen) {
                        localStorage.setItem('dzojstici', [localStorage.getItem('dzojstici'), details]);
                    }
                }}
                size={35} 
                title='Dodaj u korpu'
            />
        </Proizvod>
    );
};

export default Article;