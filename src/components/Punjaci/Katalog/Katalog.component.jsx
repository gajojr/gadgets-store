import React, {useState, useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const Katalog = () => {
    document.title = 'Punjaci';

    const [punjaci, setPunjaci] = useState([]);

    async function fetchPunjaca() {
        try {
            const response = await axios.get('http://localhost:3001/punjaci');
            setPunjaci(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPunjaca();
    }, []);

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{punjaci.map((chargers, idx) => {
                return <Article key={idx} details={chargers}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;