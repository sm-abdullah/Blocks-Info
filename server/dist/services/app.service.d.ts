import { BlockInfoRepo } from 'src/repository/blcoksinfos.repo';
import { CacheService } from './cahche';
export declare class AppService {
    private readonly blockInfoRepo;
    private readonly cacheService;
    constructor(blockInfoRepo: BlockInfoRepo, cacheService: CacheService);
    getBlockInfo(): Promise<any>;
    getBlockRowInfo(hash: string): Promise<any>;
}
