export interface RowBlockResponse {
    hash: string;
    ver: string;
    prev_block: string;
    mrkl_root: string;
    time: number;
    bits: number;
    nonce: number;
    n_tx: number;
    size: number;
    block_index: number;
    main_chain: boolean;
    height: number;
    received_time: string;
    relayed_by: string;
    tx: any[]
}
