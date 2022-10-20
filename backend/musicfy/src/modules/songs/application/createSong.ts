import { ISong } from "../domain/models/song"
import { SongApplication } from "./song.initApplication"

export async function createSong(this: SongApplication, song: ISong): Promise<ISong> {

    return this.songRepository.createSong(song)

}
