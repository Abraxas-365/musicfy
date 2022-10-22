import { useEffect, useState } from "react"
import { apiSong } from "../../lib/Data/api/apiCalls"

export interface ISong {
    id?: number
    name: string,
    album_id: number
}

export const useSongs = () => {
    const [songs, setSong] = useState([] as Array<ISong>)
    const [isLoading, setIsLoading] = useState(true)

    const getSong = async () => {

        const { data } = await apiSong.get('')
        setSong(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getSong();
    }, [])

    return { songs, isLoading }
}
