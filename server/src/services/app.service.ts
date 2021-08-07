import { Injectable } from '@nestjs/common';
import { BlockInfoRepo } from 'src/repository/blcoksinfos.repo';


@Injectable()
export class AppService {
  constructor(private readonly blockInfoRepo: BlockInfoRepo){

  }
  async getBlockInfo(): Promise<any> {
     return this.blockInfoRepo.getBlockInfo();
  }

  async getBlockRowInfo(hash:string): Promise<any> {
    return this.blockInfoRepo.getBlockRowInfo(hash);
 }
}
