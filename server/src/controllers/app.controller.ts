import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller("api/blocks")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("info")
  async getBlcoksInfo(): Promise<any> {
  
    return    this.appService.getBlockInfo();
  }
}
