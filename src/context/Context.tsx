import React, { createContext, ReactNode, useState } from 'react'

interface FavoriteProviderProps {
    children: ReactNode;
}

export const ContextFavorite = createContext<{}>({})

export function FavoriteProvider({children}: FavoriteProviderProps) {
    const [favorited, setFavorited] = useState([])

    return (
        <ContextFavorite.Provider value={[favorited, setFavorited]}>
            {children}
        </ContextFavorite.Provider>
    )
}