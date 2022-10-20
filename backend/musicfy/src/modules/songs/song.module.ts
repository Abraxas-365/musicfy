import { Module } from '@nestjs/common';
import { ISongApplication, SongApplication } from './application/song.initApplication';
import { SongController } from './infrastructure/rest/song.controller';
import { songProviders } from './song.provider';

@Module({
    controllers: [SongController],
    providers: [...songProviders],
    exports: [
        {
            provide: ISongApplication,
            useClass: SongApplication
        },
    ],
})
export class SongModule {}
