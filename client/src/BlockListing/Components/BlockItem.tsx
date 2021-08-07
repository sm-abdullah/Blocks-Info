import "./BlockItem.scss"
export interface BlockItemProps {
  hash: string;
  height: number;
  time: number;
  onClick: (hash:string) => void;
}

const BlockItem = (props: BlockItemProps) => {
  return (
    <tr className="block-item" onClick={() => props.onClick(props.hash)}>
      <td className="cell-hash">{props.hash}</td>
      <td className="cell-time">{props.time}</td>
      <td className="cell-height">{props.height}</td>
    </tr>
  );
}

export interface BlockHeaderProps {

}

const BlockHeader = () => {
  return (
    <thead className="block-item">
      <tr>
      <th className="cell-hash">Hash</th>
      <th className="cell-time">Time</th>
      <th className="cell-height">Height</th>
      </tr>
    </thead>
  );
}

export { BlockHeader, BlockItem };
