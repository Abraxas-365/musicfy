import { IAlbum } from "../models/album"

export interface IAlbumRepository {
    getNumberOfAlbums(): Promise<number>
    createAlbum(album: IAlbum): Promise<IAlbum>
    getAllAlbums(): Promise<Array<IAlbum>>
    deleteAlbum(id: number): Promise<void>
    updateAlbum(query: IAlbum): Promise<void>
}
export const IAlbumRepository = Symbol('IAlbumRepository');
