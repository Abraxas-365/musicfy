import { IAlbum } from "src/modules/albums/domain/models/album";
import { AlbumRepositoryPostgres } from "./album.initPostgres";


//create a new album
export async function createAlbum(this: AlbumRepositoryPostgres, album: IAlbum): Promise<IAlbum> {
    return await this.albumORM.create(album)
}
