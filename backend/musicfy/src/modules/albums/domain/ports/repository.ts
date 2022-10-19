import { IAlbum } from "../models/album"

export interface IAlbumRepository {
    getNumberOfAlbums(): Promise<number>
    createAlbum(album: IAlbum): Promise<void>
}
export const IAlbumRepository = Symbol('IAlbumRepository');
