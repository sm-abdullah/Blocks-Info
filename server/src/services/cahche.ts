import { Injectable } from "@nestjs/common";
import * as NodeCache from 'node-cache';
import { BlockDeailInfo } from "src/models/BlockDetailInfo";


@Injectable()
export class CacheService {
    private cache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

    get(hash: string): BlockDeailInfo {
        return this.cache.get(hash)
    }

    async set(hash: string, blockInfo: BlockDeailInfo): Promise<any> {
        return this.cache.set(hash, blockInfo);
    }
}