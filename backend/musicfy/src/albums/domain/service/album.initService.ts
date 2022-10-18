import { Injectable } from '@nestjs/common';

export interface IFechasService {}

export const IFechasService = Symbol('IFechasService');

@Injectable({})
export class FechasService implements IFechasService {
    // constructor(@Inject(IFechasRepo) protected fechasRepo: IFechasRepo) {}
    constructor() {}
}
