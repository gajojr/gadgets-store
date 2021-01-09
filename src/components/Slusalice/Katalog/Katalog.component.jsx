import React from 'react';

import * as StyledComponents from './Katalog.styles';

const dummyData = new Array(10).fill({
        imgSrc: '/images/glavna_strana/headphones-demo.webp',
        proizvodjac: "Samsung",
        model: "Galaxy Buds",
        tip: "Bezicne",
        trajanjeBaterije: 5.4,
        cena: 114
    });

const Katalog = () => {
    document.title = 'Slusalice';

    return (
        <StyledComponents.Container>
            <StyledComponents.H1>Katalog</StyledComponents.H1>
            <StyledComponents.Katalog>{dummyData.map((earphones, idx) => {
                return (
                    <StyledComponents.Proizvod key={idx}>
                        <StyledComponents.Image src={earphones.imgSrc} alt={earphones.model}/>
                        <StyledComponents.H4>Proizvodjac: {earphones.proizvodjac}</StyledComponents.H4>
                        <StyledComponents.H4>Model: {earphones.model}</StyledComponents.H4>
                        <StyledComponents.H4>Tip: {earphones.tip}</StyledComponents.H4>
                        <StyledComponents.H4>Trajanje baterije: {earphones.trajanjeBaterije}</StyledComponents.H4>
                        <StyledComponents.H4>Cena: {earphones.cena}</StyledComponents.H4>
                    </StyledComponents.Proizvod>
                );
            })}</StyledComponents.Katalog>
        </StyledComponents.Container>
    );
}

export default Katalog;