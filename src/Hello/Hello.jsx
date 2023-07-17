/* eslint-disable react/prop-types */
import { Space } from "antd";

function Hello({lang}) {
    return (  
    <Space>
        {lang=="uk"?"Hello": "Xin chào"}
    </Space>);
}

export default Hello;