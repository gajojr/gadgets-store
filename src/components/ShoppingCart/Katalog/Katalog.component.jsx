import React, { useState, useEffect } from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const Katalog = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        const maskice = JSON.parse(localStorage.getItem('maskice')) || [];
        const narukvice = JSON.parse(localStorage.getItem('narukvice')) || [];
        const slusalice = JSON.parse(localStorage.getItem('slusalice')) || [];
        const dzojstici = JSON.parse(localStorage.getItem('dzojstici')) || [];
        const punjaci = JSON.parse(localStorage.getItem('punjaci')) || [];
        setAllItems([...maskice, ...narukvice, ...slusalice, ...dzojstici, ...punjaci]);
    }, []);

    return (
        <Container style={{alignSelf: 'center'}}>
            <H1>Korpa:</H1>
            <Catalog>{allItems.map((items, idx) => {
                return <Article key={idx} details={items}/>
            })}</Catalog>
        </Container>
    );
}

export default Katalog;