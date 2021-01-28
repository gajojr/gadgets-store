import React from 'react';

import { Proizvod, Image, H4, FaShoppingBasketStyled } from '../../KatalogStyles/Katalog.styles';

import storeInLocalStorage from '../../utils';

const Article = ({details}) => {
    return (
        <Proizvod>
            <Image src={details.imgSrc} alt={details.model}/>
            <H4>Proizvodjac: {details.proizvodjac}</H4>
            <H4>Model: {details.model}</H4>
            <H4>Trajanje baterije: {details.trajanjeBaterije}</H4>
            <H4>Cena: {details.cena}</H4>
            <FaShoppingBasketStyled 
                onClick={() => {
                    storeInLocalStorage('narukvice', details); 
                }}
                size={35} 
                title='Dodaj u korpu'
            />
        </Proizvod>
    );
};

export default Article;