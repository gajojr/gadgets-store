import React, {useState, useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const axios = require('axios');

const Katalog = () => {
    document.title = 'Slusalice';

    const [slusalice, setSlusalice] = useState([]);

    async function fetchSlusalica() {
        try {
            const response = await axios.get('http://localhost:3001/slusalice');
            setSlusalice(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchSlusalica();
    }, []);

    return (
        <Container>
            <H1>Katalog</H1>
            <Catalog>{slusalice.map((earphones, idx) => {
                return <Article key={idx} details={earphones}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;