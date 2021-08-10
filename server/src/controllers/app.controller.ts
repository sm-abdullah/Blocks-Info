import { Controller, Get, HttpStatus, Param, Req, Res } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Request, Response } from 'express'
import { BlockInfoResp, RowBlockResp } from './model/RowBlockResp';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("blocks")
  async getBlcoksInfo(): Promise<BlockInfoResp> {
    return this.appService.getBlockInfo().then(resp => {
      return {
        isSuccess: true,
        data : resp,
      }
    })
  };

  @Get("blocks/:hash")
  async getRowBlock(@Param('hash') hash: string): Promise<RowBlockResp> {
    return this.appService.getBlockRowInfo(hash.toString()).then(resp => {
      return {
        data: resp,
        isSuccess: true,
      } as RowBlockResp;
    });
  };

}
