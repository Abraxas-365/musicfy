import { IAlbum } from "../models/album"

export interface IAlbumRepository {
    getNumberOfAlbums(): Promise<number>
    createAlbum(album: IAlbum): Promise<IAlbum>
    getAllAlbums(): Promise<Array<IAlbum>>
}
export const IAlbumRepository = Symbol('IAlbumRepository');
