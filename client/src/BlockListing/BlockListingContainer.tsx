import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { isEmptyBindingElement } from "typescript";
import "./BlockListing.scss"
import { BlockItem, BlockHeader } from "./Components/BlockItem";
import DialogBox from "../DialogBox";

export interface BlockListingProps {

}
const cd: any[] = [{ "hash": "0000000000000000000efcea1cc1a169955e9cf6f039ddeabfdd1da1ac6d9899", "height": 603966, "time": 1573858343, "block_index": 603966 },
{ "hash": "0000000000000000000ee40dc80e8ddd28d6389ba8dd59bb147b48d8f7a87f13", "height": 603965, "time": 1573857408, "block_index": 603965 },
{ "hash": "0000000000000000000cc742f3903cf8960ffd9c51ad17d03182bf471c59f002", "height": 603964, "time": 1573856957, "block_index": 603964 },
{ "hash": "00000000000000000004f941b4a37d7500a1c90a681ed0df9eacf845f0c40e3e", "height": 603963, "time": 1573856530, "block_index": 603963 },
{ "hash": "000000000000000000072200d4179a900d6b4ab78cd0add270a727afbf3a17f7", "height": 603962, "time": 1573856123, "block_index": 603962 }];
const BlockListingContainer = () => {
    const [blockListing, setblockListing] = useState(cd);
    const [dialogBox, setdialogBox] = useState(true);
    const onDialogBoxClose = () => {
        setdialogBox(false);
    }
    const showDialogBox = () => {
        setdialogBox(true);
    }
    useEffect(() => {
        axios.get("/api/blocks/info").then(resp => {
            setblockListing(resp.data);
        })
    }, []);

    const renderListing = () => {
        return blockListing.map(item => {
            return <BlockItem height={item.height} time={item.time} hash={item.hash} onClick={showDialogBox} />
        }
        )
    }
    return (
        <div>
            <div className="block-listing card">
                <table>
                    <BlockHeader />
                    <tbody>
                        {renderListing()}
                    </tbody>
                </table>
            </div>
            <div className="card">
                adsfasd
            </div>
           { dialogBox && <DialogBox onClose={onDialogBoxClose}/>}
        </div>
    );
}

export default BlockListingContainer;