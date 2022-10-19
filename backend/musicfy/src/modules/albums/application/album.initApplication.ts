import { Inject, Injectable } from "@nestjs/common";
import { IAlbum } from "../domain/models/album";
import { IAlbumRepository } from "../domain/ports/repository";
import { IAlbumService } from "../domain/service/album.initService";
import { createAlbum } from "./createAlbum";
import { listAllAlbums } from "./listAllAlbums";


export const IAlbumApplication = Symbol("IAlbumApplication");
export interface IAlbumApplication {
    createAlbum(album: IAlbum): Promise<IAlbum>
    listAllAlbums(): Promise<Array<IAlbum>>

}

@Injectable({})
export class AlbumApplication implements IAlbumApplication {
    constructor(
        @Inject(IAlbumService) protected albumService: IAlbumService,
        @Inject(IAlbumRepository) protected albumRepository: IAlbumRepository
    ) {}

    createAlbum = createAlbum.bind(this);
    listAllAlbums = listAllAlbums.bind(this)



}
