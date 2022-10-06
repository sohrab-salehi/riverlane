import { Card, Steps } from "antd";
import React from "react";

import { iCircuit } from "../types/iCircuit";

const { Step } = Steps;

function CircuitPlot(props: { circuitData: iCircuit }): JSX.Element {
    const { circuitData } = props;
    return (
        <Card>
            <Steps current={circuitData.circuit.length}>
                {circuitData.circuit.map((gate, index) => (
                    <Step key={`${gate}-${index * 2}`} title={gate} />
                ))}
            </Steps>
        </Card>
    );
}

export default CircuitPlot;
