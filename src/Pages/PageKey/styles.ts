import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    width: 100vw;
    min-height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center; 
    
    h3 {
        font-size: 1.1rem;
    }

    .content-query {
        display: flex;
        align-items: center;
    }

    @media(max-width: 768px) {
        h2 {
            font-size: 1rem;
        }
    }
`