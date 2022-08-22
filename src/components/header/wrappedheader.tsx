import React from "react";
import "./style/wrappedheader.css";
import LoginModal from "./loginmodal";

const WrappedHeader: React.FC = () => {
  return (
    <div className="wrapped-header">
      <span className="title">wrapped.fm</span>
      <LoginModal />
    </div>
  );
};

export default WrappedHeader;
