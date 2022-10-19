import { AlbumRepositoryPostgres } from "./album.initPostgres";



export async function getNumberOfUsers(this: AlbumRepositoryPostgres): Promise<number> {
    return await this.albumORM.count();
}
