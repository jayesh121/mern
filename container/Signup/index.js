import React from 'react'
import Layout from "../../components/Layout";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from "../../components/UI/Input"
export default function Signup() {
    return (
        <div>

            <Layout >
                <Container>


                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }} >
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            label="first Name"
                                            value=""
                                            placeholder="firstName"
                                            type="text"
                                            onChange={() => { }}
                                        />
                                    </Col>

                                    <Col md={6}>

                                        <Input
                                            label="Last Name"
                                            value=""
                                            placeholder="Last Name"
                                            type="text"
                                            onChange={() => { }}
                                        />
                                    </Col>
                                </Row>
                                <Input
                                    label="Email"
                                    value=""
                                    type="email"
                                    placeholder="Email"
                                    onChange={() => { }}
                                />

                                <Input
                                    label="Password"
                                    value=""
                                    type="password"
                                    placeholder="password"
                                    onChange={() => { }}
                                />

                                <Button variant="primary" type="submit">
                                    Submit
                              </Button>
                            </Form>


                        </Col>
                    </Row>






                </Container>
            </Layout>
        </div>
    )
}
