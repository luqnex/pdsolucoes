import { useState } from "react"
import { SideBar } from "../../components/SideBar"
import { api } from "../../services/api"

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
            <SideBar />
            <Content>
                <h1>Buscar uma atividade pelo seu tipo</h1>

                <input 
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                />

                <button type='button' onClick={handleItemRandom}>Buscar atividade</button>

                {
                    <div>
                        <p>Activity: { item.activity }</p>
                        <p>Chave: { item.key }</p>
                        <p>Link: { item.link }</p>
                        <p>Participantes: { item.participants }</p>
                        <p>Preço: { item.price }</p>
                        <p>Tipo: { item.type }</p>
                    </div>
                }       
            </Content>
        </Container>
    )
}