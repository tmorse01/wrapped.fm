import React from "react";
import { Button } from "antd";
import "../css/wrappedheader.css";

export default function WrappedHeader() {
  return (
    <div className="wrapped-header">
      <span className="title">wrapped.fm</span>
      <Button className="login-button" type="primary">
        Login
      </Button>
    </div>
  );
}
