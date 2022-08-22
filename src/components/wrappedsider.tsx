import React from "react";
import { Menu } from "antd";
import "../css/wrappedsider.css";

export default function WrappedSider() {
  return (
    <div className="wrappedsider">
      <h2 className="wrapped-sider-header">sider</h2>
      <Menu
        mode="inline"
        defaultSelectedKeys={[""]}
        defaultOpenKeys={[""]}
        style={{ height: "100%" }}
        // items={items2}
      />
    </div>
  );
}
