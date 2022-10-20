import { Module } from '@nestjs/common';
import { SongModule } from '../songs/song.module';
import { albumProviders } from './album.providers';
import { AlbumController } from './infrastructure/rest/album.controller';

@Module({
    controllers: [AlbumController],
    providers: [...albumProviders],
    exports: [],
    imports: [SongModule]
})
export class AlbumModule {}
