import * as React from 'react';
export interface BlockDetailProps{
    hash?: string;
}
const BlockDetail = (props: BlockDetailProps) => {
    return (
        <div>
            ti is blcsfd
            {props.hash}
        </div>
    )
}
export { BlockDetail }