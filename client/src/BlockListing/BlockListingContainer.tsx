import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { isEmptyBindingElement } from "typescript";
import "./BlockListing.scss"
import { BlockItem, BlockHeader } from "./Components/BlockItem";
import DialogBox from "../DialogBox";
import { BlockDetail } from "./Components/BlockDetail";
import { Dialog } from "@material-ui/core";
import { ListLoading } from "./Components/ListLoading";

export interface BlockListingProps {

}
const cd: any[] = [{ "hash": "0000000000000000000efcea1cc1a169955e9cf6f039ddeabfdd1da1ac6d9899", "height": 603966, "time": 1573858343, "block_index": 603966 },
{ "hash": "0000000000000000000ee40dc80e8ddd28d6389ba8dd59bb147b48d8f7a87f13", "height": 603965, "time": 1573857408, "block_index": 603965 },
{ "hash": "0000000000000000000cc742f3903cf8960ffd9c51ad17d03182bf471c59f002", "height": 603964, "time": 1573856957, "block_index": 603964 },
{ "hash": "00000000000000000004f941b4a37d7500a1c90a681ed0df9eacf845f0c40e3e", "height": 603963, "time": 1573856530, "block_index": 603963 },
{ "hash": "000000000000000000072200d4179a900d6b4ab78cd0add270a727afbf3a17f7", "height": 603962, "time": 1573856123, "block_index": 603962 }];
const BlockListingContainer = () => {
    const [blockListing, setblockListing] = useState(cd);
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