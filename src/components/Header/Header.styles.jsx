import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div `
    display: flex;
`;

export const Header = styled.header `
    flex: 1;
    align-self: center;
`;

export const Navigation = styled.nav `
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        align-items: flex-start;
        flex-direction: column;
    }
`;

export const StyledLink = styled(Link)
`
    padding: 12px;
    text-decoration: none;
    color: #CDCDCD;
    transition: all .6s;

    &:hover {
        filter: brightness(1.75);
        transform: scale(1.2);
    }
`;

export const Icon = styled.i `
    align-self: 'flex-end'; 
    color: 'white';
    padding: 10px;
`;