import React from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

// const dummyData2 = new Array(4).fill({
//         imgSrc: '/images/glavna_strana/charger-demo.webp',
//         imeProizvoda: 'Neki kao telefon',
//         cena: 25,
//         kolicina: 1
//     });

const dummyData = [
    {
        imgSrc: '/images/glavna_strana/charger-demo.webp',
        imeProizvoda: 'Neki kao telefon',
        cena: 25,
        kolicina: 1
    },
    {
        imgSrc: '/images/glavna_strana/joystick-demo.webp',
        imeProizvoda: 'Neki kao dzojstik',
        cena: 40,
        kolicina: 1
    },
    {
        imgSrc: '/images/glavna_strana/headphones-demo2.webp',
        imeProizvoda: 'Neke kao slusalice',
        cena: 220,
        kolicina: 1
    },
    {
        imgSrc: '/images/glavna_strana/maskice.webp',
        imeProizvoda: 'Neke kao maskice',
        cena: 15,
        kolicina: 1
    }
];

const Katalog = () => {
    document.title = 'Shoping korpa';

    return (
        <Container style={{alignSelf: 'center'}}>
            <H1>Korpa:</H1>
            <Catalog>{dummyData.map((items, idx) => {
                return <Article key={idx} details={items}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;