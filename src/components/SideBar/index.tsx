import { Link } from 'react-router-dom'

import { 
    Container
 } from './styles'

export function SideBar() {
    return (
        <Container>
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
        </Container>
    )
}