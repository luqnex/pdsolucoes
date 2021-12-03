import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #511281;
        --button: #0FAE96;
        --buton-hover: #057E6C;
        --white: #fff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        color: var(--white);
        background-color: var(--buton-hover);
        font-family: 'Poppins', sans-serif;
    }
`

export const Card = styled.div`
    width: 40vw;
    height: 50vh;
    background-color: black;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    background-color: var(--button);

    width: 200px;
    height: 30px;
    border: none;
    border-radius: 8px;
    color: var(--white);

    font-size: 1rem;
    transition: all.3s;

    margin: 20px 0;

    &:hover {
        background-color: var(--buton-hover);
        cursor: pointer;
    }
` 