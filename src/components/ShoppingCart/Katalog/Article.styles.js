import styled from 'styled-components';

export const Proizvod = styled.article `
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    flex: 1;
    min-width: 20%;
    max-width: 25%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        min-width: 30%;
    }

    @media (max-width: 719px) {
        min-width: 45%;
    }

    @media (max-width: 479px) {
        min-width: 42%;
    }

    @media (max-width: 380px) {
        min-width: 90%;
    }
`;