import React from 'react';

import { Link } from 'react-router-dom';

import * as StyledComponents from './MainSection.styles';

const MainSection = () => {
    return (
        <StyledComponents.Section>
            <Link to='/slusalice'>
                <StyledComponents.Article>
                    <StyledComponents.Image src={'/images/glavna_strana/headphones-demo2.webp'}/>
                    <StyledComponents.SectionText>Slusalice</StyledComponents.SectionText>
                </StyledComponents.Article>
            </Link>
            <Link to='/'>
                <StyledComponents.Article>
                    <StyledComponents.Image src={'/images/glavna_strana/smart-bracelet-demo.jpg'}/>
                    <StyledComponents.SectionText>Narukvice</StyledComponents.SectionText>
                </StyledComponents.Article>
            </Link>
            <Link to='/'>
                <StyledComponents.Article>
                    <StyledComponents.Image src={'/images/glavna_strana/charger-demo.webp'}/>
                    <StyledComponents.SectionText>Punjaci</StyledComponents.SectionText>
                </StyledComponents.Article>
            </Link>
            <Link to='/'>
                <StyledComponents.Article>
                    <StyledComponents.Image src={'/images/glavna_strana/joystick-demo.webp'}/>
                    <StyledComponents.SectionText>Dzojstici</StyledComponents.SectionText>
                </StyledComponents.Article>
            </Link>
        </StyledComponents.Section>
    );
}

export default MainSection;