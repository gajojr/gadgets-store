import React, {useState, useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const Katalog = () => {
    document.title = 'Narukvice';

    const [narukvice, setNarukvice] = useState([]);

    async function fetchNarukvica() {
        try {
            const response = await axios.get('http://localhost:3001/narukvice');
            setNarukvice(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchNarukvica();
    }, []);

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{narukvice.map((bracelets, idx) => {
                return <Article key={idx} details={bracelets}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;