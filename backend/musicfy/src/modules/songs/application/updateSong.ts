import { ISong } from "../domain/models/song";
import { SongApplication } from "./song.initApplication";

//update song
export async function updateSong(this: SongApplication, song: ISong): Promise<void> {

    return this.songRepository.updateSong(song)

}
