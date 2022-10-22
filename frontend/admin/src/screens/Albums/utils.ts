import { useEffect, useState } from "react"
import { apiAlbum } from "../../lib/Data/api/apiCalls"


export interface IAlbum {
    id?: number
    name: string,
    artist: string,
    year: number,
    url: string
}

export const useAlbum = () => {
    const [albums, setAlbums] = useState([] as Array<IAlbum>)
    const [isLoading, setIsLoading] = useState(true)

    const getAlbum = async () => {

        const { data } = await apiAlbum.get('')
        setAlbums(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getAlbum();
    }, [])

    return { albums, isLoading }
}
