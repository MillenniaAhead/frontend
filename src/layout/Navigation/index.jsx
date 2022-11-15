import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  NumberOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  UserDeleteOutlined,
  CalendarOutlined,
  TeamOutlined,
  ProfileOutlined,
  SelectOutlined,
  SoundOutlined,
  RiseOutlined,
  SettingOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="logo"><img src="image 1.png" style={{ width: '40px',height:'30px' }} /><img src="OUTLET.png"  style={{ width: '48px', height: '22px',margin: '5px' }}/><img src="CONTROL.png"  style={{ width: '49px', height: '22px',margin: '6px' }}/></div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/" />
            Home Page
          </Menu.Item>
         
          <Menu.Item key="3" icon={<CalendarOutlined />}>
            <Link to="/">Calender</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<CustomerServiceOutlined />}>
            <Link to="/">Sales</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<TeamOutlined />}>
            <Link to="/customer">Clients</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<ProfileOutlined />}>
            <Link to="/">Products</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<SelectOutlined />}>
            <Link to="/">Online profile</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<SoundOutlined />}>
            <Link to="/">Promote</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<RiseOutlined />}>
            <Link to="/">Reports</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<SettingOutlined />}>
            <Link to="/setup">Business Setting</Link>
          </Menu.Item>
          <Menu.Item key="24" icon={<UserOutlined />}>
            <Link to="/selectcustomer">Custom Select Customer</Link>
          </Menu.Item>
          <Menu.Item key="21" icon={<FileTextOutlined />}>
            <Link to="/lead" />
            Lead
          </Menu.Item>
          <Menu.Item key="3" icon={<FileSyncOutlined />}>
            <Link to="/product" />
            Product
          </Menu.Item>
          <Menu.Item key="31" icon={<UserDeleteOutlined />}>
            <Link to="/admin" />
            Admins Management
          </Menu.Item>
          <Menu.Item key="2" icon={<CustomerServiceOutlined />}>
            <Link to="/customer">Customer</Link>
          </Menu.Item>
          <Menu.Item key="32" icon={<NumberOutlined />}>
            <Link to="/settings" />
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
