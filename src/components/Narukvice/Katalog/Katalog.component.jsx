import React, {useState, useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';
import { Alert, Message, CloseIcon } from '../../KatalogStyles/PushNotification.styles';

import Article from './Article.component';

const axios = require('axios');

const Katalog = () => {
    document.title = 'Narukvice';

    const [narukvice, setNarukvice] = useState([]);

    async function fetchNarukvica() {
        try {
            const response = await axios.get('/narukvice');
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
            <Alert id='alert' style={{display: 'none'}}>
                <Message>
                    Artikal dodat u korpu
                </Message>
                <CloseIcon onClick={() => {
                    document.getElementById('alert').style.display = 'none';
                }}/>
            </Alert>
        </Container>
    );
}

export default Katalog;