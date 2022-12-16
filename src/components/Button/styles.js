import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid;
    background-color: #00AAF0;
    color: #ffffff;
    font-size: 24px;
    font-width: 700;
    flex: 1;
    display: inline-block;
    &:hover {
        opacity: 0.6;
    }

    &:active {
        background-color: #6C7B8B;
    }
`