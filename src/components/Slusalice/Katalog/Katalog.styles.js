import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Katalog = styled.section `
    display: flex;
    flex-wrap: wrap;
`;

export const Proizvod = styled.article `
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: 2px solid green;
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
    word-break: break-all;
    line-height: 2px;
    font-family: Verdana, sans-serif;
`;