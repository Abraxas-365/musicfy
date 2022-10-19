import { IAlbum } from "../domain/models/album"
import { AlbumApplication } from "./album.initApplication"

//list all albumes in the repository
export async function listAllAlbums(this: AlbumApplication): Promise<Array<IAlbum>> {
    return await this.albumRepository.getAllAlbums()
}
