import React, { useEffect } from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/joystick-demo.webp',
        proizvodjac: "Fushara",
        model: "Njesra",
        tip: "Zicni",
        cena: 25
    });

async function fetchDzojstika() {
    try {
        const response = await axios.get('http://localhost:3001/dzojstici');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const Katalog = () => {
    document.title = 'Dzojstici';
    useEffect(() => {
        fetchDzojstika();
    }, []);

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