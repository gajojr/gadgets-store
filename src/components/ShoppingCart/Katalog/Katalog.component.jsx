import React, { useState, useEffect } from 'react';

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
    const [maskice, setMaskice] = useState(JSON.parse(localStorage.getItem('maskice')) || []);
    const [narukvice, setNarukvice] = useState(JSON.parse(localStorage.getItem('narukvice')) || []);
    const [slusalice, setSlusalice] = useState(JSON.parse(localStorage.getItem('slusalice')) || []);
    const [dzojstici, setDzojstici] = useState(JSON.parse(localStorage.getItem('dzojstici')) || []);
    const [punjaci, setPunjaci] = useState(JSON.parse(localStorage.getItem('punjaci')) || []);

    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        setAllItems([...maskice, ...narukvice, ...slusalice, ...dzojstici, ...punjaci, ...allItems]);
        console.log("All items", allItems);
    }, []);

    return (
        <Container style={{alignSelf: 'center'}}>
            <H1>Korpa:</H1>
            <Catalog>{allItems.map((items, idx) => {
                return <Article key={idx} details={items}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;