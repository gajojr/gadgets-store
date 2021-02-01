import React, {useState, useEffect} from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';
import { Alert, Message, CloseIcon } from '../../KatalogStyles/PushNotification.styles';

import Article from './Article.component';

const axios = require('axios');

const Katalog = () => {
    document.title = 'Punjaci';

    const [punjaci, setPunjaci] = useState([]);

    async function fetchPunjaca() {
        try {
            const response = await axios.get('/punjaci');
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