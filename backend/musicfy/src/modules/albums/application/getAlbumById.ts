import { IAlbum } from "../domain/models/album";
import { AlbumApplication } from "./album.initApplication";

export async function getAlbumById(this: AlbumApplication, albumId: number): Promise<IAlbum> {
    return await this.albumRepository.getAlbumById(albumId)
}
