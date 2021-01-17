import React, {useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const dummyData = new Array(12).fill({
        imgSrc: '/images/glavna_strana/maskice.webp',
        marka: 'Apple',
        model: "Iphone 13 pro max",
        tip: "Futrola",
        cena: 25
    });

async function fetchMaskica() {
    try {
        const response = await axios.get('http://localhost:3001/maskice');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

const Katalog = () => {
    document.title = 'Maskice';
    useEffect(() => {
        fetchMaskica();
    }, []);

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