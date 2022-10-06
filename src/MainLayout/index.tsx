import React from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";

import "./MainLayout.scss";

const { Header, Content, Footer } = Layout;

function MainLayout(): JSX.Element {
    return (
        <Layout id="main-layout">
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["circuits"]}
                    items={[
                        {
                            key: "home",
                            label: "Home",
                        },
                        {
                            key: "circuits",
                            label: "Circuits",
                        },
                    ]}
                />
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Circuits</Breadcrumb.Item>
                </Breadcrumb>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Riverlane ©2022 Created by Sohrab
            </Footer>
        </Layout>
    );
}

export default MainLayout;
