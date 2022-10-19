import { Module } from '@nestjs/common';
import { albumProviders } from './album.providers';
import { AlbumController } from './infrastructure/rest/album.controller';

@Module({
    controllers: [AlbumController],
    providers: [...albumProviders],
    exports: [],
})
export class AlbumModule {}
