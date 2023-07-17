import { Button, InputNumber, Select, Space } from "antd";
import { useEffect, useState } from "react";
import BtnReverse from "./BtnReverse";
import {Typography} from "antd";
const { Option } = Select;
const {Title} =Typography;
// const selectAfter=(

//     <Select
//     defaultValue="USD"
//     style={{width:"60px"}}
//     >
//         <Option defaultValue="USD">$</Option>
//         <Option defaultValue="EUR">€</Option>
//         <Option defaultValue="GBP">£</Option>
//         <Option defaultValue="CNY">¥</Option>
//         <Option defaultValue="VND">đ</Option>
//     </Select>
// )
// eslint-disable-next-line react/prop-types
function ConverterUnit({lang}) {
  let [inMoney, setinMoney] = useState(0);
  let [outMoney, setOutMoney] = useState(0);
  let [inType, setinType] = useState("USD");
  let [outType, setoutType] = useState("VND");
  let [divide, setDivide]=useState(1);
  let [multiply, setMultiply]=useState(1);
  let [flag,setFlag]=useState(0);
  //   switch (inType) {
  //     case "USD":
  //       setOutMoney(inMoney * 23600);
  //       break;
  //     case "EUR":
  //       setOutMoney(inMoney * 25754);
  //       break;
  //     case "GBP":
  //       setOutMoney(inMoney * 29977);
  //       break;
  //     case "CNY":
  //       setOutMoney(inMoney * 3257);
  //       break;
  //   }

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if(flag==1) setOutMoney(inMoney*multiply/divide);

    },[inMoney,divide,multiply])
  return (
    <Space direction="vertical" align="center">
      <Title level={3}>{lang=="uk"? "Converter Unit App": "Ứng dụng đổi tiền"}</Title>
      <InputNumber
        addonAfter={
          <Select
            className="inMoney"
            value={inType}
            style={{ width: "60px" }}
            onChange={(e) => {
                setFlag(1);
              setinType(e);
              switch (e) {
                case "USD":
                  setMultiply(23600)
                  break;
                case "EUR":
                  setMultiply( 25754);
                  break;
                case "GBP":
                  setMultiply( 29977);
                  break;
                case "CNY":
                  setMultiply(3257);
                  break;
                case "VND":
                  setMultiply(1);
                  break;
              }
            }}
          >
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
            <Option value="VND">đ</Option>
          </Select>
        }
        value={inMoney}
        onChange={(e) => {
            setFlag(1);
          setinMoney(e);
          switch (inType) {
            case "USD":
              setMultiply(23600);
              break;
            case "EUR":
              setMultiply( 25754);
              break;
            case "GBP":
              setMultiply( 29977);
              break;
            case "CNY":
              setMultiply( 3257);
              break;
            case "VND":
              setMultiply(1);
              break;
          }
          switch (outType) {
            case "USD":
              setDivide(23600);
              break;
            case "EUR":
              setDivide(25754);
              break;
            case "GBP":
              setDivide(29977);
              break;
            case "CNY":
              setDivide(3257);
              break;
            case "VND":
              setDivide(1);
              break;
          }
        }}
      />
      <Button icon={<BtnReverse/>} shape="circle" style={{ border: "0"}} onClick={()=>{
        setFlag(0);
        setinType(outType);
        setoutType(inType);
        setinMoney(outMoney);
        setOutMoney(inMoney)
      }}/>
      <InputNumber
        addonAfter={
          <Select
            className="outMoney"
            value={outType}
            style={{ width: "60px" }}
            onChange={(e) => {
                setFlag(1);
              setoutType(e);
              switch (e) {
                case "USD":
                  setDivide(23600);
                  break;
                case "EUR":
                  setDivide(25754);
                  break;
                case "GBP":
                  setDivide(29977);
                  break;
                case "CNY":
                  setDivide(3257);
                  break;
                case "VND":
                  setDivide(1);
                  break;
              }
            }}
          >
            <Option value="USD">$</Option>
            <Option value="EUR">€</Option>
            <Option value="GBP">£</Option>
            <Option value="CNY">¥</Option>
            <Option value="VND">đ</Option>
          </Select>
        }
        value={outMoney}
        readOnly
      />
    </Space>
  );
}

export default ConverterUnit;
