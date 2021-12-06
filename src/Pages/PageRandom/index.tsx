import { useContext, useState } from "react"

import { api } from "../../services/api"
import { Header } from "../../components/Header"
import { ContextFavorite } from "../../context/Context"
import { CardComponent } from "../../components/Card"

import { 
    Button, 
    Loading
} from '../../styles/global'

import { 
    Container,
    Content,
} from "./styles"


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
    const [loading, setLoading] = useState(false)
    const [favorited, setFavorited] =  useContext<any>(ContextFavorite)

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

        window.alert('Atividade salva')
    }

    return (
        <Container>  
            <Header />
            <Content>
                <h2>Buscar uma atividade aleatória</h2>
                <Button type='button' onClick={handleItemRandom}>Buscar atividade</Button>

                {
                    item ?  
                    <CardComponent key={ item.key }>
                        <h3>Busca aleatória</h3>
                        <p><span>Activity:</span> { item.activity }</p>
                        <p><span>Type:</span> { item.type }</p>
                        <p><span>Participants:</span> { item.participants }</p>
                        <p><span>Price:</span> { item.price }</p>
                        <p><span>Link:</span> { item.link }</p>
                        <p><span>Key:</span> { item.key }</p>
                        <Button onClick={handleFavorit}>Salvar como favorita</Button>
                    </CardComponent>
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