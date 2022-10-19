import { AlbumApplication, IAlbumApplication } from "./application/album.initApplication";
import { Album, AlbumORM } from "./domain/models/album";
import { IAlbumRepository } from "./domain/ports/repository";
import { AlbumService, IAlbumService } from "./domain/service/album.initService";
import { AlbumRepositoryPostgres } from "./infrastructure/repository/postgres/album.initPostgres";



export const albumProviders = [
    {
        provide: AlbumORM,
        useValue: Album,
    },
    {
        provide: IAlbumApplication,
        useClass: AlbumApplication
    },
    {
        provide: IAlbumService,
        useClass: AlbumService
    },
    {
        provide: IAlbumRepository,
        useClass: AlbumRepositoryPostgres
    },


];
