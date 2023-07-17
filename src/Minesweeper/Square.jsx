import { useState } from "react";
import { FlagOutlined } from "@ant-design/icons";
import "./style.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faBomb,fas);

// eslint-disable-next-line react/prop-types, no-unused-vars
function Square({ index, onClick }) {
  let [appear, setAppear] = useState(false);
  let [flag, setFlag] = useState(false);
  let [bgcolor, setBgColor]=useState("#ffffff");
  let [color, setColor]=useState("red");
  let showCell = () => {
    setBgColor("darkgray");
    if(index==0) setColor("darkgray")
    if(index==1) setColor("blue");
    if(index==2) setColor("green");
    setAppear(true);
    if (index == -1) {
      window.alert("You lose");
      location.reload();
    }
  };
  const style = {
    display: "inline-block",
    width: "20px",
    height: "20px",
    border: "1px solid black",
    textAlign: "center",
    verticalAlign: "top",
    backgroundColor:`${bgcolor}`,
    color:`${color}`
  };
  return (
    <div
      // className={appear}
      style={style}
      onClick={() => {
        if (!flag&&!appear) {
          onClick();
          if(onClick) showCell();
          
        }
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setFlag(!flag);
      }}
    >
      {flag ? <FlagOutlined /> : appear ? index==-1 ? <FontAwesomeIcon icon="fa-solid fa-bomb"/> :index: <></>}
      {}
    </div>
  );
}

export default Square;
