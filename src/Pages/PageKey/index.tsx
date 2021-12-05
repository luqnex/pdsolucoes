import { useState } from "react"
import { Header } from "../../components/Header"
import { api } from "../../services/api"

import { 
    Card, 
    Button,
    Loading,
    Input
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

export function PageKey() {
    const [input, setInput] = useState('')
    const [item, setItem] = useState<ItemType>()
    const [loading, setLoading] = useState(false)

    const handleItemKey = async () => {
        setItem(undefined)
        setLoading(true)
        await api.get(`/activity?key=${input}`)
        .then(response => setItem(response.data))
        setLoading(false)
    }

    return (
        <Container>  
            <Header />
            <Content>
                <h2>Buscar uma atividade pela chave</h2>

                <div className="content-query">
                    <Input 
                        type="number"
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <Button type="button" onClick={handleItemKey}>Buscar atividade</Button>
                </div>

                {
                    item ?  
                    <Card key={ item.key }>
                        <div className="content">
                            <h3>Busca pela chave</h3>
                            <p>Activity: { item.activity }</p>
                            <p>Type: { item.type }</p>
                            <p>Participants: { item.participants }</p>
                            <p>Price: { item.price }</p>
                            <p>Link: { item.link }</p>
                            <p>Key: { item.key }</p>
                            <Button>favoritar</Button>
                        </div>
                    </Card>
                    : <div>
                        {
                            loading ? <Loading /> : ''
                        }
                    </div>
                }    
            </Content>
        </Container>
    )
}