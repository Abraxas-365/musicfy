import { Module } from '@nestjs/common';
import { DatabaseModule } from './internal/database/database.module';

@Module({
  imports: [DatabaseModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
