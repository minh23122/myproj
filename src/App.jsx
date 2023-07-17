import { useState } from "react";
import {
  DollarOutlined,
  ClockCircleOutlined,
  CalculatorOutlined,
  UserOutlined,
  AccountBookOutlined
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Space, Layout, Menu, Typography, Select } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Hello from "./Hello/Hello";
import HeaderIC from "./Header/HeaderIC";
import Chessboard from "./ChessBoard/App";
import Calculator from "./Calculator2/Calculator";
import Pomodoro from "./PomodoroClock/App";
import ConverterUnit from "./ConverterUnit/ConverterUnit";
import MineSweeper from "./Minesweeper/App"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { faChess } from "@fortawesome/free-solid-svg-icons";
import {  library } from '@fortawesome/fontawesome-svg-core'
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faBomb } from "@fortawesome/free-solid-svg-icons";
import UnitedKingdom from "./Flag/UnitedKingdom";
import VietNam from "./Flag/VietNam";
import Quote from "./Quotes/Quote";
const { Option } = Select

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faChess,fas, faHandshake, far, faBomb);
const { Text } = Typography;
// function getItem(label, key, icon) {
//   return {
//     key,
//     icon,
//     label,
//   };
// }
// const items = [
//   getItem("HelloWorld", "1", <HelloIcon />),
//   getItem("ChessBoard", "2", <ChessBoardIC />),
//   getItem("PomodoroClock", "3", <ClockCircleOutlined />),
//   getItem("Canculator", "4", <CalculatorOutlined />),
//   getItem("Unit Converter", "5", <DollarOutlined />),
// ];
function App() {
  const route = window.location.pathname;
  const [collapsed, setCollapsed] = useState(false);
  const [lang, setLang]=useState("uk");
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <BrowserRouter>
      <Layout style={{
            minHeight: "100vh",
          }}>
        <Header
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Space>
            <HeaderIC size={24} style={{ verticalAlign: "text-bottom" }} />
            <Text
              style={{
                fontFamily: "cursive",
                color: "white",
                fontSize: "20px",
              }}
            >
              {lang=="uk"? "This is Minh's project" :" Đây là dự án của Minh"}
            </Text>
          </Space>
          <Space style={{marginLeft:"20px"}} >
            <Select showSearch 
            placeholder={lang=="uk"?"Search":"Bạn muốn đi đâu"} 
            style={{minWidth:"200px"}}
            optionFilterProp="children"
            onChange={(e)=>{window.location.href=`/${e}`}}
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            defaultValue=""
            options={[
              {
                value:"HelloWorld",
                label:"Hello World"
              },
              {
                value:"ChessBoard",
                label:"ChessBoard"
              },
              {
                value:"Calculator",
                label:"Calculator"
              },
              {
                value:"PomodoroClock",
                label:"PomodoroClock"
              },
              {
                value:"ConverterUnit",
                label:"Converter Unit"
              },
              {
                value:"Minesweeper",
                label:"Minesweeper"
              },
            ]}
            >

            </Select>
          </Space>
          <Space style={{position: "fixed", right: "50px"}}>
            <Select defaultValue={"uk"} style={{display:"flex"}} onChange={(e)=> setLang(e)}>
              <Option value="vi"><VietNam/></Option>
              <Option value="uk"><UnitedKingdom/></Option>
            </Select>
            <Space align="end" style={{color:"white"}}><UserOutlined />{lang=="uk"?"Pham Duc Minh":"Phạm Đức Minh"}</Space>
          </Space>
        </Header>
        <Layout

        >
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >

            <div/>
            <Menu
              theme="dark"
              defaultOpenKeys={"1"}
              defaultSelectedKeys={route}
              mode="inline"
              items={[
                {
                  label: (
                    <Link to={"/HelloWorld"}>
                      {lang=="uk"?"Hello": "Xin Chào"}          
                    </Link>
                  ),
                  icon: <FontAwesomeIcon icon="fa-regular fa-handshake" style={{color: "inherit",}} />,
                  key: "/HelloWorld",
                },
                {
                  label: (
                    <Link to={"/Chessboard"}>
                      {lang=="uk"?"Chessboard": "Bàn cờ"}          
                    </Link>
                  ),
                  icon: <FontAwesomeIcon icon="fa-chess" style={{color: "inherit",}} />,
                  key: "/Chessboard",
                },
                {
                  label: (
                    <Link to={"/Calculator"}>
                      {lang=="uk"?"Calculator": "Máy tính bỏ túi"}          
                    </Link>
                  ),
                  icon: <CalculatorOutlined/>,
                  key: "/Calculator",
                },
                {
                  label: (
                    <Link to={"/PomodoroClock"}>
                      {lang=="uk"? "Pomodoro clock": "Đồng hồ"}          
                        
                    </Link>
                  ),
                  icon:<ClockCircleOutlined/>,
                  key: "/PomodoroClock",
                },
                {
                  label: (
                    <Link to={"/ConverterUnit"}>
                      <Space>
                      {lang=="uk"?"Converter Unit": "Ứng dụng đổi tiền"}          

                      </Space>
                    </Link>
                  ),
                  icon:<DollarOutlined/>,
                  key: "/ConverterUnit",
                },
                {
                  label: (
                    <Link to={"/Minesweeper"}>
                      <Space>
                      {lang=="uk"?"Minesweeper": "Trò chơi dò mìn"}          

                      </Space>
                    </Link>
                  ),
                  icon:<FontAwesomeIcon icon="fa-solid fa-bomb" />,
                  key: "/Minesweeper",
                },
                {
                  label: (
                    <Link to={"/Quote"}>
                      <Space>
                      {lang=="uk"?"Quote": "Châm ngôn"}          

                      </Space>
                    </Link>
                  ),
                  icon:<AccountBookOutlined />,
                  key: "/Quote",
                },
              ]}
            />
          </Sider>
          <Layout>
            <Content style={{ margin: "20px" }}>
              <Routes>
                <Route path="/HelloWorld" element={<Hello lang={lang}/>} />
                <Route path="/Chessboard" element={<Chessboard lang={lang}/>} />
                <Route path="/Calculator" element={<Calculator lang={lang}/>} />
                <Route path="/PomodoroClock" element={<Pomodoro lang={lang}/>} />
                <Route path="/ConverterUnit" element={<ConverterUnit lang={lang}/>} />
                <Route path="/Minesweeper" element={<MineSweeper lang={lang}/>} />
                <Route path="/Quote" element={<Quote/>} />
              </Routes>
            </Content>
            <Footer
              style={{
                textAlign: "center",
                height:64
              }}
            >
              {lang=="uk"?"Created by Pham Duc Minh": "Ứng dụng được tạo bởi Phạm Đức Minh"}
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
