import { api } from "../../services/api"
import { SideBar } from "../../components/SideBar"

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
            <SideBar />
            <Content>
                <h1>Buscar uma atividade aleatória</h1>
                <button type='button' onClick={handleItemRandom}>Buscar atividade</button>

                {
                    <div key={ item.key }>
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