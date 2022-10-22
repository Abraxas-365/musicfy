import { Inject, Injectable } from '@nestjs/common';
import { Album, AlbumORM } from 'src/modules/albums/domain/models/album';
import { IAlbumRepository } from 'src/modules/albums/domain/ports/repository';
import { createAlbum } from './createAlbum';
import { deleteAlbum } from './deleteAlbum';
import { getAlbumById } from './getAlbumById';
import { getAllAlbums } from './getAllAlbums';
import { getNumberOfUsers } from './getNumberOfAlbums';
import { updateAlbum } from './updateAlbum';

@Injectable({})
export class AlbumRepositoryPostgres implements IAlbumRepository {
    constructor(@Inject(AlbumORM) protected albumORM: typeof Album) {}

    getNumberOfAlbums = getNumberOfUsers.bind(this);
    createAlbum = createAlbum.bind(this);
    getAllAlbums = getAllAlbums.bind(this);
    deleteAlbum = deleteAlbum.bind(this);
    updateAlbum = updateAlbum.bind(this);
    getAlbumById = getAlbumById.bind(this)


}
