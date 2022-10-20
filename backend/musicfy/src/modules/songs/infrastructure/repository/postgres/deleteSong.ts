import { SongRepositoryPostgres } from "./song.initPostgres";

//delte an song using the id
export async function deleteSong(this: SongRepositoryPostgres, songId: number): Promise<void> {
    await this.songORM.destroy({
        where: {
            id: songId
        }
    });
    return
}
