import { api } from "../../services/api"
import { Header } from "../../components/Header"

import { 
    Card,
    Button, 
    Loading
} from '../../styles/global'

import { 
    Container,
    Content,
} from "./styles"
import { useState } from "react"

interface ItemRandom {
    activity?: string;
    type?: string;
    participants?: string;
    price?: number | string;
    link?: string;
    key?: number | string;
}

export function PageRandom() {
    const [item, setItem] = useState<ItemRandom>()
    const [favorited, setFavorited] = useState<ItemRandom[]>([])
    const [loading, setLoading] = useState(false)

    const handleItemRandom = async () => {
        setItem(undefined)
        setLoading(true)
        await api.get("/activity")
        .then(response => setItem(response.data))
        setLoading(false)
    }

    const handleFavorit = () => {
        setFavorited([
            ...favorited,
            {
                activity: item?.activity,
                type: item?.type,
                participants: item?.participants,
                price: item?.price,
                link: item?.link,
                key: item?.key,
            }
        ])
    }
    console.log(favorited)

    return (
        <Container>  
            <Header />
            <Content>
                <h2>Buscar uma atividade aleatória</h2>
                <Button type='button' onClick={handleItemRandom}>Buscar atividade</Button>

                {
                    item ?  
                    <Card key={ item.key }>
                        <div className="content">
                            <h2>Busca aleatória</h2>
                            <p>Activity: { item.activity }</p>
                            <p>Type: { item.type }</p>
                            <p>Participants: { item.participants }</p>
                            <p>Price: { item.price }</p>
                            <p>Link: { item.link }</p>
                            <p>Key: { item.key }</p>
                            <Button onClick={handleFavorit}>favoritar</Button>
                        </div>
                    </Card>
                    : <div>
                        {
                            loading ? 
                                <Loading />
                                : ''
                        }
                    </div>
                }       
            </Content>
        </Container>
    )
}