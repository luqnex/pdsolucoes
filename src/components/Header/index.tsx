import { Link } from 'react-router-dom'

import {
    Container, 
    Content
 } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
            <h1>pd<span>Query</span></h1>
            <div className="menu">
                <ul>
                    <Link to="/">
                        <li>Gerar atividade aleatória</li>
                    </Link>

                    <Link to="/type">
                        <li>Gerar atividade pelo tipo</li>
                    </Link>

                    <Link to="/key">
                        <li>Gerar atividade pela chave</li>
                    </Link>
                </ul>
            </div>

            <div className="menu-togle">
                <ul>
                    <Link to="/">
                        <li>Gerar atividade aleatória</li>
                    </Link>

                    <Link to="/type">
                        <li>Gerar atividade pelo tipo</li>
                    </Link>

                    <Link to="/key">
                        <li>Gerar atividade pela chave</li>
                    </Link>
                </ul>
            </div>
        </Content>
        </Container>
    )
}