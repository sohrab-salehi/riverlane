import { Card, Steps } from "antd";
import React from "react";

import { iCircuit } from "../types/iCircuit";

const { Step } = Steps;

function CircuitPlot(props: { circuitData: iCircuit }): JSX.Element {
    const { circuitData } = props;
    return (
        <Card>
            <Steps>
                {circuitData.circuit.map((gate, index) => (
                    <Step
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
