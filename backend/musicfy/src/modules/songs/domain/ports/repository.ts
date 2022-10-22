import { ISong } from "../models/song";

export interface ISongRepository {
    createSong(song: ISong): Promise<ISong>
    getSongsByAlbum(albumId: number): Promise<Array<ISong>>
    getAllSongs(): Promise<Array<ISong>>
    getSongById(songId: number): Promise<ISong>
    deleteSongByAlbum(albumId: number): Promise<void>
    deleteSong(id: number): Promise<void>
    updateSong(query: ISong): Promise<void>
}
export const ISongRepository = Symbol('ISongRepository');
