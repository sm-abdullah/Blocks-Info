import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import "./BlockDetail.scss"
export interface BlockDetailProps {
    hash?: string;
}
export interface BlockDeailInfoResp {
    prev_block: string;
    block_index: number;
    size: number;
}
const BlockDetail = (props: BlockDetailProps) => {
    const [blockInfo, setblockInfo] = useState({} as BlockDeailInfoResp);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        setisLoading(true);
        axios.get("http://localhost:3001/api/blocks/info?hash=" + props.hash).then(resp => {
            setblockInfo(resp.data);
            setisLoading(false);
        })
    }, [props.hash]);
    const getClassName = () : string => {
       return isLoading ? "value linear-background" : "value";
    }
    return (
      
        <div className="block-detail">
            <table>
                <tbody>
                    <tr className=" "><td className="desc">Size</td><td className={getClassName()}>{blockInfo.size}</td></tr>
                    <tr><td className="desc">Block Index</td><td className={getClassName()}>{blockInfo.block_index}</td></tr>
                    <tr className=" "><td className="desc">Previous Hash</td><td className={getClassName()}>{blockInfo.prev_block}</td></tr>
                </tbody>
            </table>
        </div>
    )
}
export { BlockDetail }