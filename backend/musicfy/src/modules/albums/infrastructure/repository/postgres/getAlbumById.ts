import { IAlbum } from "src/modules/albums/domain/models/album";
import { AlbumRepositoryPostgres } from "./album.initPostgres";

export async function getAlbumById(this: AlbumRepositoryPostgres, albumId: number): Promise<IAlbum> {
    return await this.albumORM.findByPk(albumId)
}
