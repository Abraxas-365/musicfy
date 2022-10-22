import { SongRepositoryPostgres } from "./song.initPostgres";

//delte an song using album id
export async function deleteAlbum(this: SongRepositoryPostgres, albumId: number): Promise<void> {
    await this.songORM.destroy({
        where: {
            album_id: albumId
        }
    });
    return
}
