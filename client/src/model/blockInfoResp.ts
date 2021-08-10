interface ApiResponseBase<T> {
    data: T;
    isSuccess: boolean;
    error: string;
}
export interface BlockInfoDetail{
    hash: string;
    height: number;
    time: string;
    blockIndex: number;
}
export interface RowBlockDetail{
    hash: string;
    previousBlock: string;
    time: string;
    height: number;
    size: number;
    index: number;
}
export interface RowBlockResp extends ApiResponseBase<RowBlockDetail>  {}

export interface BlockInfoResp extends  ApiResponseBase<BlockInfoDetail[]> {}