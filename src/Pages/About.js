import React, {Component} from 'react';

import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                {/*левая область, которая содержит кнопки*/}
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            {/*отступ от Хедера*/}
                            <Nav variant="pills"  className="flex-column mt-5">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            {/*отступ от Хедера*/}
                            <Tab.Content className="mt-5">
                                <Tab.Pane eventKey="first">
                                    <img
                                        src="https://media.istockphoto.com/photos/website-creative-plan-development-with-drawn-sketch-in-the-design-picture-id1221435509" height="500" width="900"/>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        src="https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height="500" width="900"/>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img
                                        src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="500" width="900"/>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img
                                        src="https://miro.medium.com/max/1400/1*paPkmhDhXifPg-64om52og.jpeg" height="500" width="900"/>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

// export default About;