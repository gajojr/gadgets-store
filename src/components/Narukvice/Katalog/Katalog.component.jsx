import React, {useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/smart-bracelet-demo.jpg',
        proizvodjac: "Fushara",
        model: "Njesra",
        tip: "Bezicne",
        trajanjeBaterije: 5.4,
        cena: 25
    });

async function fetchNarukvica() {
    try {
        const response = await axios.get('http://localhost:3001/narukvice');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const Katalog = () => {
    document.title = 'Narukvice';
    useEffect(() => {
        fetchNarukvica();
    }, []);

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{dummyData.map((bracelets, idx) => {
                return <Article key={idx} details={bracelets}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;