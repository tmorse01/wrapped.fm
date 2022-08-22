import React from "react";
import { Divider, Menu } from "antd";
import "./style/wrappedsider.css";

const WrappedSider: React.FC = () => {
  return (
    <div className="wrapped-sider">
      <h2 className="wrapped-sider-header">sider</h2>
      <Divider />
      <Menu
        mode="inline"
        defaultSelectedKeys={[""]}
        defaultOpenKeys={[""]}
        style={{ height: "100%" }}
        // items={items2}
      />
    </div>
  );
};

export default WrappedSider;
