import { Module } from '@nestjs/common';
import { albumProviders } from './album.providers';

@Module({
    providers: [...albumProviders],
    exports: [],
})
export class AlbumModule {}
