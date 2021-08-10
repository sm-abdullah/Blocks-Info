import { Injectable } from '@nestjs/common';
import { BlockInfoRepo } from 'src/repository/blcoksinfos.repo';
import { CacheService } from './cahche';
import { BlockInfoDetail } from './model/BlockInfoDetail';
import { RowBlockDetail } from './model/RowBlockDetail';


@Injectable()
export class AppService {
  constructor(private readonly blockInfoRepo: BlockInfoRepo,
    private readonly cacheService: CacheService
  ) {

  }
  async getBlockInfo(): Promise<BlockInfoDetail[]> {
    return this.blockInfoRepo.getBlockInfo().then(date => date.slice(0, 50));
  }

  async getBlockRowInfo(hash: string): Promise<RowBlockDetail> {
    let resp = this.cacheService.get(hash);
    if (resp === undefined) {
      resp = await this.blockInfoRepo.getBlockRowInfo(hash);
      this.cacheService.set(hash, resp);
    }
    return resp;
  }
}
