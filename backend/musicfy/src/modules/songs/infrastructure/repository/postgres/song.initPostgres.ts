import { Inject, Injectable } from "@nestjs/common";
import { ISong, Song, SongORM } from "src/modules/songs/domain/models/song";
import { ISongRepository } from "src/modules/songs/domain/ports/repository";
import { createSong } from "./createSong";
import { deleteSong } from "./deleteSong";
import { deleteAlbum } from "./deleteSongByAlbum";
import { getAllSongs } from "./getAllSongs";
import { getSongsByAlbum } from "./getSongsByAlbum";
import { updateSong } from "./updateSong";

@Injectable({})
export class SongRepositoryPostgres implements ISongRepository {

    constructor(@Inject(SongORM) protected songORM: typeof Song) {}


    createSong = createSong.bind(this)
    deleteSong = deleteSong.bind(this)
    deleteSongByAlbum = deleteAlbum.bind(this)
    getSongsByAlbum = getSongsByAlbum.bind(this)
    updateSong = updateSong.bind(this)
    getAllSongs = getAllSongs.bind(this)


}
