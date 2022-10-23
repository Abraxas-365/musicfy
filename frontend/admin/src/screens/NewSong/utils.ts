import { apiSong } from "../../lib/Data/api/apiCalls";
import { NavigateFunction } from 'react-router-dom';


interface IValues {
    name: string,
    album_id: string,
};
export const handleFormSubmit = async (values: IValues, navigate: NavigateFunction) => {
    let resp = await apiSong.post('/create', { name: values.name, album_id: Number(values.album_id) })

    if (resp.status === 204) {
        alert('album no existe')
        return
    }
    navigate('/song')


};
