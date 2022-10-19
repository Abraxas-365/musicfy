import { Module } from '@nestjs/common';
import { DatabaseModule } from './internal/database/database.module';
import { AlbumModule } from './modules/albums/album.module';

@Module({
  imports: [DatabaseModule, AlbumModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
