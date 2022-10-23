import { apiAlbum } from "../../lib/Data/api/apiCalls";
import { NavigateFunction } from 'react-router-dom';


interface IValues {
    name: string,
    artist: string,
    year: number,
    url: string,
};
export const handleFormSubmit = async (values: IValues, navigate: NavigateFunction) => {
    let resp = await apiAlbum.post('/create', values)

    if (resp.status === 204) {
        alert('too many albums')
        return
    }
    navigate('/album')


};
