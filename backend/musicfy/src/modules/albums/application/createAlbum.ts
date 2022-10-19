import { IAlbum } from "../domain/models/album";
import { AlbumApplication } from "./album.initApplication";


export async function createAlbum(this: AlbumApplication, album: IAlbum): Promise<IAlbum> {
    //si no se puede
    if (!await this.albumService.canAlbumBeCreated()) {
        return
    }
    //si se puede
    this.albumRepository.createAlbum(album)

}
