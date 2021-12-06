import { Link } from 'react-router-dom'

import {
    Container, 
    Content
 } from './styles'

import Menu from '../../assets/icons8-menu.svg' 
import { useState } from 'react'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenAndCloseMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Container>
            <Content>
            <h1>pd<span>Query</span></h1>
            <nav className="menu">
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

                    <Link to="/favorite">
                        <li>Favoritos</li>
                    </Link>
                </ul>
            </nav>

            <div className="menu-togle">
                <img 
                    src={Menu} 
                    alt="Menu"
                    onClick={handleOpenAndCloseMenu}
                />

                <nav className={isOpen ? 'active' : ''}>
                    <div className="content-img">
                        <img 
                            className="close-menu"
                            src={Menu} 
                            alt="Menu"
                            onClick={handleOpenAndCloseMenu}
                        />
                    </div>
                    <ul className="menu">
                        <Link to="/">
                            <li>Gerar atividade aleatória</li>
                        </Link>

                        <hr />

                        <Link to="/type">
                            <li>Gerar atividade pelo tipo</li>
                        </Link>

                        <hr />

                        <Link to="/key">
                            <li>Gerar atividade pela chave</li>
                        </Link>

                        <hr />

                        <Link to="/favorite">
                            <li>Favoritos</li>
                        </Link>

                        <hr />
                    </ul>
                </nav>
            </div>
        </Content>
        </Container>
    )
}