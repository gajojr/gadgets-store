import React from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/charger-demo.webp',
        proizvodjac: "Fushara",
        model: "Njesra",
        snaga: 20,
        tip: "Zicni",
        cena: 25
    });

const Katalog = () => {
    document.title = 'Punjaci';

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{dummyData.map((chargers, idx) => {
                return <Article key={idx} details={chargers}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;