import { Error204 } from "src/internal/errors/Error204";
import { ISong, Song } from "src/modules/songs/domain/models/song";
import { SongRepositoryPostgres } from "./song.initPostgres";

//createSong
export async function createSong(this: SongRepositoryPostgres, song: ISong): Promise<ISong> {
    try {
        return await this.songORM.create<Song>(song)
    } catch (err: any) {
        if (err.name == "SequelizeForeignKeyConstraintError") {
            throw new Error204("FK not exist", "album doest exist")
        }
    }
}
