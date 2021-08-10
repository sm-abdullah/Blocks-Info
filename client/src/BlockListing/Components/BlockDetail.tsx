import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { RowBlockDetail, RowBlockResp } from '../../model/blockInfoResp';
import "./BlockDetail.scss"
export interface BlockDetailProps {
    hash?: string;
}

const BlockDetail = (props: BlockDetailProps) => {
    const rowBlockDetail: RowBlockDetail = {
        hash: "",
        time: "",
        previousBlock: "",
        height: 0,
        size: 0,
        index: 0,
    }
    const [blockInfo, setblockInfo] = useState(rowBlockDetail);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {
        setisLoading(true);
        axios.get<RowBlockResp>("http://localhost:3001/api/blocks/" + props.hash).then(resp => {
            setblockInfo(resp.data.data);
            setisLoading(false);
        })
    }, [props.hash]);
    const getClassName = (): string => {
        return isLoading ? "value linear-background" : "value";
    }
    return (

        <div className="block-detail">
            <table>
                <tbody>
                    <tr className=" "><td className="desc">Size</td><td className={getClassName()}>{blockInfo.size === 0 ? "" : blockInfo.size}</td></tr>
                    <tr><td className="desc">Block Index</td><td className={getClassName()}>{blockInfo.index === 0 ? "" : blockInfo.index}</td></tr>
                    <tr className=" "><td className="desc">Previous Hash</td><td className={getClassName()}>{blockInfo.previousBlock}</td></tr>
                </tbody>
            </table>
        </div>
    )
}
export { BlockDetail }