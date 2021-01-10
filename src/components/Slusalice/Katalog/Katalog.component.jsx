import React from 'react';

import { Container, H1, Catalog } from './Katalog.styles';

import Article from './Article.component';

const dummyData = new Array(10).fill({
        imgSrc: '/images/glavna_strana/headphones-demo.webp',
        proizvodjac: "Samsung",
        model: "Galaxy Buds",
        tip: "Bezicne",
        trajanjeBaterije: 5.4,
        cena: 114
    });

const Katalog = () => {
    document.title = 'Slusalice';

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