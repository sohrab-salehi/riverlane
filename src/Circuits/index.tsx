import React, { useState } from "react";
import { Button, Input, InputNumber, Layout, Menu, message } from "antd";
import { PartitionOutlined } from "@ant-design/icons";

import createCircuit from "../api/circuit";
import CircuitPlot from "./CircuitPlot";

const { Content, Sider } = Layout;

function Circuits(): JSX.Element {
    const [gateNumber, setGateNumber] = useState<number | null>(null);
    const handleCreateCircuit: () => void = () => {
        if (gateNumber === null) {
            message.error("Please insert valid number!");
        } else {
            createCircuit(gateNumber).then((response) => console.log(response));
        }
    };
    return (
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
                        value={gateNumber}
                        onChange={(value) => setGateNumber(value)}
                    />
                    <Button
                        type="primary"
                        size="large"
                        onClick={handleCreateCircuit}
                    >
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
                <CircuitPlot />
            </Content>
        </Layout>
    );
}

export default Circuits;
