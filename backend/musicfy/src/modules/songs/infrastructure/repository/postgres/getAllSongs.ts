import { ISong } from "src/modules/songs/domain/models/song";
import { SongRepositoryPostgres } from "./song.initPostgres";

//get all albums
export async function getAllSongs(this: SongRepositoryPostgres): Promise<Array<ISong>> {
    return await this.songORM.findAll({
        order: [
            ['id', 'DESC'],
        ],
    }
    )
}
