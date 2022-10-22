import { Module } from '@nestjs/common';
import { DatabaseModule } from './internal/database/database.module';
import { AlbumModule } from './modules/albums/album.module';
import { SongModule } from './modules/songs/song.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [DatabaseModule, AlbumModule, SongModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
