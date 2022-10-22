import { ISong } from "../domain/models/song";
import { SongApplication } from "./song.initApplication";

export async function getSongById(this: SongApplication, songId: number): Promise<ISong> {
    return await this.songRepository.getSongById(songId)
}
