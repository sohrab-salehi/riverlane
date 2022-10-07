import { Card, Steps } from "antd";
import React from "react";

import { iCircuit } from "../types/iCircuit";

const { Step } = Steps;

function CircuitPlot(props: { circuitData: iCircuit }): JSX.Element {
    const { circuitData } = props;
    return (
        <Card>
            <Steps direction="vertical">
                {circuitData.circuit.map((gate, index) => (
                    <Step
                        style={{ margin: "auto" }}
                        status="process"
                        key={`${gate}-${index * 2}`}
                        title={gate}
                    />
                ))}
            </Steps>
        </Card>
    );
}

export default CircuitPlot;
