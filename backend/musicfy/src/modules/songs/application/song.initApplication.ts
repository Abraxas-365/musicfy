import { Inject, Injectable } from "@nestjs/common";
import { ISong } from "../domain/models/song";
import { ISongRepository } from "../domain/ports/repository";
import { createSong } from "./createSong";
import { deleteSong } from "./deleteSong";
import { deleteSongsByAlbum } from "./deleteSongsByAlbum";
import { getSongById } from "./getSongById";
import { listAllSongs } from "./listAllSongs";
import { listAllSongsByAlbum } from "./listAllSongsByAlbum";
import { updateSong } from "./updateSong";

export const ISongApplication = Symbol("ISongApplication");
export interface ISongApplication {
    createSong(song: ISong): Promise<ISong>
    listAllSongsByAlbum(albumId: number): Promise<Array<ISong>>
    getSongById(songId: number): Promise<ISong>
    deleteSongsByAlbum(albumId: number): Promise<void>
    deleteSong(songId: number): Promise<void>
    updateSong(update: ISong): Promise<void>
    listAllSongs(): Promise<Array<ISong>>


}

@Injectable({})
export class SongApplication implements ISongApplication {
    constructor(
        @Inject(ISongRepository) protected songRepository: ISongRepository
    ) {}

    createSong = createSong.bind(this)
    listAllSongsByAlbum = listAllSongsByAlbum.bind(this)
    deleteSongsByAlbum = deleteSongsByAlbum.bind(this)
    deleteSong = deleteSong.bind(this)
    listAllSongs = listAllSongs.bind(this)
    getSongById = getSongById.bind(this)
    updateSong = updateSong.bind(this)


}
