import { useState } from "react"
import { Header } from "../../components/Header"
import { api } from "../../services/api"

import { 
    Card,
    Button 
} from "../../styles/global"

import { 
    Container,
    Content 
} from "./styles"

interface ItemType {
    activity: string;
    type: string;
    participants: string;
    price: number | string;
    link?: string;
    key: number | string;
    error?: string;
}

export function PageType() {
    const [input, setInput] = useState('')
    const [item, setItem] = useState<ItemType>({} as ItemType)

    const handleItemRandom = async () => {
        await api.get(`/activity?type=${input}`)
        .then(response => setItem(response.data))
    }

    return (
        <Container>  
            <Header />
            <Content>
                <h1>Buscar uma atividade pelo seu tipo</h1>

                <input 
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                />

                <Button type='button' onClick={handleItemRandom}>Buscar atividade</Button>

                {
                    <Card>
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