import React from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/maskice.webp',
        marka: 'Apple',
        model: "Iphone 13 pro max",
        tip: "Futrola",
        cena: 25
    });

const Katalog = () => {
    document.title = 'Maskice';

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{dummyData.map((masks, idx) => {
                return <Article key={idx} details={masks}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;