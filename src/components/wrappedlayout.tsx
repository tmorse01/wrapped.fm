import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.min.css";
import "./style/wrappedlayout.css";

import WrappedHeader from "./header/wrappedheader";
import WrappedSider from "./content/wrappedsider";
import WrappedContent from "./content/wrappedcontent";

const { Header, Footer, Sider, Content } = Layout;

export default class WrappedLayout extends React.Component {
  render(): React.ReactNode {
    return (
      <Layout className="layout">
        <Header className="header">
          <WrappedHeader />
        </Header>
        <Layout className="center">
          <Sider className="sider">
            <WrappedSider />
          </Sider>
          <Content className="content">
            <WrappedContent />
          </Content>
        </Layout>
        <Footer className="footer">
          wrapped.fm created by tmorse01, ThomasJazz and Noctsol on github
        </Footer>
      </Layout>
    );
  }
}
