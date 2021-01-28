import styled from 'styled-components';

import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Alert = styled.div `
    background-color: #95E894;
    padding: 20px 40px;
    width: 20%;
    position: absolute;
    right: 0px;
    top: 10px;
    border-radius: 4px;
    border-left: 8px solid #079206;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    @media (max-width: 768px) {
        width: 40%;
        padding: 5px 10px;
        justify-content: space-between;
    }
`;

export const Message = styled.span `
    padding: 0 20px;
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const CloseIcon = styled(AiOutlineCloseCircle)
`
    font-size: 28px;

    &:hover {
        cursor: pointer;
    }
`;