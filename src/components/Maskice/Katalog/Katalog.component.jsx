import React, {useState, useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const Katalog = () => {
    document.title = 'Maskice';

    const [maskice, setMaskice] = useState([]);

    async function fetchMaskica() {
        try {
            const response = await axios.get('http://localhost:3001/maskice');
            setMaskice(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchMaskica();
    }, []);

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{maskice.map((masks, idx) => {
                return <Article key={idx} details={masks}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;