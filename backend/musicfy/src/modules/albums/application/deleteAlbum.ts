import { AlbumApplication } from "./album.initApplication"


//delete album
export async function deleteAlbum(this: AlbumApplication, albumId: number): Promise<void> {

    //deliting album
    return await this.albumRepository.deleteAlbum(albumId)


    //TODO:delete all songs part of the album
}
