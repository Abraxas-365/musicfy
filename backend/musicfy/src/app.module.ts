import { Module } from '@nestjs/common';
import { DatabaseModule } from './internal/database/database.module';
import { AlbumModule } from './modules/albums/album.module';
import { SongModule } from './modules/songs/song.module';

@Module({
  imports: [DatabaseModule, AlbumModule, SongModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
