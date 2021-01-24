import React, { useState, useEffect } from 'react';

import { Container, H1, Catalog } from '../../KatalogStyles/Katalog.styles';

import Article from './Article.component';

const Katalog = () => {
    const [maskice, setMaskice] = useState(JSON.parse(localStorage.getItem('maskice')) || []);
    const [narukvice, setNarukvice] = useState(JSON.parse(localStorage.getItem('narukvice')) || []);
    const [slusalice, setSlusalice] = useState(JSON.parse(localStorage.getItem('slusalice')) || []);
    const [dzojstici, setDzojstici] = useState(JSON.parse(localStorage.getItem('dzojstici')) || []);
    const [punjaci, setPunjaci] = useState(JSON.parse(localStorage.getItem('punjaci')) || []);

    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        setAllItems([...maskice, ...narukvice, ...slusalice, ...dzojstici, ...punjaci, ...allItems]);
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