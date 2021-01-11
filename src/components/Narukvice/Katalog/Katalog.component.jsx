import React from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/smart-bracelet-demo.jpg',
        proizvodjac: "Fushara",
        model: "Njesra",
        tip: "Bezicne",
        trajanjeBaterije: 5.4,
        cena: 25
    });

const Katalog = () => {
    document.title = 'Narukvice';

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{dummyData.map((earphones, idx) => {
                return <Article key={idx} details={earphones}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;