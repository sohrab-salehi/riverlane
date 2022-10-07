import React, { useState } from "react";
import { Button, Input, InputNumber, Layout, Menu, message } from "antd";
import { PartitionOutlined } from "@ant-design/icons";

import { MenuItemType } from "antd/lib/menu/hooks/useItems";
import createCircuit from "../api/circuit";
import CircuitPlot from "./CircuitPlot";
import { iCircuit } from "../types/iCircuit";

const { Content, Sider } = Layout;

function Circuits(): JSX.Element {
    const [gateNumber, setGateNumber] = useState<number | null>(null);
    const [circuitsList, setCircuitsList] = useState<iCircuit[]>([]);
    const [selectedCircuit, setSelectedCircuit] = useState<string>("1");
    const [createCircuitLoading, setCreateCircuitLoading] =
        useState<boolean>(false);

    const handleCreateCircuit: () => void = () => {
        setCreateCircuitLoading(true);
        createCircuit(gateNumber).then(
            (response) => {
                const newCircuit = {
                    index: circuitsList.length + 1,
                    circuit: response.data.circuit,
                };
                const newList = circuitsList.concat(newCircuit);
                setCircuitsList(newList);
                setSelectedCircuit(String(newCircuit.index));
                setCreateCircuitLoading(false);
            },
            (error) => {
                setCreateCircuitLoading(false);
                message.error(error.response.data.error_message);
            }
        );
    };

    const convertToMenuItem: () => MenuItemType[] = () => {
        const items = circuitsList.map((circuit) => {
            return {
                key: circuit.index,
                icon: <PartitionOutlined />,
                label: `Circuit ${circuit.index}`,
            };
        });
        return items;
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
                        style={{ width: "calc(100% - 61px)" }}
                        size="large"
                        value={gateNumber}
                        onChange={(value) => setGateNumber(value)}
                    />
                    <Button
                        type="primary"
                        size="large"
                        onClick={handleCreateCircuit}
                        disabled={gateNumber === null}
                        loading={createCircuitLoading}
                    >
                        Add
                    </Button>
                </Input.Group>
                <Menu
                    mode="inline"
                    selectedKeys={[selectedCircuit]}
                    items={convertToMenuItem()}
                    onSelect={({ key }) => setSelectedCircuit(key)}
                />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
                {circuitsList.length !== 0 ? (
                    <CircuitPlot
                        circuitData={circuitsList[Number(selectedCircuit) - 1]}
                    />
                ) : null}
            </Content>
        </Layout>
    );
}

export default Circuits;
