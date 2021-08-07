import React, { Children, useState } from "react";
import "./DialogBox.scss"

interface DialogBoxProps {
    onClose: () => void;
    children: any;
}


const DialogBox = ({ children, onClose } : DialogBoxProps) => {

    return (
        <div id="centerpoint">
        <div id="dialog">
            <div className="modal-box">
                <div className="header">
                    <div className="title-box">text</div>
                    <div className="close-box noselect" onClick={() => onClose()}>x</div>
                </div>

                <div className="content">sdfsdfsdf
                {children}
                </div>
            </div>
        </div>
    </div>
 
    );
};

export default DialogBox;
