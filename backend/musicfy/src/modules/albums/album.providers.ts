import { Album } from "./domain/models/album";


export const IAlbumRepository = Symbol('IAlbumRepository');
export const IAlbumService = Symbol('IAlbumService');
export const AlbumORM = Symbol("AlbumORM");

export const albumProviders = [
    {
        provide: AlbumORM,
        useValue: Album,
    },
];
