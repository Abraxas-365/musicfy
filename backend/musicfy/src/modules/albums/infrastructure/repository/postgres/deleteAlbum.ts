import { AlbumRepositoryPostgres } from "./album.initPostgres";



//delte an album using the id
export async function deleteAlbum(this: AlbumRepositoryPostgres, albumId: number): Promise<void> {
    await this.albumORM.destroy({
        where: {
            id: albumId
        }
    });
    return
}
