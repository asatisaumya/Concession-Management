
import {ContainerOutlined,DesktopOutlined,PieChartOutlined,} from '@ant-design/icons';
import { Menu } from 'antd';
import './index.scss';
function getItem(icon) {
  return {
    icon,
  };
}
const items = [
  getItem(<PieChartOutlined />),
  getItem(<DesktopOutlined />),
  getItem(<ContainerOutlined />),
  getItem(<ContainerOutlined />),
];
const Sidebar = () => {
  return (
    <div className='navbar'>
      {/* <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      /> */}
    </div>
  );
};
export default Sidebar;