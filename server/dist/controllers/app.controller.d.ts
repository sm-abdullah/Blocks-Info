import { AppService } from '../services/app.service';
import { BlockInfoResp, RowBlockResp } from './model/RowBlockResp';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getBlcoksInfo(): Promise<BlockInfoResp>;
    getRowBlock(hash: string): Promise<RowBlockResp>;
}
