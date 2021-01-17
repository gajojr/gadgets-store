import React, {useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/headphones-demo.webp',
        proizvodjac: "Samsung",
        model: "Galaxy Buds",
        tip: "Bezicne",
        trajanjeBaterije: 5.4,
        cena: 114
    });

async function fetchSlusalica() {
    try {
        const response = await axios.get('http://localhost:3001/slusalice');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const Katalog = () => {
    document.title = 'Slusalice';
    useEffect(() => {
        fetchSlusalica();
    }, []);

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