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

    .content-query {
        display: flex;
        align-items: center;
    }

    p {
        padding: 10px;
    }

    @media(max-width: 768px) {
        h2 {
            font-size: 1rem;
        }

        p {
            font-size: .8rem;
            text-align: center;
        }
    }
` 