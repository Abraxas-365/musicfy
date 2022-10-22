import { useEffect, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { apiSong } from "../../lib/Data/api/apiCalls";

interface IValues {
    id?: number,
    name: string,
    album_id: number,
};

export const handleFormSubmit = async (values: IValues, id: number, navigate: NavigateFunction) => {
    await apiSong.put(`/update/${id}`, values)
    navigate('/song')
};

export const useGetSong = (id: number) => {
    const [song, setSong] = useState({} as IValues)
    const [isLoading, setIsLoading] = useState(true)

    const getSong = async () => {
        const { data } = await apiSong.get(`${id}`)
        setSong(data)
        setIsLoading(false)
    }
    useEffect(() => {
        getSong();
    }, [])

    return { song, isLoading }
}
