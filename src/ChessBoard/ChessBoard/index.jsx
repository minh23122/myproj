import { useEffect, useState } from "react";
import Cell from "../Cell/Cell";
import { Space } from "antd";
// eslint-disable-next-line react/prop-types
function ChessBoard({ size, oddcolor, evencolor }) {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      board[i].push(j);
    }
  }
  let [mauchan, setMauChan] = useState(evencolor);
  let [maule, setMauLe] = useState(oddcolor);
  useEffect(()=>{
    setMauChan(evencolor);
    setMauLe(oddcolor);
  },[evencolor,oddcolor])
  return (
    <Space.Compact direction="vertical"
      className="ChessBoard"
      onClick={() => {
        setMauChan(maule);
        setMauLe(mauchan);
      }}

    >
      {board.map((row, rowIdx) => (
        <Space.Compact className="row" key={rowIdx} style={{lineHeight:"0px"}}>
          {row.map((cell, cellIdx) => (
            <Cell
              key={cellIdx}
              cellStyle={(rowIdx + cellIdx) % 2 ? mauchan : maule}
            />
          ))}
        </Space.Compact>
      ))}
    </Space.Compact>
  );
}
export default ChessBoard;
