import React from 'react';

import { Proizvod, Image, H4, FaShoppingBasketStyled } from '../../KatalogStyles/Katalog.styles';

const Article = ({details}) => {
    return (
        <Proizvod>
            <Image src={details.imgSrc} alt={details.model}/>
            <H4>Proizvodjac: {details.proizvodjac}</H4>
            <H4>Model: {details.model}</H4>
            <H4>Snaga: {details.snaga}</H4>
            <H4>Tip: {details.tip}</H4>
            <H4>Cena: {details.cena}</H4>
            <FaShoppingBasketStyled size={35} title='Dodaj u korpu'/>
        </Proizvod>
    );
};

export default Article;