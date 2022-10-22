import { TooManyAlbums } from "src/internal/errors/tooManyAlbums";
import { IAlbum } from "../domain/models/album";
import { AlbumApplication } from "./album.initApplication";


export async function createAlbum(this: AlbumApplication, album: IAlbum): Promise<IAlbum> {
    //si no se puede
    if (!await this.albumService.canAlbumBeCreated()) {
        throw new TooManyAlbums('to many albums in db')
    }
    //si se puede
    return this.albumRepository.createAlbum(album)
}
