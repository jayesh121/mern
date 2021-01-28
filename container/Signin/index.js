import React from 'react'
import Layout from "../../components/Layout";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from "../../components/UI/Input"
export default function Signin(props) {
    return (

        <div>
            <Layout >
                <Container>


                    <Row style={{ marginTop: '50px' }}>
                        <Col md={{ span: 6, offset: 3 }} >
                            <Form>
                            <Input
                            label="Email"
                            value=""
                            placeholder="Email"
                            type="password"
                            onChange={() => { }}
                        />
                        <Input
                        label="Password"
                        value=""
                        placeholder="Password"
                        type="password"
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
