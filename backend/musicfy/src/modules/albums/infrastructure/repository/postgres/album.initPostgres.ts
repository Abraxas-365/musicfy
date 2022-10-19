import { Inject, Injectable } from '@nestjs/common';
import { AlbumORM } from 'src/modules/albums/album.providers';
import { Album } from 'src/modules/albums/domain/models/album';
import { IAlbumRepository } from 'src/modules/albums/domain/ports/repository';
import { getNumberOfUsers } from './getNumberOfAlbums';

@Injectable({})
export class AlbumRepositoryPostgres implements IAlbumRepository {
    constructor(@Inject(AlbumORM) protected albumORM: typeof Album) {}

    getNumberOfAlbums = getNumberOfUsers.bind(this)


}
