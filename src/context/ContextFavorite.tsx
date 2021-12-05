import React, { createContext, useState } from "react";

interface Items {
    activity: string;
    type: string;
    participants: string;
    price: number | string;
    link?: string;
    key: number | string;
}
export const FavoritedContext = createContext({}) 

export function FavoritedProvider(props: any) {
    const [favorited, setFavorited] = useState<Items[]>([])

    return (
        <FavoritedContext.Provider value={{favorited, setFavorited}}>
            {props.children}
        </FavoritedContext.Provider>
    )
}