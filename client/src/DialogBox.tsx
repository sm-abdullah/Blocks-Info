import "./DialogBox.scss"

interface DialogBoxProps {
    onClose:() => void;
}
const DialogBox = (props:DialogBoxProps) => {
    return (
        <div id="centerpoint">
            <div id="dialog">
                <div className="modal-box">
                 <div className="header">
                    <div className="title-box">text</div>
                    <div className="close-box noselect" onClick={()=> props.onClose()}>x</div>
                 </div>

                 <div className="content">contet</div>
                </div>
            </div>
        </div>
    );
}

export default DialogBox;