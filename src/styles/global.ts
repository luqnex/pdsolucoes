import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #511281;
        --button: #5CD461;
        --buton-hover: #3d8f41;
        --white: #fff;
        --header: #121214;
        --background: #F0F2F5;
        --background-card: gray;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Poppins', sans-serif;
        background: var(--background);
    }

    h2 {
        margin-top: 20px;
        font-size: 1.3rem;
    }
`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    border: none;
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

export const Card = styled.div`
    width: 35vw;
    height: 65vh;
    position: relative;

    margin-top: 30px;

    z-index: 1;

    &:hover {
        color: rgb(36, 36, 36);
        cursor: pointer;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        background: gray;
        z-index: -20;
        transition: all .4s;
    }

    &::before {
        top: 0;
        right: 0;
        background: black;
    }

    &::after {
        bottom: 0;
        left: 0;
        background: black;
    }

    &:hover::before {
        width: 50px;
        height: 50px;
        transform: translate(20px, -20px);
        border-radius: 50%;
    }

    &:hover::after {
        width: 100px;
        height: 100px;
        transform: translate(-30px, 30px);
        border-radius: 50%;
    }

    &:hover .content {
        color: rgb(36, 36, 36);
    }

    .content {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.089);
        backdrop-filter: blur(10px);
        --webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--white);
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.055);
        transition: all .4s;

        padding: 20px;

        p {
            padding: 0.3rem 0;
            text-align: center;
        }

        @media(max-width: 768px) {
            h2 {
                font-size: 1rem;
            }

            p {
                font-size: .8rem;
            }
        }
    }

    //Content card
    @media(max-width: 768px) { 
        width: 80vw;
        height: clamp(400px, 50vh, 55vh);
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