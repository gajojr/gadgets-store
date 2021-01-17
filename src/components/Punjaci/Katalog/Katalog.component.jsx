import React, {useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/charger-demo.webp',
        proizvodjac: "Fushara",
        snaga: 20,
        tip: "Zicni",
        cena: 25
    });

async function fetchPunjaca() {
    try {
        const response = await axios.get('http://localhost:3001/punjaci');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const Katalog = () => {
    document.title = 'Punjaci';
    useEffect(() => {
        fetchPunjaca();
    }, []);

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