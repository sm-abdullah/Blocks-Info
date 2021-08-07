import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { BlockInfoRepo } from './repository/blcoksinfos.repo';
import { AppService } from './services/app.service';
import { CacheService } from './services/cahche';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [BlockInfoRepo,CacheService, AppService],
})
export class AppModule {}
