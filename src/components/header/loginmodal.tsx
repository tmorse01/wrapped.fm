import { useState } from "react";
import { Button, Modal } from "antd";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import "./style/loginmodal.css";
import LoginForm from "./loginform";

const LoginModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsUserLoggedIn(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <>
      <Button
        className="login-button"
        type={"primary"}
        danger={isUserLoggedIn}
        icon={isUserLoggedIn ? <LoginOutlined /> : <LogoutOutlined />}
        onClick={!isUserLoggedIn ? showModal : handleLogout}
      >
        {isUserLoggedIn ? "Logout" : "Login"}
      </Button>
      <Modal
        title="Login"
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <LoginForm handleOk={handleOk} />
      </Modal>
    </>
  );
};

export default LoginModal;
