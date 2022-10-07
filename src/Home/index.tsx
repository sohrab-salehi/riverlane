import { Collapse, Layout, Typography } from "antd";
import React from "react";

import "./Home.scss";

const { Content } = Layout;
const { Panel } = Collapse;
const { Text, Title, Paragraph } = Typography;

function Home(): JSX.Element {
    return (
        <Layout className="home-layout" style={{ padding: "24px 24px" }}>
            <Content>
                <Typography>
                    <Title>About</Title>
                    <Paragraph>
                        The <Text type="success">circuit visualizer</Text> web
                        application has the ability to generate quantum circuit
                        based on the provided gate number. Visitors can generate
                        quantum circuit as much as required and switch between
                        them to see circuit in detail. The circuits list is
                        <Text type="danger"> temporary</Text> and will refresh
                        after every page reload. To serve appropriate data for
                        web application, I used
                        <Text type="success"> flask_restful</Text>. I do not
                        have any experience in using Flask but I found it a good
                        choice for developing minimal REST API.
                    </Paragraph>
                </Typography>
                <Collapse>
                    <Panel header="How to run project" key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header="This is panel nest panel" key="1">
                                <p />
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="How to run tests" key="2">
                        <p />
                    </Panel>
                    <Panel header="Component document" key="3">
                        <p />
                    </Panel>
                </Collapse>
            </Content>
        </Layout>
    );
}

export default Home;
