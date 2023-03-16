import React from "react";
import {Layout} from 'antd';
const {Footer} = Layout;
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#317DC3',
  }; 
  const FooterMain = () =>{
    return ( 

<Footer style={footerStyle}>Copyright © Axiscades 2023 </Footer>
    )
  }
  export default FooterMain;