import { ISong } from "../domain/models/song";
import { SongApplication } from "./song.initApplication";



//list all songs in the repository by album
export async function listAllSongsByAlbum(this: SongApplication, albumId: number): Promise<Array<ISong>> {

    return await this.songRepository.getSongsByAlbum(albumId)

}
