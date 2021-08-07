import { BlockInfoRepo } from 'src/repository/blocksInfo.repo';
export declare class AppService {
    private readonly blockInfoRepo;
    constructor(blockInfoRepo: BlockInfoRepo);
    getBlockInfo(): Promise<any>;
}
