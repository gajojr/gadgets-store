import styled from 'styled-components';

import { FaShoppingBasket } from "react-icons/fa";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Catalog = styled.section `
    display: flex;
    flex-wrap: wrap;
`;

export const Proizvod = styled.article `
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    flex: 1;
    min-width: 20%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        min-width: 25%;
    }

    @media (max-width: 750px) {
        min-width: 32%;
    }

    @media (max-width: 280px) {
        min-width: 80%;
    }
`;

export const H1 = styled.h1 `
    margin-left: 10px;
`;

export const Image = styled.img `
    width: 100%;
    align-self: center;
`;

export const H4 = styled.h4 `
    font-family: Verdana, sans-serif;
`;

export const FaShoppingBasketStyled = styled(FaShoppingBasket)
`
    align-self: flex-end;
    transition: 1s all;
    
    &:hover {
        cursor: pointer;
        transform: rotate(360deg);
    }
`;