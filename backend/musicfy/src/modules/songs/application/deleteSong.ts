import { SongApplication } from "./song.initApplication";

//delete song
export async function deleteSong(this: SongApplication, songId: number): Promise<void> {

    //deliting song
    return await this.songRepository.deleteSong(songId)


}
