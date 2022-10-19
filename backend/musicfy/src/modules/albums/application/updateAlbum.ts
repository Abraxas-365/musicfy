import { IAlbum } from "../domain/models/album"
import { AlbumApplication } from "./album.initApplication"

//update album
export async function updateAlbum(this: AlbumApplication, album: IAlbum): Promise<void> {
    return this.albumRepository.updateAlbum(album)
}
