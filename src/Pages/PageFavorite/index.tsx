import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { ContextFavorite } from "../../context/Context";

export function PageFavorite() {
    const [favorited, setFavorited] = useContext<any>(ContextFavorite)

    console.log(favorited)
    return (
        <>
            <Header />
            <h1>Page Favorite</h1>
            {
                favorited.map((favorite: any) => {
                    return (
                            <div key={favorite.key}>
                                <p>Activity: { favorite.activity }</p>
                                <p>Type: { favorite.type }</p>
                                <p>Participants: { favorite.participants }</p>
                                <p>Price: { favorite.price }</p>
                                <p>Link: { favorite.link }</p>
                                <p>Key: { favorite.key }</p>
                            </div>
                    )
                })
            }
        </>
    )
}