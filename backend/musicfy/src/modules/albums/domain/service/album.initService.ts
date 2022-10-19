import { Injectable } from '@nestjs/common';

export interface IAlbumService {
    // canAlbumBeCreated(): Promise<boolean>
}

export const IAlbumService = Symbol('IAlbumService');

@Injectable({})
export class AlbumService implements IAlbumService {
    // constructor(@Inject(IFechasRepo) protected fechasRepo: IFechasRepo) {}
    constructor() {}
}
