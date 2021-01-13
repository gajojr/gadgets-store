import React from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const dummyData = new Array(4).fill({
        imgSrc: '/images/glavna_strana/charger-demo.webp',
        imeProizvoda: 'Neki kao telefon',
        cena: 25,
        kolicina: 1
    });

const Katalog = () => {
    document.title = 'Shoping korpa';

    return (
        <Container style={{alignSelf: 'center'}}>
            <H1>Katalog</H1>
            <Catalog>{dummyData.map((items, idx) => {
                return <Article key={idx} details={items}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;