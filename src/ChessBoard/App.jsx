/* eslint-disable no-undef */
import { useState } from "react";
import ChessBoard from "./ChessBoard/index";
import { InputNumber, Space } from "antd";
import {ColorPicker} from "antd"
import {Typography} from "antd";
const {Text} =Typography;
// eslint-disable-next-line react/prop-types
function App({lang}) {
  // eslint-disable-next-line no-unused-vars
  let [size, setSize] = useState(0);
  let [oddcolor, setOddcolor] = useState("#000000");
  let [evencolor, setEvencolor] = useState("#ffffff");
  return (
    <Space className="App" direction="vertical">
      <Space direction="vertical">
        <Space><Text>{lang=="uk"?"Enter chessboard's size":"Nhập size bàn cờ"}</Text>
        <InputNumber value={size} placeholder="Nhập size" onChange={(e)=>setSize(e)}>
        </InputNumber></Space>
        {/* <input
          type="number"
          value={size}
          onChange={(evt) => setSize(evt.target.value)}
          placeholder="Nhập size"
        /> */}
        <Space>
        <Text>{lang=="uk"?"Choose even color":"Chọn màu chẵn"}</Text>
        <ColorPicker value={evencolor} onChange={(value,hex)=>setEvencolor(hex)}/>
        <Text>{lang=="uk"?"Choose odd color":"Chọn màu lẻ"}</Text>
        <ColorPicker value={oddcolor} onChange={(value,hex)=>setOddcolor(hex)}/>
        </Space>

        {/* <input
          type="color"
          name="oddcolor"
          value={oddcolor}
          onChange={(evt) => setOddcolor(evt.target.value)}
        /> */}
        {/* <label htmlFor="oddcolor">Chọn màu lẻ</label> */}
        {/* <input
          type="color"
          name="evennumber"
          value={evencolor}
          onChange={(evt) => setEvencolor(evt.target.value)}
        /> */}
        {/* <label htmlFor="evencolor">Chọn màu chẵn</label> */}
      </Space>
      <Space>
      <ChessBoard size={size} oddcolor={oddcolor} evencolor={evencolor}/>
      </Space>
    </Space>
  );
}

export default App;
