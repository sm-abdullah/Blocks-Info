import "./BlockItem.scss"
export interface BlockItemProps {
  hash: string;
  height: string;
  time: string;
  onClick: () => void;
}

const BlockItem = (props: BlockItemProps) => {
  return (
    <tr className="block-item" onClick={() => props.onClick()}>
      <td className="cell-hash">{props.hash}</td>
      <td className="cell-time">{props.height}</td>
      <td className="cell-height">{props.time}</td>
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
