import React, { useEffect, useState } from 'react';
import * as StyledComponents from './Header.styles';
import './ActiveLink.css';

import { BiMenu } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
    const [activeBar, setActiveBar] = useState(false);
    const [title, setTitle] = useState(document.title);
    const [change, setChange] = useState(true);
    useEffect(() => {
        setTitle(document.title);
    }, [change]);

    return (
        <StyledComponents.Wrapper>
            <StyledComponents.Header>
                {activeBar || document.body.clientWidth > 1024 ? 
                    <StyledComponents.Navigation>
                        <StyledComponents.StyledLink to="/maskice" className={`${title === 'Maskice' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>MASKICE</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/narukvice" className={`${title === 'Narukvice' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>NARUKVICE</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to='/slusalice' className={`${title === 'Slusalice' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>SLUSALICE</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/dzojstici" className={`${title === 'Dzojstici' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>DZOJSTICI</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/punjaci" className={`${title === 'Punjaci' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>PUNJACI</StyledComponents.StyledLink>
                        <StyledComponents.StyledLink to="/korpa" className={`${title === 'Shoping korpa' ? 'active-link' : ''}`} onClick={() => setChange(!change)}>
                            <FaShoppingBasket size={25}/>
                        </StyledComponents.StyledLink>
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