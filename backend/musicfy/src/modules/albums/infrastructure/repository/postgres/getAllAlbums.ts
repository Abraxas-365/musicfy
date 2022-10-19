import { IAlbum } from "src/modules/albums/domain/models/album";
import { AlbumRepositoryPostgres } from "./album.initPostgres";


//get all albums
export async function getAllAlbums(this: AlbumRepositoryPostgres): Promise<Array<IAlbum>> {
    return await this.albumORM.findAll()
}
