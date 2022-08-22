import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import "../css/wrappedlayout.css";

import WrappedHeader from "./wrappedheader";
import WrappedSider from "./wrappedsider";
import WrappedContent from "./wrappedcontent";

const { Header, Footer, Sider, Content } = Layout;

export default class WrappedLayout extends React.Component {
  render(): React.ReactNode {
    return (
      <Layout className="layout">
        <Header className="header">
          <WrappedHeader />
        </Header>
        <Layout>
          <Sider className="sider">
            <WrappedSider />
          </Sider>
          <Content className="content">
            <WrappedContent />
          </Content>
        </Layout>
        <Footer className="footer">Footer</Footer>
      </Layout>
    );
  }
}
