import { ISong, Song } from "src/modules/songs/domain/models/song";
import { SongRepositoryPostgres } from "./song.initPostgres";

//createSong
export async function createSong(this: SongRepositoryPostgres, song: ISong): Promise<ISong> {
    return await this.songORM.create<Song>(song)
}
