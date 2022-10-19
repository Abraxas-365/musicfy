import { IAlbum } from "src/modules/albums/domain/models/album";
import { AlbumRepositoryPostgres } from "./album.initPostgres";



interface IQuery {
    name?: string,
    artist?: string,
    year?: number
}
//create a new album
export async function updateAlbum(this: AlbumRepositoryPostgres, update: IAlbum): Promise<void> {
    const query: IQuery = {
    }

    if (update.name != "") {
        query.name = update.name;
    }
    if (update.artist != "") {
        query.artist = update.artist;
    }
    if (update.year != 0) {
        query.year = update.year;
    }

    await this.albumORM.update(query, {
        where: {
            id: update.id
        }
    });
    return
}
