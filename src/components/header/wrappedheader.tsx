import React from "react";
import "./style/wrappedheader.css";
import LoginModal from "./loginmodal";
import logo from "../../assets/icons8-spotify-200.svg";
import { Menu, theme, Layout } from "antd";

import type { MenuProps } from "antd";

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const WrappedHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="wrapped-header">
      <img src={logo} style={{ height: "64px" }} alt="logo" />
      <Menu
        style={{ background: colorBgContainer, width: 200 }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items1}
      />
      <div className="title">wrapped.fm</div>
      <LoginModal />
    </div>
  );
};

export default WrappedHeader;
