import { BlockInfoRepo } from 'src/repository/blcoksinfos.repo';
export declare class AppService {
    private readonly blockInfoRepo;
    constructor(blockInfoRepo: BlockInfoRepo);
    getBlockInfo(): Promise<any>;
}
