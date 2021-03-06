import styled from "styled-components";

export const Card = styled.div`
    width: clamp(400px, 35vw, 40vw);
    height: 60vh;
    position: relative;

    margin: 30px 0 20px 0;

    z-index: 1;

    &:last-child {
        margin-bottom: 50px;
    }

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
        
        h3 {
            font-size: 1.1rem;
        }

        p {
            padding: 0.3rem 0;
            text-align: center;
            font-size: 1rem;
            font-weight: 200;

            span {
                font-weight: bold;
            }
        }

        button {
            margin-bottom: 20px;
        }

        @media(max-width: 768px) {
            h2{
                font-size: 1rem;
            }

            h3 {
                font-size: .9rem;
            }

            p {
                font-size: .8rem;
            }
        }
    }

    //Content card
    @media(max-width: 768px) { 
        width: 80vw;
        height: 55vh;

        &:hover {
            color: #fff;
            cursor: pointer;
        }

        &::before {
            display: none;
        }

        &::after {
            display: none;
        }

        .content {
            background: var(--header);
        }

        &:hover .content {
            color: var(--white);
        }
    }
`