import { useEffect, useState } from "react";
import Square from "./Square";
import { Button, Space } from "antd";

// eslint-disable-next-line react/prop-types
function Board({size1,numofMines1} ) {
  let [count, setCount] = useState(0);
  const [board, setBoard] = useState([]);
  let [size, setSize]=useState(size1);
  let [numofMines, setNumofMines]=useState(numofMines1);
  const changesizemine=()=>{
    setSize(size1);
    setNumofMines(numofMines1);
  }
  useEffect(() => {
    const randomMines = [];
    while (randomMines.length < numofMines) {
      const randomMine = Math.floor(Math.random() * (size*size));
      const isUnique = randomMines.every((mine) => mine - randomMine !== 0);
      if (isUnique) randomMines.push(randomMine);
    }

    const newBoard = [];
    for (let i = 0; i < size; i++) {
      newBoard.push([]);
      for (let j = 0; j < size; j++) {
        newBoard[i].push(0);
      }
    }

    for (let i in randomMines) {
      let a = parseInt(randomMines[i] / size);
      let b = randomMines[i] % size;
      newBoard[a][b] = -1;
    }

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (newBoard[i][j] != -1) {
          try {
            if (i < size-1) {
              if (newBoard[i + 1][j] == -1) newBoard[i][j]++;
            }
            if (i > 0) {
              if (newBoard[i - 1][j] == -1) newBoard[i][j]++;
            }
            if (i < size-1 && j < size-1) {
              if (newBoard[i + 1][j + 1] == -1) newBoard[i][j]++;
            }
            if (i > 0 && j < size-1) {
              if (newBoard[i - 1][j + 1] == -1) newBoard[i][j]++;
            }
            if (i < size-1 && j > 0) {
              if (newBoard[i + 1][j - 1] == -1) newBoard[i][j]++;
            }
            if (i > 0 && j > 0) {
              if (newBoard[i - 1][j - 1] == -1) newBoard[i][j]++;
            }
            if (j < size-1) {
              if (newBoard[i][j + 1] == -1) newBoard[i][j]++;
            }
            if (j > 0) {
              if (newBoard[i][j - 1] == -1) newBoard[i][j]++;
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    }

    setBoard(newBoard);
  }, [size, numofMines]);
  // let clicked=[];
  // for(let i=0;i<size;i++){
  //   clicked.push([]);
  //   for(let j=0;j<size;j++){
  //     clicked[i].push(false);
  //   }
  // }
  // console.log(clicked);
  // function onclick(rowIdx, cellIdx) {
  //   setCount(count + 1);
  //   console.log(count);
  //   clicked[rowIdx][cellIdx]=true;
  //   console.log(clicked);
  //   if(board[rowIdx][cellIdx]==0){
  //     for(let i=rowIdx-1;i<=rowIdx+1;i++){
  //       for(let j=cellIdx-1;j<=cellIdx+1;j++){
  //         if(i>=0&&i<size&&j>=0&&j<size&&i!==rowIdx&&j!==cellIdx&&!clicked[i][j]) onclick(i,j);
  //       }
  //     }
  //   }
  // }
  return (
    <div>
      <Button onClick={()=>changesizemine()}>Change</Button>
      {board.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <Square
              key={cellIdx}
              index={board[rowIdx][cellIdx]}
              onClick={() => {
                  setCount(count+1);
                  console.log(count);
              }}
            />
          ))}
        </div>
      ))}
      {count == (size*size)-numofMines ? <div>You win</div> : <div></div>}
      <Space>
      <Button onClick={()=>window.location.reload()}>New game</Button>
      </Space>
    </div>
  );
}

export default Board;
