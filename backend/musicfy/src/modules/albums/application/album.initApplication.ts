import { Inject, Injectable } from "@nestjs/common";
import { ISongApplication } from "src/modules/songs/application/song.initApplication";
import { IAlbum } from "../domain/models/album";
import { IAlbumRepository } from "../domain/ports/repository";
import { IAlbumService } from "../domain/service/album.initService";
import { createAlbum } from "./createAlbum";
import { deleteAlbum } from "./deleteAlbum";
import { listAllAlbums } from "./listAllAlbums";
import { updateAlbum } from "./updateAlbum";


export const IAlbumApplication = Symbol("IAlbumApplication");
export interface IAlbumApplication {
    createAlbum(album: IAlbum): Promise<IAlbum>
    listAllAlbums(): Promise<Array<IAlbum>>
    deleteAlbum(albumId: number): Promise<void>
    updateAlbum(update: IAlbum): Promise<void>

}

@Injectable({})
export class AlbumApplication implements IAlbumApplication {
    constructor(
        @Inject(IAlbumService) protected albumService: IAlbumService,
        @Inject(IAlbumRepository) protected albumRepository: IAlbumRepository,
        @Inject(ISongApplication) protected songApplication: ISongApplication
    ) {}

    createAlbum = createAlbum.bind(this);
    listAllAlbums = listAllAlbums.bind(this);
    deleteAlbum = deleteAlbum.bind(this);
    updateAlbum = updateAlbum.bind(this);



}
