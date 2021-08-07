
import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class BlockInfoRepo {
    constructor(){}
    async getBlockInfo () : Promise<any> {
        return axios.get("http://blockchain.info/blocks/1573858800000?format=json").then(item => item.data)
    };
}
