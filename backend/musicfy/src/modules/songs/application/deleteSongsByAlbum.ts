import { SongApplication } from "./song.initApplication";

//delete song by album id
export async function deleteSongsByAlbum(this: SongApplication, albumId: number): Promise<void> {

    //deliting song
    return await this.songRepository.deleteSongByAlbum(albumId)


}
