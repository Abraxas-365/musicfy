import { ISong } from "../domain/models/song";
import { SongApplication } from "./song.initApplication";

export async function listAllSongs(this: SongApplication): Promise<Array<ISong>> {

    return await this.songRepository.getAllSongs()

}
