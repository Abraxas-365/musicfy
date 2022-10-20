import { AlbumApplication } from "./album.initApplication"


//delete album
export async function deleteAlbum(this: AlbumApplication, albumId: number): Promise<void> {


    //delete all songs part of the album
    await this.songApplication.deleteSongsByAlbum(albumId)

    //deliting album
    await this.albumRepository.deleteAlbum(albumId)



}
