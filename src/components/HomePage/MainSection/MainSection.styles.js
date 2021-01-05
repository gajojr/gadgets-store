import styled from 'styled-components';

export const Section = styled.section `
    border: 2px solid red;
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const Article = styled.article `
    width: 46%;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid green;
    height: 450px;
    display: inline-block;
    background-color: #000;
    color: #fff;

    @media (max-width: 604px) {
        width: 90%;
    }
`;