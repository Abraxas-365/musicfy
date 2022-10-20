import { ISongApplication, SongApplication } from "./application/song.initApplication";
import { Song, SongORM } from "./domain/models/song";
import { ISongRepository } from "./domain/ports/repository";
import { SongRepositoryPostgres } from "./infrastructure/repository/postgres/song.initPostgres";

export const songProviders = [
    {
        provide: SongORM,
        useValue: Song,
    },
    {
        provide: ISongApplication,
        useClass: SongApplication
    },
    {
        provide: ISongRepository,
        useClass: SongRepositoryPostgres
    },

];
