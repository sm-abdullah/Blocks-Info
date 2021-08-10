import { BlockInfoRepo } from 'src/repository/blcoksinfos.repo';
import { CacheService } from './cahche';
import { BlockInfoDetail } from './model/BlockInfoDetail';
import { RowBlockDetail } from './model/RowBlockDetail';
export declare class AppService {
    private readonly blockInfoRepo;
    private readonly cacheService;
    constructor(blockInfoRepo: BlockInfoRepo, cacheService: CacheService);
    getBlockInfo(): Promise<BlockInfoDetail[]>;
    getBlockRowInfo(hash: string): Promise<RowBlockDetail>;
}
