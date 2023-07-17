import { InputNumber, Typography } from 'antd'
import Board from './Board'
import { useState } from 'react'
const {Text}=Typography;
// eslint-disable-next-line react/prop-types
function App({lang}) {
  const [size1,setSize1]=useState(8);
  const [numofMines1, setNumofMines1]=useState(8);
  return (
    <>
      <div>
      <Text>{lang=="uk"?"Enter size" :"Nhập size:"}</Text>
      <InputNumber min={8} max={20} value={size1} onChange={(e)=>{setSize1(e)}}/>
      </div>
      <div>
      <Text>{lang=="uk"?"Enter num of mine:":"Nhập số boom:"}</Text>
      <InputNumber min={8} max={150} value={numofMines1} onChange={(e)=>{setNumofMines1(e)}} />
      </div>
      <Board size1={size1} numofMines1={numofMines1}/>
    </>
  )
}

export default App
