import React from 'react';

import { Link } from 'react-router-dom';

import * as StyledComponents from './MainSection.styles';

const MainSection = () => {
    return (
        <StyledComponents.Section>
            <Link to='/'>
                <StyledComponents.Article>
                    <StyledComponents.Image src={'/images/headphones-demo2.webp'}/>
                    <StyledComponents.SectionText>Slusalice</StyledComponents.SectionText>
                </StyledComponents.Article>
            </Link>
            <Link to='/'>
                <StyledComponents.Article>
                    <StyledComponents.Image src={'/images/smart-bracelet-demo.jpg'}/>
                    <StyledComponents.SectionText>Narukvice</StyledComponents.SectionText>
                </StyledComponents.Article>
            </Link>
            <Link to='/'>
                <StyledComponents.Article>
                    <StyledComponents.Image src={'/images/charger-demo.webp'}/>
                    <StyledComponents.SectionText>Punjaci</StyledComponents.SectionText>
                </StyledComponents.Article>
            </Link>
            <Link to='/'>
                <StyledComponents.Article>
                    <StyledComponents.Image src={'/images/joystick-demo.webp'}/>
                    <StyledComponents.SectionText>Dzojstici</StyledComponents.SectionText>
                </StyledComponents.Article>
            </Link>
        </StyledComponents.Section>
    );
}

export default MainSection;