import React, { useState } from 'react';
import * as StyledComponents from './Header.styles';

import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const Header = () => {
    const [activeBar, setActiveBar] = useState(false);

    return (
        <StyledComponents.Wrapper>
            <StyledComponents.Header>
                {activeBar || document.body.clientWidth > 1024 ? 
                    <StyledComponents.Navigation>
                        <StyledComponents.StyledLink to="#">MASKICE</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="#">NARUKVICE</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to='/slusalice'>SLUSALICE</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="#">DZOJSTICI</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="#">PUNJACI</StyledComponents.StyledLink>
                        {document.body.clientWidth < 1025 ? 
                            <StyledComponents.Icon onClick={() => setActiveBar(!activeBar)} style={{alignSelf: 'flex-end', color: 'white'}}><AiFillCloseCircle size={30}/></StyledComponents.Icon> : null}
                    </StyledComponents.Navigation> :
                    <StyledComponents.Navigation>
                        {document.body.clientWidth < 1025 ? 
                            <StyledComponents.Icon onClick={() => setActiveBar(!activeBar)} style={{alignSelf: 'flex-end', color: 'white'}}><BiMenu size={30}/></StyledComponents.Icon> : null}
                    </StyledComponents.Navigation>
                }
            </StyledComponents.Header>
        </StyledComponents.Wrapper>
    );
}

export default Header;