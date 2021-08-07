import { Injectable } from '@nestjs/common';
import { BlockInfoRepo } from 'src/repository/blcoksinfos.repo';
import { CacheService } from './cahche';


@Injectable()
export class AppService {
  constructor(private readonly blockInfoRepo: BlockInfoRepo,
    private readonly cacheService: CacheService
  ) {

  }
  async getBlockInfo(): Promise<any> {
    return this.blockInfoRepo.getBlockInfo().then(date => date.slice(0, 50));
  }

  async getBlockRowInfo(hash: string): Promise<any> {
    let resp = this.cacheService.get(hash);
    if (resp === undefined) {
      resp = await this.blockInfoRepo.getBlockRowInfo(hash);
      this.cacheService.set(hash, resp);
    }
    return resp;
  }
}
