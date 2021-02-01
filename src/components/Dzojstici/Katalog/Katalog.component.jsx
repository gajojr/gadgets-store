import React, { useState, useEffect } from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';
import { Alert, Message, CloseIcon } from '../../KatalogStyles/PushNotification.styles';

import Article from './Article.component';

const axios = require('axios');

const Katalog = () => {
    document.title = 'Dzojstici';
    const [dzojstici, setDzojstici] = useState([]);

    async function fetchDzojstika() {
        try {
            const response = await axios.get('/dzojstici');
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