import { ISong } from "src/modules/songs/domain/models/song";
import { SongRepositoryPostgres } from "./song.initPostgres";

interface IQuery {
    name?: string,
    albumId?: number
}
//create a new album
export async function updateSong(this: SongRepositoryPostgres, update: ISong): Promise<void> {
    const query: IQuery = {
    }

    if (update.name != "") {
        query.name = update.name;
    }

    if (update.albumId != 0) {
        query.albumId = update.albumId;
    }

    await this.songORM.update(query, {
        where: {
            id: update.id
        }
    });
    return
}
