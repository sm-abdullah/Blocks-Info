
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { BlockInfoDetail } from 'src/services/model/BlockInfoDetail';
import { RowBlockDetail } from 'src/services/model/RowBlockDetail';
import { BlockInfoResponse } from './models/BlockInfoResponse';
import { RowBlockResponse } from './models/RowBlockResponse';
@Injectable()
export class BlockInfoRepo {
    constructor(){}
    async getBlockInfo(): Promise<BlockInfoDetail[]> {
        // Future Improvemnts : it should be pulled from configuration
        return axios.get<BlockInfoResponse[]>("http://blockchain.info/blocks/1573858800000?format=json")
            .then(resp => {
                const data = resp.data.map(item => {
                    const blockInfoDetail: BlockInfoDetail = {
                        hash: item.hash,
                        height: item.height,
                        time: item.time,
                        blockIndex: item.block_index,
                    };
                    return blockInfoDetail;
                });
                return data;
            });

    };
    async getBlockRowInfo (hash:string) : Promise<RowBlockDetail> {
        // Future Improvemnts : it should be pulled from configuration
        return axios.get<RowBlockResponse>("https://blockchain.info/rawblock/"+hash).then(item => {
            const resp : RowBlockDetail = {
                hash: item.data.hash,
                previousBlock: item.data.prev_block,
                time: item.data.time,
                height: item.data.height,
                size: item.data.size,
                index: item.data.block_index,
            }
           return  resp;
        })
    };
}
