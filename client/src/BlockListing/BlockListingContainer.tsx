import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { isEmptyBindingElement } from "typescript";
import "./BlockListing.scss"
import { BlockItem, BlockHeader } from "./Components/BlockItem";
import DialogBox from "../DialogBox";
import { BlockDetail } from "./Components/BlockDetail";
import { Dialog } from "@material-ui/core";
import { ListLoading } from "./Components/ListLoading";
import { BlockInfoResp } from "../model/blockInfoResp";

export interface BlockListingProps {

}

const BlockListingContainer = () => {
    const [blockListing, setblockListing] = useState([] as BlockInfoResp[]);
    const [dialogBox, setdialogBox] = useState(false);
    const [activeBlock, setactiveBlock] = useState("");
    const  [isLoading, setisLoading] = useState(true);
    const onDialogBoxClose = () => {
        setdialogBox(false);
    }
    const blockItemOnClick = (hash: string) => {
        setactiveBlock(hash);
        setdialogBox(true);
    }
    useEffect(() => {
        axios.get("http://localhost:3001/api/blocks/info").then(resp => {
            setblockListing(resp.data);
            setisLoading(false);
        })
    }, []);

    const renderListing = () => {
        return blockListing.map((item, key) => {
            return <BlockItem key={key} height={item.height} time={item.time} hash={item.hash} onClick={blockItemOnClick} />
        }
        )
    }
    return (
        <div>
            {isLoading && <ListLoading />}
            {!isLoading &&
                <div className="block-listing card">
                    <table>
                        <BlockHeader />
                        <tbody>
                            {renderListing()}
                        </tbody>
                    </table>
                </div>}
           
            <div >
                {dialogBox &&
                    <DialogBox onClose={onDialogBoxClose} title="Block Detail Info.">
                        <BlockDetail hash={activeBlock} />
                    </DialogBox>

                }
            </div>
        </div>
    );
}

export default BlockListingContainer;