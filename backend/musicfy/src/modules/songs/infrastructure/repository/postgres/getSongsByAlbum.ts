import { ISong } from "src/modules/songs/domain/models/song";
import { SongRepositoryPostgres } from "./song.initPostgres";

//get all songs by album
export async function getSongsByAlbum(this: SongRepositoryPostgres, albumId: number): Promise<Array<ISong>> {
    return await this.songORM.findAll({
        where: {
            albumId: albumId
        },

        order: [
            ['id', 'DESC'],
        ],
    });
}
