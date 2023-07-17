import { Button } from "antd";
// eslint-disable-next-line react/prop-types
function ButtonKey({label,onclick,value,weight}) {
    return ( 
        <Button style={{
            width: `${(weight || 1) * 70}px`,
            height: "40px",
            
        }} onClick={onclick}>{label||value}</Button>
    );
}

export default ButtonKey;