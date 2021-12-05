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
        
        .menu-togle {
            display: block;
            z-index: 999;
            transition: all.3s;
            
            img {
                width: 30px;
                height: 30px;
            }
        }

        .close-menu {
            display: none;
        }

        .menu {
            display: none;
        }

        
        
        .active {
            position: absolute;
            width: 100vw;
            height: 100vh;
            background-color: var(--header);
            margin-top: 10px;
            transition: all .3s;

            right: 0;
            top: -10px;

            z-index: 999;
            
            .menu {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 10px;

                z-index: 10;
            }

            .content-img {
                width: 90vw;
                height: 10vh;

                display: flex;
                justify-content: flex-end;
                align-items: center;
            }

            img {
                display: block;
            }

            ul a li {
                margin: 10px 0;
            }

            hr {
                width: 100vw;
            }
        }
    }
`