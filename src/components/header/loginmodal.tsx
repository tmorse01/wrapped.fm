import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./style/loginmodal.css";
import LoginForm from "./loginform";

const LoginModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button className="login-button" type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginModal;
