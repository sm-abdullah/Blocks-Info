import { BlockInfoDetail } from "src/services/model/BlockInfoDetail";
import { RowBlockDetail } from "src/services/model/RowBlockDetail";


interface ApiResponseBase<T> {
    data: T;
    isSuccess: boolean;
    error?: string;
}
export interface RowBlockResp extends ApiResponseBase<RowBlockDetail>  {}

export interface BlockInfoResp extends  ApiResponseBase<BlockInfoDetail[]> {}
