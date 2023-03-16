import React from "react";
import UploadFiles from "./Components/UploadFiles";
import Footer from "./Components/Footer/index";
import Header from "./Components/Header/index";
import Sidebar from "./Components/Sidebar";
import './App.css';
import background from "./img/background.png";
import {Layout, Space } from 'antd';
const { Sider, Content } = Layout;
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
};
const App = () =>{
    return (
        <div>
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
    <Header />
    <Layout>
    <div className="siderStyle">
    <Sider style={{width: '100px', maxWidth: '100px', minWidth: '100px'}}>
        <Sidebar />
      </Sider>
    </div>

      <Content style={contentStyle}>
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`}}>
      <UploadFiles />
      </div>
      </Content>
    </Layout>
    <Footer />
  </Layout>
  </Space>
            
        </div>
    )
}

export default App;
