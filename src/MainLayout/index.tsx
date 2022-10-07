import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";

import "./MainLayout.scss";

const { Header, Content, Footer } = Layout;

function MainLayout(): JSX.Element {
    const location = useLocation();
    const selectedNavbarItem =
        location.pathname === "/circuits" ? "circuits" : "home";

    const breadcrumbNameMap: Record<string, string> = {
        "/circuits": "Circuits",
    };

    const pathSnippets = location.pathname.split("/").filter((i) => i);

    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });

    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);

    return (
        <Layout id="main-layout">
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[selectedNavbarItem]}
                    items={[
                        {
                            key: "home",
                            label: <Link to="/">Home</Link>,
                        },
                        {
                            key: "circuits",
                            label: <Link to="/circuits">Circuits</Link>,
                        },
                    ]}
                />
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    {breadcrumbItems}
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
