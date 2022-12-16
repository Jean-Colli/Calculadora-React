import styled from 'styled-components';

export const SupContainer = styled.div`
    h1 {
        display: flex;
        justify-content: center;
        padding-top: 50px;
        font-size: 40px;
        font-family: 'Roboto';
        color: #0000EE;
        font-weight: bold;
        max-width: 100%;
    }
    
`

export const Container = styled.div`
    width: 100%;
    height: 60vh;
    background-color: #CACACA;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 80%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`