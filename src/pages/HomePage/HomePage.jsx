import React from 'react';
import * as StyledComponents from './HomePage.styles';

import MainSection from '../../components/HomePage/MainSection/MainSection';
import FooterSection from '../../components/HomePage/Footer/FooterSection';

const HomePage = () => {
    return (
        <React.Fragment>
            <StyledComponents.Main>
                <MainSection/>
            </StyledComponents.Main>
            <FooterSection/>
        </React.Fragment>
    );
}

export default HomePage;