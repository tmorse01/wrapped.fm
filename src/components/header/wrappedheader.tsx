import React from "react";
import "./style/wrappedheader.css";
import LoginModal from "./loginmodal";
import logo from "../../logo.svg";

const WrappedHeader: React.FC = () => {
  return (
    <div className="wrapped-header">
      <img src={logo} style={{ height: "64px" }} alt="logo" />
      <div className="title">wrapped.fm</div>
      <LoginModal />
    </div>
  );
};

export default WrappedHeader;
