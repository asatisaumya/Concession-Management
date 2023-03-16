import React from "react";
import './index.scss';
import logo from './logo.png'
import { SettingOutlined, LogoutOutlined, BellOutlined } from '@ant-design/icons';
import {Layout, Menu} from 'antd';
const { Header } = Layout;
const HeaderMain = () =>{
    return ( 
<Header className="headerStyle" style={{backgroundColor: '#E4E4E4'}}>
<Menu mode="horizontal">
    <Menu.Item>
    <img src={logo} alt="My logo" className="logo" />
    </Menu.Item>
    <Menu.Item icon={<BellOutlined />} style={{ float: 'right', marginLeft: 'auto' }}>
    <Menu.SubMenu key="SubMenu" icon={<SettingOutlined />}>
      <Menu.Item key="two">
        Language
      </Menu.Item>
      <Menu.Item key="three" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
      <Menu.Item key="three" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu.SubMenu>
    </Menu.Item>
  </Menu>
</Header>
)
}

export default HeaderMain;