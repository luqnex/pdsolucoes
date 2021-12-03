import { api } from "../../services/api"
import { Header } from "../../components/Header"

import { 
    Card,
    Button 
} from '../../styles/global'

import { 
    Container,
    Content,
} from "./styles"
import { useState } from "react"

interface ItemRandom {
    activity: string;
    type: string;
    participants: string;
    price: number | string;
    link?: string;
    key: number | string;
}

export function PageRandom() {
    const [item, setItem] = useState<ItemRandom>({
        activity: 'Exemplo de atividade',
        type: 'Tipo da atividade',
        participants: 'Participantes',
        price: 'Preço da atividade',
        link: 'Link para a atividade',
        key: '',
    })

    const handleItemRandom = async () => {

        await api.get("/activity")
        .then(response => setItem(response.data))
    }

    return (
        <Container>  
            <Header />
            <Content>
                <h1>Buscar uma atividade aleatória</h1>
                <Button type='button' onClick={handleItemRandom}>Buscar atividade</Button>

                {
                    <Card key={ item.key }>
                        <p>Activity: { item.activity }</p>
                        <p>Chave: { item.key }</p>
                        <p>Link: { item.link }</p>
                        <p>Participantes: { item.participants }</p>
                        <p>Preço: { item.price }</p>
                        <p>Tipo: { item.type }</p>
                    </Card>
                }       
            </Content>
        </Container>
    )
}