import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { BlockInfoRepo } from './repository/blcoksinfos.repo';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [BlockInfoRepo,AppService],
})
export class AppModule {}
