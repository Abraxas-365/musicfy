import { ISong } from "src/modules/songs/domain/models/song";
import { SongRepositoryPostgres } from "./song.initPostgres";

interface IQuery {
    name?: string,
    album_id?: number
}
//create a new album
export async function updateSong(this: SongRepositoryPostgres, update: ISong): Promise<void> {
    const query: IQuery = {
    }

    if (update.name != "") {
        query.name = update.name;
    }

    if (update.album_id != 0) {
        query.album_id = update.album_id;
    }

    await this.songORM.update(query, {
        where: {
            id: update.id
        }
    });
    return
}
