import styled from 'styled-components'

export const Container = styled.header`
    width: 100vw;
    height: 15vh;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 80vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
        display: flex;
        list-style: none;
    }

    a {
        color: var(--white);
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }

    li {
        margin-left: 20px;
        font-size: 1.1rem;
    }
`