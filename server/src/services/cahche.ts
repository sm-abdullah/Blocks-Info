import { Injectable } from "@nestjs/common";
import * as NodeCache from 'node-cache';
import { RowBlockDetail } from "./model/RowBlockDetail";


@Injectable()
export class CacheService {
    // best way to pull it from configuration
    private cache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );
    
    get(hash: string): RowBlockDetail {
        return this.cache.get(hash)
    }

    set(hash: string, blockInfo: RowBlockDetail): boolean {
        return this.cache.set(hash, blockInfo);
    }
}