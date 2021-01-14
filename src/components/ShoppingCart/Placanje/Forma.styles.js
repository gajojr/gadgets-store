import styled from 'styled-components';

export const StyledForm = styled.form `
    margin-top: 30px;
    margin-bottom: 20px;
    align-self: center; 
    width: 60%;
    padding: 20px;
    border-radius: 10px;
    background-color: #D6D6D6;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1508px) {
        flex-direction: column;
    }
`;

export const Info = styled.div `
    font-family: sans-serif;
`;

export const Label = styled.label `
    display: block;
    margin-top: 10px;
`;

export const Input = styled.input `
    display: block;
    height: 30px;
    border-radius: 20px;
    outline: none;
    border: 2px solid grey;

    ::placeholder {
        padding: 5px;
        font-size: 1.125em;
    }
`;

export const VerificationDiv = styled.div `
    align-self: 'flex-end';
`;

export const Image = styled.img `
    margin-top: 20px;
    border-radius: 10px;

    @media (max-width: 836px) {
        width: 80%;
    }
`;

export const Select = styled.select `
    display: block;
`;

export const Sumbit = styled.input `
    margin-top: 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    background: rgb(231,235,240);
    background: linear-gradient(90deg, rgba(231,235,240,1) 0%, rgba(186,193,196,1) 88%);
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-family: sans-serif;

    @media (max-width: 768px) {
        width: 80%;
        align-self: center;
    }
`;