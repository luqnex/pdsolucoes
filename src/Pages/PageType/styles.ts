import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    margin-bottom: 50px;
`

export const Content = styled.div`
    width: 100vw;
    min-height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    .error {
        width: 50vw;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--background-danger);
        color: var(--danger);
        border: 1px solid var(--danger);
        border-radius: 8px;
        margin-top: 30px;
    }

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