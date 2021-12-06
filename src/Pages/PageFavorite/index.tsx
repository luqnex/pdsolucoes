import React, { useContext } from "react";
import { CardComponent } from "../../components/Card";
import { Header } from "../../components/Header";
import { ContextFavorite } from "../../context/Context";

import { Button } from "../../styles/global";

import { 
    Container,
    Content
} from './styles'

export function PageFavorite() {
    const [favorited, setFavorited] = useContext<any>(ContextFavorite)

    // Pega o estado favorited e faz um filter nele, então setFavorited recebe todos os items menos o que foi removido
    const handleRemoveFavorit = (key: number) => {
        const removeFavorit = favorited.filter((favorit: any) => favorit.key !== key)
        setFavorited(removeFavorit)

        window.alert('Atividade removida dos favoritos')
    }

    return (
        <Container>
            <Header />
            <Content>
                <h2>Atividades Favoritas</h2>
                {
                    favorited.map((favorite: any) => {
                        return (
                                <CardComponent key={favorite.key}>
                                    <p>Activity: { favorite.activity }</p>
                                    <p>Type: { favorite.type }</p>
                                    <p>Participants: { favorite.participants }</p>
                                    <p>Price: { favorite.price }</p>
                                    <p>Link: { favorite.link }</p>
                                    <p>Key: { favorite.key }</p>
                                    <Button 
                                        onClick={() => handleRemoveFavorit(favorite.key)}
                                    >
                                            Remover dos favoritos
                                    </Button>
                                </CardComponent>
                        )
                    })
                }
            </Content>
        </Container>
    )
}