import { Collapse, Layout, List, Typography } from "antd";
import React from "react";

import "./Home.scss";

const { Content } = Layout;
const { Panel } = Collapse;
const { Text, Title, Paragraph } = Typography;

const stepsData = [
    "Setup python virtual environment",
    "Develop simple python module with Flask libarary" +
        " which can serve json response",
    "Initialize React project with creat-react-app",
    "Setup Eslint & Prettier with airbnb config",
    "Add required config for vscode and resolve ESlint & Prettier conflicts",
    "Setup react-router and main layout definition",
    "Add Error page and render unit tests",
    "Setup axios and config axios server",
    "Develop circuits page",
    "Add unit tests for creating circuits",
    "Add home page",
    "Complete breadcrumb and navigation functionality",
    "Add routing unit tests",
    "Change circuit visualizer style",
    "Add README.md",
];

const improvementsData = [
    "Add some end to end tests for testing procedures using Cypress",
    "UI Improvement",
    "Add more unit tests for better coverage",
    "Use localstorage to store circuits list",
    "Add ability to delete and edit circuits",
];

function Home(): JSX.Element {
    return (
        <Layout className="home-layout" style={{ padding: "24px 24px" }}>
            <Content>
                <Typography>
                    <Title>About</Title>
                    <Paragraph>
                        The <Text type="success">circuit visualizer</Text> web
                        application has the ability to generate a quantum
                        circuit based on the provided gate number. Visitors can
                        generate quantum circuits as much as required and switch
                        between them to see the circuit in detail. The circuits
                        list is<Text type="danger"> temporary</Text> and will
                        refresh after every page reload. To serve appropriate
                        data for a web application, I used
                        <Text type="success"> flask_restful</Text>. I do not
                        have any experience in using Flask but I found it a good
                        choice for developing minimal REST API.
                    </Paragraph>
                </Typography>
                <Collapse>
                    <Panel header="Development steps" key="1">
                        <List
                            size="small"
                            bordered
                            dataSource={stepsData}
                            renderItem={(item, index) => (
                                <List.Item>
                                    {index + 1}. {item}
                                </List.Item>
                            )}
                        />
                    </Panel>
                    <Panel header="Possible improvements" key="2">
                        <List
                            size="small"
                            bordered
                            dataSource={improvementsData}
                            renderItem={(item, index) => (
                                <List.Item>
                                    {index + 1}. {item}
                                </List.Item>
                            )}
                        />
                    </Panel>
                </Collapse>
            </Content>
        </Layout>
    );
}

export default Home;
