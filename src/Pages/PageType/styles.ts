import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
`

export const Content = styled.div`
    width: 70vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 20px;
    }
    
    button {
        margin-top: 50px;
    }
` 