import React from "react";
import { Menu } from "antd";
import "./style/wrappedsider.css";

const WrappedSider: React.FC = () => {
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
};

export default WrappedSider;
