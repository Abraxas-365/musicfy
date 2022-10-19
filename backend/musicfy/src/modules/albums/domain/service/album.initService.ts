import { Inject, Injectable } from '@nestjs/common';
import { IAlbumRepository } from '../ports/repository';
import { canAlbumBeCreated } from './canAlbumBeCreated';

export interface IAlbumService {
    canAlbumBeCreated(): Promise<boolean>
}
export const IAlbumService = Symbol('IAlbumService');


@Injectable({})
export class AlbumService implements IAlbumService {
    constructor(@Inject(IAlbumRepository) protected albumRepo: IAlbumRepository) {}

    canAlbumBeCreated = canAlbumBeCreated.bind(this)
}
