import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Request} from 'express'

@Controller("api/blocks")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("info")
  async getBlcoksInfo(@Req() request: Request): Promise<any> {
    if (request.query.hash) {
      return this.appService.getBlockRowInfo(request.query.hash.toString());
    }
    else {
      return this.appService.getBlockInfo();
    }

  };
}
