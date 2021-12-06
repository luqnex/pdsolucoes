import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --button: #5CD461;
        --buton-hover: #3d8f41;
        --white: #fff;
        --header: #121214;
        --background: #F0F2F5;
        --border-input: #969CB2;

        --danger: #8F2124;
        --background-danger: #F8D7DA;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Poppins', sans-serif;
        background: var(--background);

        overflow-x: hidden;
    }

    h2 {
        margin-top: 20px;
        font-size: 1.3rem;
    }
`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    border: 1px solid var(--border-input);
;
    border-radius: 8px;

    font-size: 1rem;

    padding: 0 15px;
    margin: 20px 10px 0 0;

    @media(max-width: 768px) {
        width: 200px;
    }

    @media(max-width: 320px) {
        width: 150px;
    }
` 

export const Button = styled.button`
    background-color: var(--button);

    height: 40px;
    border: none;
    border-radius: 8px;
    color: var(--white);

    font-size: 1rem;
    transition: all.3s;

    margin-top: 20px;

    padding: 10px 15px;

    &:hover {
        background-color: var(--buton-hover);
        cursor: pointer;
    }

    @media(max-width: 768px) {
        font-size: .8rem;
    }
` 

export const Loading = styled.div`
    margin-top: 20px;
    animation: is-rotating 1s infinite;
    border: 2px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #1a3535;
    height: 25px;
    width: 25px;
    
    
    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
    }
`