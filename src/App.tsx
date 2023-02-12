import { ConfigProvider, theme } from "antd";
import React from "react";
import WrappedLayout from "./components/wrappedlayout";

import "./App.css";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1db954",
        colorTextBase: "#ffffff",
        colorBgBase: "#191414",
      },
      algorithm: theme.darkAlgorithm,
    }}
  >
    <WrappedLayout />
  </ConfigProvider>
);

export default App;
