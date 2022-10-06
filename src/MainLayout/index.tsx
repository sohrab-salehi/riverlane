import React from "react";
import { Outlet } from "react-router-dom";
import { PartitionOutlined } from "@ant-design/icons";
import { Button, Breadcrumb, Input, InputNumber, Layout, Menu } from "antd";

import "./MainLayout.scss";

const { Header, Content, Footer, Sider } = Layout;

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
                <Layout
                    className="site-layout-background"
                    style={{ padding: "24px 0" }}
                >
                    <Sider className="site-layout-background" width={400}>
                        <Input.Group compact>
                            <InputNumber
                                addonBefore="Number of Gates:"
                                type="number"
                                min={1}
                                style={{ width: "calc(100% - 61px)" }}
                                size="large"
                            />
                            <Button type="primary" size="large">
                                Add
                            </Button>
                        </Input.Group>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            items={[
                                {
                                    key: "1",
                                    icon: <PartitionOutlined />,
                                    label: "Circuit 1",
                                },
                            ]}
                        />
                    </Sider>
                    <Content style={{ padding: "0 24px", minHeight: 280 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Riverlane ©2022 Created by Sohrab
            </Footer>
        </Layout>
    );
}

export default MainLayout;
