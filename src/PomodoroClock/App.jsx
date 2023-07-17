import { useEffect, useState } from "react";
import  "./Setting.css";
import { Button, Input, Space, TimePicker } from "antd";
import { Typography } from "antd";
const { Text } = Typography;
function App({lang}) {
  let [x, setX] = useState(new Date().toLocaleTimeString());
  let [work, setWork] = useState(true);
  let [elapsed, setElapsed] = useState(0);
  let [secf, setSecf] = useState(0);
  let [sect, setSect] = useState(0);
  let [secnow, setSecnow] = useState(0);
  let [show, setShow] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setX(new Date().toLocaleTimeString());
    }, 1000);
  });
  useEffect(() => {
    let [time, modifier] = x.split(" ");
    let [hh, mm, ss] = time.split(":");
      if (modifier == "AM") setSecnow(hh * 3600 + mm * 60 + 1 * ss);
      else {
        setSecnow(hh*3600+mm*60+1*ss+12*3600);
      }
      console.log(secnow);
  },[x]);
  useEffect(() => {

      if (elapsed > 0 && (secf > secnow || work)) {
        setElapsed(elapsed - 1);
      } else if (elapsed > 0 && secnow > sect) {
        setElapsed(elapsed + 1);
      }
      if (elapsed == 0) setWork(!work);
      setWork(secf<=secnow&&sect>=secnow);
      if (work) {
        setElapsed(sect - secnow);
      } else {
        if (secf > secnow) {
          setElapsed(secf - secnow);
        } else {
          setElapsed(secnow - sect);
        }
      }
  },[secf,sect,secnow]);

  return (
    <Space direction="vertical">
      <Space>
        <Button
          onClick={() => {
            setShow(1);
          }}
        >
          {lang=="uk"?"Setting":"Cài đặt"}
        </Button>
      </Space>

          <Input value={x} readOnly></Input>
      <div className={`setting appear${show}`}>
      <div>
        <Text>{lang=="uk"?"Choose time to start:": "Chọn thời gian bắt đầu làm việc:"}</Text>
        <TimePicker format={"HH:mm"} defaultPickerValue={x}  onChange={(time,timeStr)=>{
          let [fhh,fmm]=timeStr.split(":");
          setSecf(fhh*3600+fmm*60);
        }}/>
      </div>
      <div>
      <Text>{lang=="uk"?"Choose time to finish:": "Chọn thời gian dừng làm việc:"}</Text>
        <TimePicker id="workto" format={"HH:mm"}  onChange={(time,timeStr)=>{
          let [thh,tmm]=timeStr.split(":");
          setSect(thh*3600+tmm*60);
        }}/>

      </div>
      <Button onClick={()=>setShow(0)}>Close</Button>
    </div>
      {work ? (
        <Text style={{ color: "red" }}>{lang=="uk"?"work time": "giờ làm việc"}</Text>
      ) : (
        <Space style={{ color: "green" }}>{lang=="uk"?"rest time": "giờ nghỉ"}</Space>
      )}
      <Space>Elapse time: {elapsed} s</Space>
    </Space>
  );
}

export default App;
