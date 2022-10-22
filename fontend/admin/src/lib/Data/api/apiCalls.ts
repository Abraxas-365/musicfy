import axios from 'axios';

const baseApiURL = 'http://localhost:3000/api'


export const apiAlbum = axios.create({
    baseURL: baseApiURL + '/album'
});

export const apiSong = axios.create({
    baseURL: baseApiURL + '/song'
});
