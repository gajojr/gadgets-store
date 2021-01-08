import styled from 'styled-components';

export const Section = styled.section `
    width: 100%;
    height: 100%;
    text-align: center;
`;

export const Article = styled.article `
    width: 46%;
    margin: 10px;
    box-sizing: border-box;
    height: 450px;
    display: inline-block;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    border-radius: 20px;

    @media (max-width: 604px) {
        width: 90%;
    }
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    transition: 1s;

    &:hover {
        transform: scale(1.1) rotate(5deg);
    }
`;

export const SectionText = styled.h3 `
    color: #fff;
    letter-spacing: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Verdana, sans-serif;
    transition: .6s;

    &:hover {
        letter-spacing: 6px;
    }
`;