import React from 'react';

import { Proizvod, Image, H4 } from './Katalog.styles';

const Article = ({details}) => {
    return (
        <Proizvod>
            <Image src={details.imgSrc} alt={details.model}/>
            <H4>Proizvodjac: {details.proizvodjac}</H4>
            <H4>Model: {details.model}</H4>
            <H4>Tip: {details.tip}</H4>
            <H4>Trajanje baterije: {details.trajanjeBaterije}</H4>
            <H4>Cena: {details.cena}</H4>
        </Proizvod>
    );
};

export default Article;