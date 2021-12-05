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

export function PageType() {
    const [input, setInput] = useState('')
    const [item, setItem] = useState<ItemType>()
    const [loading, setLoading] = useState(false)

    const handleItemType = async () => {
        setItem(undefined)
        setLoading(true)

        await api.get(`/activity?type=${input}`)
        .then(response => setItem(response.data))

        setLoading(false)
    }

    return (
        <Container>  
            <Header />
            <Content>
                <h2>Buscar uma atividade pelo seu tipo</h2>
                <div className="content-query">

                    <Input 
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button type='button' onClick={handleItemType}>Buscar atividade</Button>
                </div>

                <p>
                    <strong>Tipos de atividades:</strong> "education", "recreational", "social", "diy", "charity",
                    "cooking", "relaxation", "music", "busywork"
                </p>

                {
                    item ?  
                    <Card key={ item.key }>
                        <div className="content">
                            <h2>Busca pelo tipo</h2>
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