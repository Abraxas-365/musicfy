import { ISong } from "src/modules/songs/domain/models/song";
import { SongRepositoryPostgres } from "./song.initPostgres";

export async function getSongById(this: SongRepositoryPostgres, songId: number): Promise<ISong> {
    return await this.songORM.findByPk(songId)
}
