import React from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/joystick-demo.webp',
        proizvodjac: "Fushara",
        model: "Njesra",
        tip: "Zicni",
        cena: 25
    });

const Katalog = () => {
    document.title = 'Dzojstici';

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{dummyData.map((joysticks, idx) => {
                return <Article key={idx} details={joysticks}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;