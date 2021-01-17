import React, { useState, useEffect } from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const Katalog = () => {
    document.title = 'Dzojstici';
    const [dzojstici, setDzojstici] = useState([]);

    async function fetchDzojstika() {
        try {
            const response = await axios.get('http://localhost:3001/dzojstici');
            setDzojstici(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDzojstika();
    }, []);

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{dzojstici.map((joysticks, idx) => {
                return <Article key={idx} details={joysticks}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;