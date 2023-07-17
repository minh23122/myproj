import { Input, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import ButtonKey from "./Button"
const {Title}=Typography;
// eslint-disable-next-line react/prop-types
function Calculator({lang}) {
  const [input, setInput]=useState("");
    const [operand,setOperand]=useState("");
    const [result,setResult]=useState(0);
    const [check,setCheck]=useState(true);
    const evaluate=()=>{
        setCheck(false);
        try{
            setResult(eval(operand));
        }
        catch(err){

            setResult(lang=="uk"?"Syntax error":"Dữ liệu nhập không hợp lệ");
        }
    }
    const handleButtonClick=(label)=>{
        if(check) setInput(input+label);
        else {
            if(label=="+"||label=="-"||label=="\u00D7"||label=="\u00F7"||label=="^"||label=="%") setInput("ANS"+label);
            else setInput(""+label);
        }
        setCheck(true);
    }
    useEffect(()=>{
      setOperand(input.replaceAll('^','**').replaceAll("ANS",`(${result})`).replaceAll('\u00D7','*').replaceAll('\u00F7',"/"));

    },[input])
    const buttons = [
        {
          value: "AC",
          onclick: () => {
            setInput("");
            setResult(0);
          },
        },
        { value: 1, onclick: () => handleButtonClick(1) },
        { value: 2, onclick: () => handleButtonClick(2) },
        {
          value: "Back",
          onclick: () => {
            let s=input.slice(-3);
            if(s=="ANS") setInput(input.slice(0, -3));
            else setInput(input.slice(0, -1));
          },
        },
        { value: 3, onclick: () => handleButtonClick(3) },
        { value: 4, onclick: () => handleButtonClick(4) },
        { value: 5, onclick: () => handleButtonClick(5) },
        { value: "+", onclick: () => handleButtonClick("+") },
        { value: 6, onclick: () => handleButtonClick(6) },
        { value: 7, onclick: () => handleButtonClick(7) },
        { value: 8, onclick: () => handleButtonClick(8) },
        { value: "-", onclick: () => handleButtonClick("-") },
        { value: 9, onclick: () => handleButtonClick(9) },
        { value: 0, onclick: () => handleButtonClick(0) },
        { value: "mod", onclick: () => handleButtonClick("%") },
        { value: "^", onclick: () => handleButtonClick("^") },
        { value: "(", onclick: () => handleButtonClick("(") },
        { value: ")", onclick: () => handleButtonClick(")") },
        { value: "ANS", onclick: () => handleButtonClick("ANS") },
        { value: "*", label: "\u00D7", onclick: () => handleButtonClick("\u00D7") },
        { value: "=", weight: 2.1, onclick: evaluate },
        { value: ".", onclick: () => handleButtonClick(".") },
        { value: "/", label: "\u00F7", onclick: () => handleButtonClick("\u00F7") },
      ];
    return (  
        <Space direction="vertical" align="center" style={{width:"100%"}}>
        <Title level={2}>{lang=="uk"?"My Calculator":"Máy tính của tôi"}</Title>
        <Space direction="vertical" style={{width:"326px", border:"1px solid black", padding:"10px"}}>
            <Input value={input} />
            <Input value={result} readOnly/>
            <Space wrap>
        {
          /* Buttons go here */
          buttons.map((b, idx) => (
            <ButtonKey
              key={idx}
              value={b.value}
              label={b.label}
              onclick={b.onclick}
              weight={b.weight}
            />
          ))
        }
      </Space>
        </Space>
        </Space>
        
    );
}

export default Calculator;