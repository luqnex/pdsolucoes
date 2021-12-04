import styled from 'styled-components'

export const Container = styled.header`
    width: 100vw;
    height: 10vh;
    background-color: var(--header);

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--white);
`

export const Content = styled.div`
    width: 80vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .menu-togle {
        display: none;
    }

    h1 span {
        color: var(--button);
    }

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
        font-size: .9rem;
    }

    @media(max-width: 768px) {
        h1 {
            font-size: 1rem;
        } 
        
        .menu {
            display: none;
        }

        .menu-togle {
            display: flex;
        }
    }
`