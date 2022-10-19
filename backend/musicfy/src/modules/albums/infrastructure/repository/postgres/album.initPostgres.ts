import { Injectable } from '@nestjs/common';
import { IAlbumRepository } from 'src/modules/albums/domain/ports/repository';

@Injectable({})
export class AlbumRepositoryPostgres implements IAlbumRepository {
    constructor() {}
}
